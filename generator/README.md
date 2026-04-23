# `generator/`

Maintainer-only code generator. Produces the public artifacts of `pokedex-promise-v2` from the upstream PokeAPI JSON Schemas. Run when upstream schemas change.

## Pipeline

```
npm run generate:all
├─ apidata:clone / apidata:sync / apidata:replace      → ./api-data/
├─ generate:types   (TypesGenerator.ts)                → types/index.d.ts + dist/generator/apiMap.json
├─ generate:main    (Main.ts)                          → src/index.ts (Pokedex class) + appends to types/index.d.ts
└─ generate:jsdocs  (AddJSDocs.ts)                     → enriches types/index.d.ts with PokeAPI doc descriptions
```

Each script is a separate Node process; the handoff between them is the on-disk `dist/generator/apiMap.json` and the in-progress `types/index.d.ts`.

## quicktype name rewrites

`TypesGenerator.ts` runs the schemas through `quicktype-core`. Two classes of rewrite happen before the namespace body is written:

### Pass 1 — canonical resource shapes

PokeAPI schemas frequently embed `{url}` or `{name, url}` shapes inline rather than as `$ref`s. Quicktype synthesizes per-context interface names for these (e.g. `MachineElement`, `LanguageElement`, `EvolutionChainElement`).

The generator scans all emitted interfaces and rewrites any whose **exact** property shape matches:

| Detected shape | Rewritten to |
|---|---|
| `{ url: string }` | `APIResource` |
| `{ name: string, url: string }` | `NamedAPIResource` |

The interface is removed and all references to its name are replaced. New synthesized names that fit either shape are picked up automatically.

### Pass 2 — `Element` / `Object` suffix dedupe

Quicktype occasionally emits a duplicate of an existing interface with an `Element` or `Object` suffix when the same shape appears in multiple schema contexts. Examples that get auto-collapsed:

| Suffixed dup | Canonical |
|---|---|
| `FormNameElement` | `Name` |
| `DescriptionElement` | `Description` |
| `EffectEntryElement` | `Effect` |
| `FlavorTextEntryElement` | `FlavorText` |
| `EncounterDetailElement` | `Encounter` |
| `GameIndexElement` | `GenerationGameIndex` |
| `VersionDetailElement` | `VersionEncounterDetail` |
| `EffectEntryObject` | `VerboseEffect` |
| `FlavorTextEntryObject` | `VersionGroupFlavorText` |
| `GameIndexObject` | `VersionGameIndex` |
| `MachineObject` | `MachineVersionDetail` |

Detection rule: scan post-Pass-1 interfaces, group by exact property signature, and for any group with exactly two members where one ends in `Element`/`Object` and the other doesn't, rewrite the suffixed name to the canonical one. Pass 1 must run first so signatures already use `APIResource` / `NamedAPIResource` for the embedded resource refs.

### Pass 3 — shape-aliased collapses

For shapes that quicktype emits under many per-context names (sprite collections, icon collections, …) but which are semantically a single type, the `shapeAliases` table in `TypesGenerator.ts` lets the maintainer drive the collapse by example:

```ts
const shapeAliases: { sample: string; canonical: string }[] = [
  { sample: 'FluffyEmerald',          canonical: 'IconName' },
  { sample: 'TentacledScarletViolet', canonical: 'IconNameWithSymbol' },
];
```

For each entry the generator computes the property signature of `sample`, finds **every** interface with that exact signature, and rewrites them all to `canonical`. The canonical interface is either an existing match (kept) or one of the matches renamed in place. Pre-populated entries:

- `IconName` — `{ name_icon }` (~18 per-game icon descriptors)
- `IconNameWithSymbol` — `{ name_icon, symbol_icon }` (newer Gen IX / BD-SP icon descriptors with type symbol)

**When to add an entry:** after a regen, inspect `git diff types/`. If you see N `XxxName` types all with the same shape that should logically be one type, pick a maintainer-chosen canonical name and add a `shapeAliases` entry.

**When NOT to add an entry:** if the shared shape is incidental to distinct domain entities (e.g. `EggGroup` / `EvolutionTrigger` / `PokemonColor` all share a structure but are different things). The detector blindly collapses every match — only safe when the shape uniquely identifies one semantic type.

### Pass 4 — strip quicktype's adjective disambiguation prefixes

Quicktype prefixes synthesized duplicates with adjectives (`Purple*`, `Fluffy*`, `Tentacled*`, `Sticky*`, …) when the same property in different parents holds an inline anonymous shape it can't merge.

For each prefix-stripped base name, Pass 4:

