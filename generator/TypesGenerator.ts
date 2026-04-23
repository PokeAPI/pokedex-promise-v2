import fs from 'fs';
import path from 'path';
import directoryTree from 'directory-tree';
import { InterfaceDeclaration, Project, Writers } from 'ts-morph';
import {
  quicktype, InputData, JSONSchemaInput, FetchingJSONSchemaStore,
} from 'quicktype-core';

import {
  apiMapFile, schemaFolder, typesLabel, typeFile,
} from './Utils.js';

console.log(schemaFolder);
if (!fs.existsSync(schemaFolder)) {
  console.log('Schemas not found, please clone the "PokeAPI/api-data" repository on the root of this project first and change all $refs from "/schema/v2" to "api-data/data/schema/v2")');
  process.exit(1);
}

// Convert kebab-case (or single word) into PascalCase
function toPascalCase(text: string) {
  return text
    .split('-')
    .map((part) => (part ? part.charAt(0).toUpperCase() + part.slice(1) : ''))
    .join('');
}

// A map for the methods of the class
const apiMap: Record<string, string> = {};

// The method that will string together the types and the PokeAPI class
async function generateFinalFile(types: string) {
  // Log progress...
  console.timeLog(typesLabel, '- Types generated, starting the generation of the definition file...');

  // Initialize the types file
  const project = new Project();
  const file = project.createSourceFile(typeFile, `/*
* Type definitions for pokedex-promise-v2 v4.x
* DO NOT MODIFY, THIS IS AUTO GENERATED
* Code by: HRKings <https://github.com/HRKings/>
* And: Christian Garza <https://github.com/C-Garza/>
* Code inspired by: Mudkip <https://github.com/mudkipme/>
* Execute \`npm run generate:types\` to regenerate
*/`, { overwrite: true });

  // Create the root module
  const rootModule = file.addModule({
    name: '\'pokedex-promise-v2\'',
  });

  // Create the namespace
  const namespace = rootModule.addModule({
    name: 'PokeAPI',
  });

  // Write the interfaces to the namespace
  namespace.setBodyText(types);

  // Apply a set of name rewrites to the namespace: drop each `from` interface
  // and replace its references in the body with `to` (empty `to` only drops).
  const applyRewrites = (rewrites: Record<string, string>) => {
    for (const name of Object.keys(rewrites)) {
      namespace.getInterface(name)?.remove();
    }
    let body = namespace.getBodyText();
    for (const [from, to] of Object.entries(rewrites)) {
      if (to) {
        body = body.split(from).join(to);
      }
    }
    namespace.setBodyText(body);
  };

  const interfaceShape = (iface: InterfaceDeclaration) => iface.getProperties()
    .map((p) => `${p.getName()}:${p.getTypeNode()?.getText()}`)
    .sort()
    .join('|');

  // Pass 1 — canonical resource shapes.
  // Quicktype synthesizes per-context interfaces (e.g. MachineElement,
  // LanguageElement, EvolutionChainElement) when the PokeAPI schema embeds
  // {url} or {name,url} shapes inline rather than via $ref. Detect by exact
  // shape and rewrite references back to the canonical resource types.
  // Empty target = drop the interface and leave references untouched (used
  // for VersionGroupNamedList, which collides with our root list types).
  const canonicalRewrites: Record<string, string> = {
    VersionGroupNamedList: '',
  };
  const canonicalShapes = new Set(['APIResource', 'NamedAPIResource']);
  for (const iface of namespace.getInterfaces()) {
    const name = iface.getName();
    if (canonicalShapes.has(name)) continue;
    const sig = interfaceShape(iface);
    if (sig === 'url:string') {
      canonicalRewrites[name] = 'APIResource';
    } else if (sig === 'name:string,url:string') {
      canonicalRewrites[name] = 'NamedAPIResource';
    }
  }
  applyRewrites(canonicalRewrites);

  // Pass 2 — Element/Object suffix dedupe.
  // Quicktype occasionally emits a duplicate of an existing interface with
  // an "Element" or "Object" suffix when the same shape appears in multiple
  // schema contexts (e.g. FormNameElement vs Name, EffectEntryObject vs
  // VerboseEffect). When exactly one of a duplicate-shape pair carries the
  // suffix, rewrite it to the canonical sibling. Pass 1 must run first so
  // shapes match on canonical types.
  const suffixPattern = /(Element|Object)$/;
  const groupsByShape = new Map<string, string[]>();
  for (const iface of namespace.getInterfaces()) {
    const sig = interfaceShape(iface);
    if (!sig) continue;
    const group = groupsByShape.get(sig) ?? [];
    group.push(iface.getName());
    groupsByShape.set(sig, group);
  }
  const duplicateRewrites: Record<string, string> = {};
  for (const names of groupsByShape.values()) {
    if (names.length !== 2) continue;
    const suffixed = names.find((n) => suffixPattern.test(n));
    const canonical = names.find((n) => !suffixPattern.test(n));
    if (suffixed && canonical) {
      duplicateRewrites[suffixed] = canonical;
    }
  }
  applyRewrites(duplicateRewrites);

  // Pass 3 — shape-aliased collapses for quicktype's per-context duplicates.
  // Quicktype emits one interface per parent context for inline anonymous
  // shapes that it cannot merge (Purple*/Fluffy*/RubySaphire/Xd/...). Many
  // of these are structurally identical and semantically the same thing
  // (e.g. all `{ name_icon }` shapes are the same icon descriptor). Each
  // entry below picks one existing interface as a "shape sample" and a
  // chosen canonical name; the generator computes that interface's exact
  // property signature, finds every other interface with the same signature,
  // and rewrites them all to the canonical name. The canonical interface is
  // either an existing interface with the matching shape, or one of the
  // matches renamed in place.
  //
  // Add an entry only when the shape is uniquely owned by a single semantic
  // type (no risk of collapsing distinct domain entities — see EggGroup /
  // EvolutionTrigger / PokemonColor for the kind of false positive to avoid).
  const shapeAliases: { sample: string; canonical: string }[] = [
    // All `{ name_icon }` shapes are per-game icon descriptors. Collapse
    // ~18 interfaces (Colosseum, Xd, Fluffy*, ScarletViolet, …) to IconName.
    { sample: 'FluffyEmerald', canonical: 'IconName' },
    // `{ name_icon, symbol_icon }` is the newer Gen IX/BD-SP icon descriptor.
    { sample: 'TentacledScarletViolet', canonical: 'IconNameWithSymbol' },
  ];
  const aliasRewrites: Record<string, string> = {};
  const aliasRenames: { from: string; to: string }[] = [];
  for (const { sample, canonical } of shapeAliases) {
    const sampleIface = namespace.getInterface(sample);
    if (!sampleIface) {
      console.warn(`shapeAliases: sample interface "${sample}" not found, skipping`);
      continue;
    }
    const targetShape = interfaceShape(sampleIface);
    const matches = namespace.getInterfaces()
      .filter((i) => interfaceShape(i) === targetShape)
      .map((i) => i.getName());
    const existing = namespace.getInterface(canonical);
    if (existing) {
      if (interfaceShape(existing) !== targetShape) {
        console.warn(`shapeAliases: canonical "${canonical}" exists with a different shape, skipping`);
        continue;
      }
      for (const name of matches) {
        if (name !== canonical) aliasRewrites[name] = canonical;
      }
    } else {
      aliasRenames.push({ from: matches[0], to: canonical });
      for (const name of matches.slice(1)) {
        aliasRewrites[name] = canonical;
      }
    }
  }
  for (const name of Object.keys(aliasRewrites)) {
    namespace.getInterface(name)?.remove();
  }
  {
    let body = namespace.getBodyText();
    for (const { from, to } of aliasRenames) {
      body = body.split(from).join(to);
    }
    for (const [from, to] of Object.entries(aliasRewrites)) {
      body = body.split(from).join(to);
    }
    namespace.setBodyText(body);
  }

  // Pass 4 — strip quicktype's adjective disambiguation prefixes.
  // Quicktype prefixes synthesized duplicates with adjectives (Purple, Fluffy,
  // Tentacled, ...) when the same property in different parents holds an
  // inline anonymous shape it can't merge. For each base name, group the
  // prefixed variants by their property-name set; within a subgroup, find a
  // "dominator" — a variant whose every field type is a (non-strict) superset
  // of the others' (covers exact-equal AND null-widening, where one variant
  // has bare `null` because example data lacked the populated case). When a
  // dominator exists, rename it to the base name and drop the rest. Iterate
  // until convergence so cascades resolve (PurpleVersions/FluffyVersions only
  // share a shape after their nested PurpleGenerationIx/FluffyGenerationIx
  // have already been collapsed). Must run AFTER Pass 3 so icon Fluffy*/
  // Tentacled* siblings have been collapsed first, leaving sprite Purple*
  // as orphans the prefix-strip can handle.
  const quicktypePrefixes = [
    'Purple', 'Fluffy', 'Tentacled', 'Sticky', 'Indigo', 'Indecent',
    'Hilarious', 'Ambitious', 'Cunning', 'Magenta', 'Mischievous',
    'Braggadocious',
  ];
  const fieldTypesOf = (iface: InterfaceDeclaration) => new Map(
    iface.getProperties().map((p) => [p.getName(), (p.getTypeNode()?.getText() ?? '').trim()]),
  );
  const unionMembers = (typeText: string) => new Set(
    typeText.split('|').map((s) => s.trim()).filter(Boolean),
  );
  const fieldDominates = (aType: string, bType: string) => {
    if (aType === bType) return true;
    const a = unionMembers(aType);
    const b = unionMembers(bType);
    for (const m of b) if (!a.has(m)) return false;
    return true;
  };
  // Variant `i` dominates variant `j` if every field present in `j` is also
  // present in `i` with a (non-strict) superset type. Allows widening through
  // both null-unions (`null | T` ⊇ `null`) and missing-field tolerance (a
  // variant whose example data lacked some fields gets dominated by one that
  // saw them all).
  const findDominator = (variants: InterfaceDeclaration[]) => {
    const fieldsList = variants.map(fieldTypesOf);
    for (let i = 0; i < variants.length; i += 1) {
      let dominates = true;
      for (let j = 0; j < variants.length && dominates; j += 1) {
        if (i === j) continue;
        for (const [k, jT] of fieldsList[j]) {
          const iT = fieldsList[i].get(k);
          if (iT === undefined || !fieldDominates(iT, jT)) {
            dominates = false;
            break;
          }
        }
      }
      if (dominates) return variants[i];
    }
    return null;
  };

  for (let pass = 0; pass < 10; pass += 1) {
    const variantsByBase = new Map<string, InterfaceDeclaration[]>();
    for (const iface of namespace.getInterfaces()) {
      const name = iface.getName();
      const prefix = quicktypePrefixes.find((p) => name.startsWith(p) && name.length > p.length);
      if (!prefix) continue;
      const base = name.slice(prefix.length);
      const list = variantsByBase.get(base) ?? [];
      list.push(iface);
      variantsByBase.set(base, list);
    }

    const drops: Record<string, string> = {};
    const renames: { from: string; to: string }[] = [];
    for (const [base, variants] of variantsByBase) {
      // Skip if a base interface already exists — don't risk redefining it.
      if (namespace.getInterface(base)) continue;

      if (variants.length === 1) {
        // Sole orphan-prefixed variant — strip prefix
        renames.push({ from: variants[0].getName(), to: base });
        continue;
      }

      const dominator = findDominator(variants);
      if (!dominator) continue;
      renames.push({ from: dominator.getName(), to: base });
      for (const v of variants) {
        if (v !== dominator) drops[v.getName()] = base;
      }
    }

    if (renames.length === 0 && Object.keys(drops).length === 0) break;

    for (const name of Object.keys(drops)) {
      namespace.getInterface(name)?.remove();
    }
    let body = namespace.getBodyText();
    for (const { from, to } of renames) body = body.split(from).join(to);
    for (const [from, to] of Object.entries(drops)) body = body.split(from).join(to);
    namespace.setBodyText(body);
  }

  // Pass 5 — collapse depth-unrolled recursive interfaces.
  // Quicktype unrolls recursive schemas into N per-depth interfaces because
  // example data never populates the deepest recursion (e.g. PokeAPI's
  // EvolutionChain.chain expands to Chain → ChainEvolvesTo →
  // EvolvesToEvolvesTo). Detect the chain by following a property whose type
  // is "Other[]" through a sequence of interfaces; if the sequence terminates
  // in `any[]` at the same property, collapse all chain members into the
  // outermost (start) interface, with the recursive property rewritten to
  // `Self[]` and any sibling fields widened across the chain (so `any[]` at
  // the boundary gets replaced by the populated type from a deeper member).
  type IfaceSnapshot = { name: string; props: Map<string, string> };
  const snapshot: IfaceSnapshot[] = namespace.getInterfaces().map((i) => ({
    name: i.getName(),
    props: new Map(i.getProperties().map((p) => [
      p.getName(),
      (p.getTypeNode()?.getText() ?? '').trim(),
    ])),
  }));
  const snapshotByName = new Map(snapshot.map((s) => [s.name, s]));

  const arrayOfRefRe = /^([A-Za-z_]\w*)\[\]$/;
  const followRecursiveChain = (startName: string, propName: string): IfaceSnapshot[] | null => {
    const chain: IfaceSnapshot[] = [];
    const seen = new Set<string>();
    let curName = startName;
    while (chain.length < 20) {
      if (seen.has(curName)) return null;
      const info = snapshotByName.get(curName);
      if (!info) return null;
      chain.push(info);
      seen.add(curName);
      const text = info.props.get(propName);
      if (text === undefined) return null;
      if (text === 'any[]') return chain.length >= 2 ? chain : null;
      const m = arrayOfRefRe.exec(text);
      if (!m) return null;
      curName = m[1];
    }
    return null;
  };

  type ChainOp = {
    startName: string;
    chainNames: string[];
    mergedProps: { name: string; type: string }[];
  };
  const ops: ChainOp[] = [];
  const claimed = new Set<string>();
  for (const start of snapshot) {
    if (claimed.has(start.name)) continue;
    for (const propName of start.props.keys()) {
      const chain = followRecursiveChain(start.name, propName);
      if (!chain) continue;
      const allPropNames = new Set<string>();
      for (const m of chain) for (const k of m.props.keys()) allPropNames.add(k);
      const mergedProps = [...allPropNames].map((name) => {
        if (name === propName) return { name, type: `${start.name}[]` };
        let chosen = '';
        for (const m of chain) {
          const t = m.props.get(name);
          if (!t || t === 'any' || t === 'any[]') continue;
          chosen = t;
          break;
        }
        if (!chosen) chosen = start.props.get(name) ?? 'any';
        return { name, type: chosen };
      });
      ops.push({
        startName: start.name,
        chainNames: chain.map((c) => c.name),
        mergedProps,
      });
      for (const c of chain) claimed.add(c.name);
      break;
    }
  }

  for (const op of ops) {
    const start = namespace.getInterface(op.startName);
    if (!start) continue;
    for (const p of start.getProperties()) p.remove();
    // Remove existing index sigs so new properties go above them when re-added
    const indexSigStructures = start.getIndexSignatures().map((s) => s.getStructure());
    for (const s of start.getIndexSignatures()) s.remove();
    for (const mp of op.mergedProps) start.addProperty({ name: mp.name, type: mp.type });
    for (const s of indexSigStructures) start.addIndexSignature(s);
    for (const name of op.chainNames.slice(1)) {
      namespace.getInterface(name)?.remove();
    }
    let body = namespace.getBodyText();
    for (const name of op.chainNames.slice(1)) body = body.split(name).join(op.startName);
    namespace.setBodyText(body);
  }

  // Format the namespace to be correctly indented
  namespace.formatText();

  // Add the root endpoint interval
  rootModule.addInterface({
    name: 'ListEndpointOptions',
    properties: [{
      name: 'offset',
      type: 'number',
      hasQuestionToken: true,
      docs: ['The offset to be used in the request'],
    }, {
      name: 'limit',
      type: 'number',
      hasQuestionToken: true,
      docs: ['The limit to be used in the request'],
    }, {
      name: 'cacheLimit',
      type: 'number',
      hasQuestionToken: true,
      docs: ['The limit of the cache in milliseconds'],
    }],
  });

  // Add the options interface
  rootModule.addInterface({
    name: 'PokeAPIOptions',
    properties: [{
      name: 'protocol',
      type: Writers.unionType('\'https\'', '\'http\''),
      hasQuestionToken: true,
      docs: ['The protocol to be used',
        '@default \'https\''],
    }, {
      name: 'hostName',
      type: 'string',
      hasQuestionToken: true,
      docs: ['The hostname of the PokeAPI instance',
        '@default \'pokeapi.co\''],
    }, {
      name: 'versionPath',
      type: 'string',
      hasQuestionToken: true,
      docs: ['The version path of the API',
        '@default \'/api/v2/\''],
    }, {
      name: 'offset',
      type: 'number',
      hasQuestionToken: true,
      docs: ['The offset to be used in list requests',
        '@default 0'],
    }, {
      name: 'limit',
      type: 'number',
      hasQuestionToken: true,
      docs: ['The limit to be used in list requests',
        '@default 100000'],
    }, {
      name: 'timeout',
      type: 'number',
      hasQuestionToken: true,
      docs: ['The timeout of a response in milliseconds',
        '@default 10 * 1000 // (10 seconds)'],
    }, {
      name: 'cacheLimit',
      type: 'number',
      hasQuestionToken: true,
      docs: ['The limit of the cache in milliseconds',
        '@default 1000000 * 1000 // (11 days)'],
    }],
  });

  // Write the file
  await file.save();

  // Write the API Map
  fs.writeFileSync(apiMapFile, JSON.stringify(apiMap, null, 2));

  // Log progress...
  console.timeEnd(typesLabel);
  console.log('Definition file created!');
}

// Log start
console.time(typesLabel);
console.timeLog(typesLabel, '- Starting to generate types...');

// Schemas that live directly under schema/v2 are added to quicktype first so
// their interface names take precedence in name disambiguation. Nested schemas
// (the per-resource ones) follow.
type SchemaSource = { name: string; schema: string };
const rootSchemas: SchemaSource[] = [];
const nestedSchemas: SchemaSource[] = [];

directoryTree(schemaFolder, { extensions: /\.json$/, normalizePath: true }, (item) => {
  const paths = item.path.split('/').reverse();

  if (paths[1] === 'v2') {
    let name = path.basename(item.path, '.json').replace(/_/g, '-');
    name = name === 'index' ? 'EndpointsList' : toPascalCase(name);
    rootSchemas.push({ name, schema: fs.readFileSync(item.path, 'utf8') });
    return;
  }

  // Skip the placeholder -1 folder
  if (item.path.includes('move-ailment/-1')) return;

  let basename: string;
  let interfaceName: string;

  if (item.path.includes('pokemon/$id/encounters')) {
    basename = 'pokemon-encounter';
    interfaceName = 'PokemonEncounter';
  } else if (item.path.includes('$id')) {
    // 'pokemon/$id/index.json' → "pokemon"
    basename = paths[2];
    interfaceName = toPascalCase(basename);
  } else {
    // 'pokemon/index.json' → "pokemon-list" / "PokemonList"
    basename = `${paths[1]}-list`;
    interfaceName = toPascalCase(basename);
  }

  const jsonSchema = fs.readFileSync(item.path, 'utf8');

  // Named-resource list interfaces get the "NamedList" suffix
  if (interfaceName.includes('List') && jsonSchema.includes('named_api_resource_list.json')) {
    interfaceName = interfaceName.replace('List', 'NamedList');
  }

  apiMap[basename] = interfaceName;
  nestedSchemas.push({ name: interfaceName, schema: jsonSchema });
});

(async () => {
  try {
    const schemaInput = new JSONSchemaInput(new FetchingJSONSchemaStore());
    const inputData = new InputData();

    // Sequential: addSource order determines quicktype name disambiguation.
    for (const { name, schema } of [...rootSchemas, ...nestedSchemas]) {
      // eslint-disable-next-line no-await-in-loop
      await schemaInput.addSource({ name, schema });
    }

    inputData.addInput(schemaInput);

    const qt = await quicktype({
      inputData,
      lang: 'typescript',
      rendererOptions: { 'just-types': 'true' },
    });

    await generateFinalFile(qt.lines.join('\n').replace(/export /g, ''));
  } catch (error) {
    console.error('Type generation failed:', error);
    process.exit(1);
  }
})();