1. Collects every prefixed variant.
2. If a base interface already exists, skips (don't risk redefining).
3. If exactly one variant: strips the prefix (orphan rename).
4. If multiple variants: looks for a **dominator** — a variant whose property set is a (non-strict) superset of every sibling's, with each shared field's type a (non-strict) superset (covers exact-equal, `null` ⊆ `null | T` widening, AND missing-field tolerance where one variant's example data lacked some fields). When a dominator exists, it's renamed to the base and the others dropped.
5. Iterates until convergence so cascades resolve (`PurpleVersions` / `FluffyVersions` only collapse after their nested `PurpleGenerationIx` / `FluffyGenerationIx` have first been collapsed).

Must run **after** Pass 3 — Pass 3 first peels off the icon-shape `Fluffy*` / `Tentacled*` siblings (collapsed to `IconName` / `IconNameWithSymbol`), leaving the sprite-shape `Purple*` as orphans Pass 4 can handle cleanly.

### Pass 5 — collapse depth-unrolled recursive interfaces

PokeAPI's evolution chain is recursive (`Chain` → `Chain[]` → `Chain[]` → …), but example data never populates the deepest recursion. Quicktype unrolls it into N per-depth interfaces (`Chain`, `ChainEvolvesTo`, `EvolvesToEvolvesTo`) and falls back to `any[]` at the recursion boundary.

Pass 5 detects this by following a property whose type is `"Other[]"` through a sequence of interfaces; if the sequence terminates in `any[]` at the same property, all chain members collapse into the outermost (start) interface, with the recursive property rewritten to `Self[]` and any sibling fields widened across the chain (so `any[]` at the boundary is replaced by the populated type from a deeper member).

Result for the EvolutionChain case:

```ts
interface Chain {
  evolution_details: EvolutionDetail[];
  evolves_to: Chain[];          // recursive self-ref
  is_baby: boolean;
  species: NamedAPIResource;
}
```

Generic — any future recursive types in the schema get the same treatment automatically as long as the depth-unrolling terminates in `any[]`.

### Hand-listed removals

The `canonicalRewrites` table in `TypesGenerator.ts` carries one explicit entry:

- `VersionGroupNamedList` — collides with the root list types we generate ourselves; removed without replacement.

Add another entry here only if quicktype emits an interface that needs rewriting but does **not** fit any of the auto-detect rules above (e.g. a name collision with one of the root types, or a one-off synthesized name with no canonical sibling).

## Known quirks NOT handled automatically

These produce drift in `types/index.d.ts` between regenerations and the committed file. Review the diff after regenerating and clean up by hand.

### Element-suffixed types with no canonical sibling

Some `*Element` interfaces are real distinct shapes that don't pair with anything in the rest of the namespace, so Pass 2 leaves them alone. Currently:

```
BerryElement   { berry: NamedAPIResource; potency: number }
MoveElement    { move: NamedAPIResource; version_group_details: VersionGroupDetail[] }
StatElement    { base_stat: number; effort: number; stat: NamedAPIResource }
```

These are valid types with awkward auto-generated names. Rename them manually after regeneration if you want a friendlier public API name (e.g. `FlavorBerryMap`, `PokemonMove`, `PokemonStat`). Update any references too.

## Regeneration workflow

```bash
npm run generate:all
git diff types/ src/
```

If the diff contains:
- New `XxxElement` / `XxxObject` names with no canonical sibling → leave (real types) or rename by hand.
- New `Purple*` / `Fluffy*` / `Tentacled*` survivors → Pass 4 only collapses when a dominator exists. If two siblings are genuinely incompatible shapes, add a `shapeAliases` entry pointing each to its own canonical name.
- Anything matching `{url}` or `{name, url}` not already rewritten → that's a bug in Pass 1; fix `TypesGenerator.ts`.
- A `*Element` / `*Object` whose canonical sibling didn't get auto-collapsed → check Pass 2: the pair must have **exactly two** members in the same shape group. If quicktype emitted a third structurally identical interface, the dedupe is intentionally skipped to avoid wrong merges (different domain entities sometimes share structure — see `EggGroup` / `EvolutionTrigger` / `PokemonColor`).
- A new `any[]` not at the Chain recursion boundary → likely another empty-array example artifact; inspect schema.

## Files

- `Main.ts` — generates `src/index.ts` (Pokedex class with all endpoint methods)
- `TypesGenerator.ts` — generates `types/index.d.ts` from JSON Schemas; runs the rewrite pipeline
- `AddJSDocs.ts` — fetches PokeAPI docs from GitHub in parallel and injects them as JSDoc comments on the generated interfaces
- `Utils.ts` — shared paths and timer labels
- `tsconfig.json`, `.eslintrc` — generator-local config
