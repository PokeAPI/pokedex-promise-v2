// Type definitions for pokedex-promise-v2 v4.x
// DO NOT MODIFY, THIS IS AUTO GENERATED
// Original code by: Mudkip <https://github.com/mudkipme/>
// Schema code by: HRKings <https://github.com/HRKings/>
// Execute 'npm run gentypes` to regenerate
declare module 'pokedex-promise-v2' {
    namespace PokeAPI {
        interface APIResource {
            url: string;
        }

        interface APIResourceList {
            count: number;
            next: null | string;
            previous: null | string;
            results: APIResource[];
        }

        interface APIResource {
            url: string;
        }

        interface EndpointsList {
            ability: string;
            berry: string;
            "berry-firmness": string;
            "berry-flavor": string;
            characteristic: string;
            "contest-effect": string;
            "contest-type": string;
            "egg-group": string;
            "encounter-condition": string;
            "encounter-condition-value": string;
            "encounter-method": string;
            "evolution-chain": string;
            "evolution-trigger": string;
            gender: string;
            generation: string;
            "growth-rate": string;
            item: string;
            "item-attribute": string;
            "item-category": string;
            "item-fling-effect": string;
            "item-pocket": string;
            language: string;
            location: string;
            "location-area": string;
            machine: string;
            move: string;
            "move-ailment": string;
            "move-battle-style": string;
            "move-category": string;
            "move-damage-class": string;
            "move-learn-method": string;
            "move-target": string;
            nature: string;
            "pal-park-area": string;
            "pokeathlon-stat": string;
            pokedex: string;
            pokemon: string;
            "pokemon-color": string;
            "pokemon-form": string;
            "pokemon-habitat": string;
            "pokemon-shape": string;
            "pokemon-species": string;
            region: string;
            stat: string;
            "super-contest-effect": string;
            type: string;
            version: string;
            "version-group": string;
        }

        interface NamedAPIResource {
            name: string;
            url: string;
        }

        interface NamedAPIResourceList {
            count: number;
            next: null | string;
            previous: null | string;
            results: NamedAPIResource[];
        }

        interface Ability {
            effect_changes: AbilityEffectChange[];
            effect_entries: AbilityEffectEntry[];
            flavor_text_entries: AbilityFlavorTextEntry[];
            generation: NamedAPIResource;
            id: number;
            is_main_series: boolean;
            name: string;
            names: AbilityName[];
            pokemon: AbilityPokemon[];
        }

        interface AbilityEffectChange {
            effect_entries: PurpleEffectEntry[];
            version_group: NamedAPIResource;
        }

        interface PurpleEffectEntry {
            effect: string;
            language: NamedAPIResource;
        }

        interface AbilityEffectEntry {
            effect: string;
            language: NamedAPIResource;
            short_effect: string;
        }

        interface AbilityFlavorTextEntry {
            flavor_text: string;
            language: NamedAPIResource;
            version_group: NamedAPIResource;
        }

        interface AbilityName {
            language: NamedAPIResource;
            name: string;
        }

        interface AbilityPokemon {
            is_hidden: boolean;
            pokemon: NamedAPIResource;
            slot: number;
        }

        interface VersionGroupNamedList {
            count: number;
            next: null | string;
            previous: null | string;
            results: NamedAPIResource[];
        }

        interface Berry {
            firmness: NamedAPIResource;
            flavors: Flavor[];
            growth_time: number;
            id: number;
            item: NamedAPIResource;
            max_harvest: number;
            name: string;
            natural_gift_power: number;
            natural_gift_type: NamedAPIResource;
            size: number;
            smoothness: number;
            soil_dryness: number;
        }

        interface Flavor {
            flavor: NamedAPIResource;
            potency: number;
        }

        interface BerryFirmness {
            berries: NamedAPIResource[];
            id: number;
            name: string;
            names: BerryFirmnessName[];
        }

        interface BerryFirmnessName {
            language: NamedAPIResource;
            name: string;
        }

        interface BerryFlavor {
            berries: BerryElement[];
            contest_type: NamedAPIResource;
            id: number;
            name: string;
            names: BerryFlavorName[];
        }

        interface BerryElement {
            berry: NamedAPIResource;
            potency: number;
        }

        interface BerryFlavorName {
            language: NamedAPIResource;
            name: string;
        }

        interface Characteristic {
            descriptions: CharacteristicDescription[];
            gene_modulo: number;
            highest_stat: NamedAPIResource;
            id: number;
            possible_values: number[];
        }

        interface CharacteristicDescription {
            description: string;
            language: NamedAPIResource;
        }

        interface SuperContestEffectList {
            count: number;
            next: null | string;
            previous: null | string;
            results: APIResource[];
        }

        interface ContestEffect {
            appeal: number;
            effect_entries: ContestEffectEffectEntry[];
            flavor_text_entries: ContestEffectFlavorTextEntry[];
            id: number;
            jam: number;
        }

        interface ContestEffectEffectEntry {
            effect: string;
            language: NamedAPIResource;
        }

        interface ContestEffectFlavorTextEntry {
            flavor_text: string;
            language: NamedAPIResource;
        }

        interface ContestType {
            berry_flavor: NamedAPIResource;
            id: number;
            name: string;
            names: ContestTypeName[];
        }

        interface ContestTypeName {
            color: string;
            language: NamedAPIResource;
            name: string;
        }

        interface EggGroup {
            id: number;
            name: string;
            names: EggGroupName[];
            pokemon_species: NamedAPIResource[];
        }

        interface EggGroupName {
            language: NamedAPIResource;
            name: string;
        }

        interface EncounterCondition {
            id: number;
            name: string;
            names: EncounterConditionName[];
            values: NamedAPIResource[];
        }

        interface EncounterConditionName {
            language: NamedAPIResource;
            name: string;
        }

        interface EncounterConditionValue {
            condition: NamedAPIResource;
            id: number;
            name: string;
            names: EncounterConditionValueName[];
        }

        interface EncounterConditionValueName {
            language: NamedAPIResource;
            name: string;
        }

        interface EncounterMethod {
            id: number;
            name: string;
            names: EncounterMethodName[];
            order: number;
        }

        interface EncounterMethodName {
            language: NamedAPIResource;
            name: string;
        }

        interface EvolutionChain {
            baby_trigger_item: null | NamedAPIResource;
            chain: Chain;
            id: number;
        }

        interface Chain {
            evolution_details: any[];
            evolves_to: ChainEvolvesTo[];
            is_baby: boolean;
            species: NamedAPIResource;
        }

        interface ChainEvolvesTo {
            evolution_details: PurpleEvolutionDetail[];
            evolves_to: EvolvesToEvolvesTo[];
            is_baby: boolean;
            species: NamedAPIResource;
        }

        interface PurpleEvolutionDetail {
            gender: number | null;
            held_item: null | NamedAPIResource;
            item: null | NamedAPIResource;
            known_move: null | NamedAPIResource;
            known_move_type: null | NamedAPIResource;
            location: null | NamedAPIResource;
            min_affection: number | null;
            min_beauty: number | null;
            min_happiness: number | null;
            min_level: number | null;
            needs_overworld_rain: boolean;
            party_species: null | NamedAPIResource;
            party_type: null | NamedAPIResource;
            relative_physical_stats: number | null;
            time_of_day: string;
            trade_species: null | NamedAPIResource;
            trigger: NamedAPIResource;
            turn_upside_down: boolean;
        }

        interface EvolvesToEvolvesTo {
            evolution_details: FluffyEvolutionDetail[];
            evolves_to: any[];
            is_baby: boolean;
            species: NamedAPIResource;
        }

        interface FluffyEvolutionDetail {
            gender: number | null;
            held_item: null | NamedAPIResource;
            item: null | NamedAPIResource;
            known_move: null | NamedAPIResource;
            known_move_type: null;
            location: null | NamedAPIResource;
            min_affection: null;
            min_beauty: null;
            min_happiness: number | null;
            min_level: number | null;
            needs_overworld_rain: boolean;
            party_species: null;
            party_type: null;
            relative_physical_stats: null;
            time_of_day: string;
            trade_species: null;
            trigger: NamedAPIResource;
            turn_upside_down: boolean;
        }

        interface EvolutionTrigger {
            id: number;
            name: string;
            names: EvolutionTriggerName[];
            pokemon_species: NamedAPIResource[];
        }

        interface EvolutionTriggerName {
            language: NamedAPIResource;
            name: string;
        }

        interface Gender {
            id: number;
            name: string;
            pokemon_species_details: PokemonSpeciesDetail[];
            required_for_evolution: NamedAPIResource[];
        }

        interface PokemonSpeciesDetail {
            pokemon_species: NamedAPIResource;
            rate: number;
        }

        interface Generation {
            abilities: NamedAPIResource[];
            id: number;
            main_region: NamedAPIResource;
            moves: NamedAPIResource[];
            name: string;
            names: GenerationName[];
            pokemon_species: NamedAPIResource[];
            types: NamedAPIResource[];
            version_groups: NamedAPIResource[];
        }

        interface GenerationName {
            language: NamedAPIResource;
            name: string;
        }

        interface GrowthRate {
            descriptions: GrowthRateDescription[];
            formula: string;
            id: number;
            levels: Level[];
            name: string;
            pokemon_species: NamedAPIResource[];
        }

        interface GrowthRateDescription {
            description: string;
            language: NamedAPIResource;
        }

        interface Level {
            experience: number;
            level: number;
        }

        interface Item {
            attributes: NamedAPIResource[];
            baby_trigger_for: null | APIResource;
            category: NamedAPIResource;
            cost: number;
            effect_entries: ItemEffectEntry[];
            flavor_text_entries: ItemFlavorTextEntry[];
            fling_effect: null | NamedAPIResource;
            fling_power: number | null;
            game_indices: ItemGameIndex[];
            held_by_pokemon: HeldByPokemon[];
            id: number;
            machines: ItemMachine[];
            name: string;
            names: ItemName[];
            sprites: ItemSprites;
        }

        interface ItemEffectEntry {
            effect: string;
            language: NamedAPIResource;
            short_effect: string;
        }

        interface ItemFlavorTextEntry {
            language: NamedAPIResource;
            text: string;
            version_group: NamedAPIResource;
        }

        interface ItemGameIndex {
            game_index: number;
            generation: NamedAPIResource;
        }

        interface HeldByPokemon {
            pokemon: NamedAPIResource;
            version_details: HeldByPokemonVersionDetail[];
        }

        interface HeldByPokemonVersionDetail {
            rarity: number;
            version: NamedAPIResource;
        }

        interface ItemMachine {
            machine: APIResource;
            version_group: NamedAPIResource;
        }

        interface ItemName {
            language: NamedAPIResource;
            name: string;
        }

        interface ItemSprites {
            default: string;
        }

        interface ItemAttribute {
            descriptions: ItemAttributeDescription[];
            id: number;
            items: NamedAPIResource[];
            name: string;
            names: ItemAttributeName[];
        }

        interface ItemAttributeDescription {
            description: string;
            language: NamedAPIResource;
        }

        interface ItemAttributeName {
            language: NamedAPIResource;
            name: string;
        }

        interface ItemCategory {
            id: number;
            items: NamedAPIResource[];
            name: string;
            names: ItemCategoryName[];
            pocket: NamedAPIResource;
        }

        interface ItemCategoryName {
            language: NamedAPIResource;
            name: string;
        }

        interface ItemFlingEffect {
            effect_entries: ItemFlingEffectEffectEntry[];
            id: number;
            items: NamedAPIResource[];
            name: string;
        }

        interface ItemFlingEffectEffectEntry {
            effect: string;
            language: NamedAPIResource;
        }

        interface ItemPocket {
            categories: NamedAPIResource[];
            id: number;
            name: string;
            names: ItemPocketName[];
        }

        interface ItemPocketName {
            language: NamedAPIResource;
            name: string;
        }

        interface Language {
            id: number;
            iso3166: string;
            iso639: string;
            name: string;
            names: LanguageName[];
            official: boolean;
        }

        interface LanguageName {
            language: NamedAPIResource;
            name: string;
        }

        interface Location {
            areas: NamedAPIResource[];
            game_indices: LocationGameIndex[];
            id: number;
            name: string;
            names: LocationName[];
            region: null | NamedAPIResource;
        }

        interface LocationGameIndex {
            game_index: number;
            generation: NamedAPIResource;
        }

        interface LocationName {
            language: NamedAPIResource;
            name: string;
        }

        interface LocationArea {
            encounter_method_rates: EncounterMethodRate[];
            game_index: number;
            id: number;
            location: NamedAPIResource;
            name: string;
            names: LocationAreaName[];
            pokemon_encounters: LocationAreaPokemonEncounter[];
        }

        interface EncounterMethodRate {
            encounter_method: NamedAPIResource;
            version_details: EncounterMethodRateVersionDetail[];
        }

        interface EncounterMethodRateVersionDetail {
            rate: number;
            version: NamedAPIResource;
        }

        interface LocationAreaName {
            language: NamedAPIResource;
            name: string;
        }

        interface LocationAreaPokemonEncounter {
            pokemon: NamedAPIResource;
            version_details: PokemonEncounterVersionDetail[];
        }

        interface PokemonEncounterVersionDetail {
            encounter_details: PurpleEncounterDetail[];
            max_chance: number;
            version: NamedAPIResource;
        }

        interface PurpleEncounterDetail {
            chance: number;
            condition_values: NamedAPIResource[];
            max_level: number;
            method: NamedAPIResource;
            min_level: number;
        }

        interface Machine {
            id: number;
            item: NamedAPIResource;
            move: NamedAPIResource;
            version_group: NamedAPIResource;
        }

        interface Move {
            accuracy: number | null;
            contest_combos: null | ContestCombos;
            contest_effect: null | APIResource;
            contest_type: null | NamedAPIResource;
            damage_class: null | NamedAPIResource;
            effect_chance: number | null;
            effect_changes: MoveEffectChange[];
            effect_entries: MoveEffectEntry[];
            flavor_text_entries: MoveFlavorTextEntry[];
            generation: NamedAPIResource;
            id: number;
            learned_by_pokemon: NamedAPIResource[];
            machines: MoveMachine[];
            meta: null | Meta;
            name: string;
            names: MoveName[];
            past_values: PastValue[];
            power: number | null;
            pp: number | null;
            priority: number;
            stat_changes: StatChange[];
            super_contest_effect: null | APIResource;
            target: NamedAPIResource;
            type: NamedAPIResource;
        }

        interface ContestCombos {
            normal: Normal;
            super: Super;
        }

        interface Normal {
            use_after: NamedAPIResource[] | null;
            use_before: NamedAPIResource[] | null;
        }

        interface Super {
            use_after: NamedAPIResource[] | null;
            use_before: NamedAPIResource[] | null;
        }

        interface MoveEffectChange {
            effect_entries: FluffyEffectEntry[];
            version_group: NamedAPIResource;
        }

        interface FluffyEffectEntry {
            effect: string;
            language: NamedAPIResource;
        }

        interface MoveEffectEntry {
            effect: string;
            language: NamedAPIResource;
            short_effect: string;
        }

        interface MoveFlavorTextEntry {
            flavor_text: string;
            language: NamedAPIResource;
            version_group: NamedAPIResource;
        }

        interface MoveMachine {
            machine: APIResource;
            version_group: NamedAPIResource;
        }

        interface Meta {
            ailment: NamedAPIResource;
            ailment_chance: number;
            category: NamedAPIResource;
            crit_rate: number;
            drain: number;
            flinch_chance: number;
            healing: number;
            max_hits: number | null;
            max_turns: number | null;
            min_hits: number | null;
            min_turns: number | null;
            stat_chance: number;
        }

        interface MoveName {
            language: NamedAPIResource;
            name: string;
        }

        interface PastValue {
            accuracy: number | null;
            effect_chance: number | null;
            effect_entries: PastValueEffectEntry[];
            power: number | null;
            pp: number | null;
            type: null | NamedAPIResource;
            version_group: NamedAPIResource;
        }

        interface PastValueEffectEntry {
            effect: string;
            language: NamedAPIResource;
            short_effect: string;
        }

        interface StatChange {
            change: number;
            stat: NamedAPIResource;
        }

        interface MoveAilment {
            id: number;
            moves: NamedAPIResource[];
            name: string;
            names: MoveAilmentName[];
        }

        interface MoveAilmentName {
            language: NamedAPIResource;
            name: string;
        }

        interface MoveBattleStyle {
            id: number;
            name: string;
            names: MoveBattleStyleName[];
        }

        interface MoveBattleStyleName {
            language: NamedAPIResource;
            name: string;
        }

        interface MoveCategory {
            descriptions: MoveCategoryDescription[];
            id: number;
            moves: NamedAPIResource[];
            name: string;
        }

        interface MoveCategoryDescription {
            description: string;
            language: NamedAPIResource;
        }

        interface MoveDamageClass {
            descriptions: MoveDamageClassDescription[];
            id: number;
            moves: NamedAPIResource[];
            name: string;
            names: MoveDamageClassName[];
        }

        interface MoveDamageClassDescription {
            description: string;
            language: NamedAPIResource;
        }

        interface MoveDamageClassName {
            language: NamedAPIResource;
            name: string;
        }

        interface MoveLearnMethod {
            descriptions: MoveLearnMethodDescription[];
            id: number;
            name: string;
            names: MoveLearnMethodName[];
            version_groups: NamedAPIResource[];
        }

        interface MoveLearnMethodDescription {
            description: string;
            language: NamedAPIResource;
        }

        interface MoveLearnMethodName {
            language: NamedAPIResource;
            name: string;
        }

        interface MoveTarget {
            descriptions: MoveTargetDescription[];
            id: number;
            moves: NamedAPIResource[];
            name: string;
            names: MoveTargetName[];
        }

        interface MoveTargetDescription {
            description: string;
            language: NamedAPIResource;
        }

        interface MoveTargetName {
            language: NamedAPIResource;
            name: string;
        }

        interface Nature {
            decreased_stat: null | NamedAPIResource;
            hates_flavor: null | NamedAPIResource;
            id: number;
            increased_stat: null | NamedAPIResource;
            likes_flavor: null | NamedAPIResource;
            move_battle_style_preferences: MoveBattleStylePreference[];
            name: string;
            names: NatureName[];
            pokeathlon_stat_changes: PokeathlonStatChange[];
        }

        interface MoveBattleStylePreference {
            high_hp_preference: number;
            low_hp_preference: number;
            move_battle_style: NamedAPIResource;
        }

        interface NatureName {
            language: NamedAPIResource;
            name: string;
        }

        interface PokeathlonStatChange {
            max_change: number;
            pokeathlon_stat: NamedAPIResource;
        }

        interface PalParkArea {
            id: number;
            name: string;
            names: PalParkAreaName[];
            pokemon_encounters: PalParkAreaPokemonEncounter[];
        }

        interface PalParkAreaName {
            language: NamedAPIResource;
            name: string;
        }

        interface PalParkAreaPokemonEncounter {
            base_score: number;
            pokemon_species: NamedAPIResource;
            rate: number;
        }

        interface PokeathlonStat {
            affecting_natures: PokeathlonStatAffectingNatures;
            id: number;
            name: string;
            names: PokeathlonStatName[];
        }

        interface PokeathlonStatAffectingNatures {
            decrease: AffectingNaturesDecrease[];
            increase: AffectingNaturesIncrease[];
        }

        interface AffectingNaturesDecrease {
            max_change: number;
            nature: NamedAPIResource;
        }

        interface AffectingNaturesIncrease {
            max_change: number;
            nature: NamedAPIResource;
        }

        interface PokeathlonStatName {
            language: NamedAPIResource;
            name: string;
        }

        interface Pokedex {
            descriptions: PokedexDescription[];
            id: number;
            is_main_series: boolean;
            name: string;
            names: PokedexName[];
            pokemon_entries: PokemonEntry[];
            region: null | NamedAPIResource;
            version_groups: NamedAPIResource[];
        }

        interface PokedexDescription {
            description: string;
            language: NamedAPIResource;
        }

        interface PokedexName {
            language: NamedAPIResource;
            name: string;
        }

        interface PokemonEntry {
            entry_number: number;
            pokemon_species: NamedAPIResource;
        }

        interface PokemonEncounter {
            location_area: NamedAPIResource;
            version_details: PokemonEncounterVersionDetailObject[];
        }

        interface PokemonEncounterVersionDetailObject {
            encounter_details: FluffyEncounterDetail[];
            max_chance: number;
            version: NamedAPIResource;
        }

        interface FluffyEncounterDetail {
            chance: number;
            condition_values: NamedAPIResource[];
            max_level: number;
            method: NamedAPIResource;
            min_level: number;
        }

        interface Pokemon {
            abilities: AbilityElement[];
            base_experience: number;
            forms: NamedAPIResource[];
            game_indices: PokemonGameIndex[];
            height: number;
            held_items: HeldItem[];
            id: number;
            is_default: boolean;
            location_area_encounters: string;
            moves: MoveElement[];
            name: string;
            order: number;
            past_types: PastType[];
            species: NamedAPIResource;
            sprites: PokemonSprites;
            stats: StatElement[];
            types: PokemonType[];
            weight: number;
        }

        interface AbilityElement {
            ability: NamedAPIResource;
            is_hidden: boolean;
            slot: number;
        }

        interface PokemonGameIndex {
            game_index: number;
            version: NamedAPIResource;
        }

        interface HeldItem {
            item: NamedAPIResource;
            version_details: HeldItemVersionDetail[];
        }

        interface HeldItemVersionDetail {
            rarity: number;
            version: NamedAPIResource;
        }

        interface MoveElement {
            move: NamedAPIResource;
            version_group_details: VersionGroupDetail[];
        }

        interface VersionGroupDetail {
            level_learned_at: number;
            move_learn_method: NamedAPIResource;
            version_group: NamedAPIResource;
        }

        interface PastType {
            generation: NamedAPIResource;
            types: PastTypeType[];
        }

        interface PastTypeType {
            slot: number;
            type: NamedAPIResource;
        }

        interface PokemonSprites {
            back_default: null | string;
            back_female: null | string;
            back_shiny: null | string;
            back_shiny_female: null | string;
            front_default: null | string;
            front_female: null | string;
            front_shiny: null | string;
            front_shiny_female: null | string;
            other: Other;
            versions: Versions;
        }

        interface Other {
            dream_world: DreamWorld;
            "official-artwork": OfficialArtwork;
        }

        interface DreamWorld {
            front_default: null | string;
            front_female: null | string;
        }

        interface OfficialArtwork {
            front_default: null | string;
        }

        interface Versions {
            "generation-i": GenerationI;
            "generation-ii": GenerationIi;
            "generation-iii": GenerationIii;
            "generation-iv": GenerationIv;
            "generation-v": GenerationV;
            "generation-vi": GenerationVi;
            "generation-vii": GenerationVii;
            "generation-viii": GenerationViii;
        }

        interface GenerationI {
            "red-blue": RedBlue;
            yellow: Yellow;
        }

        interface RedBlue {
            back_default: null | string;
            back_gray: null | string;
            front_default: null | string;
            front_gray: null | string;
        }

        interface Yellow {
            back_default: null | string;
            back_gray: null | string;
            front_default: null | string;
            front_gray: null | string;
        }

        interface GenerationIi {
            crystal: Crystal;
            gold: Gold;
            silver: Silver;
        }

        interface Crystal {
            back_default: null | string;
            back_shiny: null | string;
            front_default: null | string;
            front_shiny: null | string;
        }

        interface Gold {
            back_default: null | string;
            back_shiny: null | string;
            front_default: null | string;
            front_shiny: null | string;
        }

        interface Silver {
            back_default: null | string;
            back_shiny: null | string;
            front_default: null | string;
            front_shiny: null | string;
        }

        interface GenerationIii {
            emerald: Emerald;
            "firered-leafgreen": FireredLeafgreen;
            "ruby-sapphire": RubySapphire;
        }

        interface Emerald {
            front_default: null | string;
            front_shiny: null | string;
        }

        interface FireredLeafgreen {
            back_default: null | string;
            back_shiny: null | string;
            front_default: null | string;
            front_shiny: null | string;
        }

        interface RubySapphire {
            back_default: null | string;
            back_shiny: null | string;
            front_default: null | string;
            front_shiny: null | string;
        }

        interface GenerationIv {
            "diamond-pearl": DiamondPearl;
            "heartgold-soulsilver": HeartgoldSoulsilver;
            platinum: Platinum;
        }

        interface DiamondPearl {
            back_default: null | string;
            back_female: null | string;
            back_shiny: null | string;
            back_shiny_female: null | string;
            front_default: null | string;
            front_female: null | string;
            front_shiny: null | string;
            front_shiny_female: null | string;
        }

        interface HeartgoldSoulsilver {
            back_default: null | string;
            back_female: null | string;
            back_shiny: null | string;
            back_shiny_female: null | string;
            front_default: null | string;
            front_female: null | string;
            front_shiny: null | string;
            front_shiny_female: null | string;
        }

        interface Platinum {
            back_default: null | string;
            back_female: null | string;
            back_shiny: null | string;
            back_shiny_female: null | string;
            front_default: null | string;
            front_female: null | string;
            front_shiny: null | string;
            front_shiny_female: null | string;
        }

        interface GenerationV {
            "black-white": BlackWhite;
        }

        interface BlackWhite {
            animated: Animated;
            back_default: null | string;
            back_female: null | string;
            back_shiny: null | string;
            back_shiny_female: null | string;
            front_default: null | string;
            front_female: null | string;
            front_shiny: null | string;
            front_shiny_female: null | string;
        }

        interface Animated {
            back_default: null | string;
            back_female: null | string;
            back_shiny: null | string;
            back_shiny_female: null | string;
            front_default: null | string;
            front_female: null | string;
            front_shiny: null | string;
            front_shiny_female: null | string;
        }

        interface GenerationVi {
            "omegaruby-alphasapphire": OmegarubyAlphasapphire;
            "x-y": XY;
        }

        interface OmegarubyAlphasapphire {
            front_default: null | string;
            front_female: null | string;
            front_shiny: null | string;
            front_shiny_female: null | string;
        }

        interface XY {
            front_default: null | string;
            front_female: null | string;
            front_shiny: null | string;
            front_shiny_female: null | string;
        }

        interface GenerationVii {
            icons: GenerationViiIcons;
            "ultra-sun-ultra-moon": UltraSunUltraMoon;
        }

        interface GenerationViiIcons {
            front_default: null | string;
            front_female: null | string;
        }

        interface UltraSunUltraMoon {
            front_default: null | string;
            front_female: null | string;
            front_shiny: null | string;
            front_shiny_female: null | string;
        }

        interface GenerationViii {
            icons: GenerationViiiIcons;
        }

        interface GenerationViiiIcons {
            front_default: null | string;
            front_female: null | string;
        }

        interface StatElement {
            base_stat: number;
            effort: number;
            stat: NamedAPIResource;
        }

        interface PokemonType {
            slot: number;
            type: NamedAPIResource;
        }

        interface PokemonColor {
            id: number;
            name: string;
            names: PokemonColorName[];
            pokemon_species: NamedAPIResource[];
        }

        interface PokemonColorName {
            language: NamedAPIResource;
            name: string;
        }

        interface PokemonForm {
            form_name: string;
            form_names: FormName[];
            form_order: number;
            id: number;
            is_battle_only: boolean;
            is_default: boolean;
            is_mega: boolean;
            name: string;
            names: PokemonFormName[];
            order: number;
            pokemon: NamedAPIResource;
            sprites: PokemonFormSprites;
            types: PokemonFormType[];
            version_group: NamedAPIResource;
        }

        interface FormName {
            language: NamedAPIResource;
            name: string;
        }

        interface PokemonFormName {
            language: NamedAPIResource;
            name: string;
        }

        interface PokemonFormSprites {
            back_default: null | string;
            back_female: null | string;
            back_shiny: null | string;
            back_shiny_female: null | string;
            front_default: null | string;
            front_female: null | string;
            front_shiny: null | string;
            front_shiny_female: null | string;
        }

        interface PokemonFormType {
            slot: number;
            type: NamedAPIResource;
        }

        interface PokemonHabitat {
            id: number;
            name: string;
            names: PokemonHabitatName[];
            pokemon_species: NamedAPIResource[];
        }

        interface PokemonHabitatName {
            language: NamedAPIResource;
            name: string;
        }

        interface PokemonShape {
            awesome_names: AwesomeName[];
            id: number;
            name: string;
            names: PokemonShapeName[];
            pokemon_species: NamedAPIResource[];
        }

        interface AwesomeName {
            awesome_name: string;
            language: NamedAPIResource;
        }

        interface PokemonShapeName {
            language: NamedAPIResource;
            name: string;
        }

        interface PokemonSpecies {
            base_happiness: number;
            capture_rate: number;
            color: NamedAPIResource;
            egg_groups: NamedAPIResource[];
            evolution_chain: APIResource;
            evolves_from_species: null | NamedAPIResource;
            flavor_text_entries: PokemonSpeciesFlavorTextEntry[];
            form_descriptions: FormDescription[];
            forms_switchable: boolean;
            gender_rate: number;
            genera: Genus[];
            generation: NamedAPIResource;
            growth_rate: NamedAPIResource;
            habitat: null | NamedAPIResource;
            has_gender_differences: boolean;
            hatch_counter: number;
            id: number;
            is_baby: boolean;
            is_legendary: boolean;
            is_mythical: boolean;
            name: string;
            names: PokemonSpeciesName[];
            order: number;
            pal_park_encounters: PalParkEncounter[];
            pokedex_numbers: PokedexNumber[];
            shape: NamedAPIResource;
            varieties: Variety[];
        }

        interface PokemonSpeciesFlavorTextEntry {
            flavor_text: string;
            language: NamedAPIResource;
            version: NamedAPIResource;
        }

        interface FormDescription {
            description: string;
            language: NamedAPIResource;
        }

        interface Genus {
            genus: string;
            language: NamedAPIResource;
        }

        interface PokemonSpeciesName {
            language: NamedAPIResource;
            name: string;
        }

        interface PalParkEncounter {
            area: NamedAPIResource;
            base_score: number;
            rate: number;
        }

        interface PokedexNumber {
            entry_number: number;
            pokedex: NamedAPIResource;
        }

        interface Variety {
            is_default: boolean;
            pokemon: NamedAPIResource;
        }

        interface Region {
            id: number;
            locations: NamedAPIResource[];
            main_generation: NamedAPIResource;
            name: string;
            names: RegionName[];
            pokedexes: NamedAPIResource[];
            version_groups: NamedAPIResource[];
        }

        interface RegionName {
            language: NamedAPIResource;
            name: string;
        }

        interface Stat {
            affecting_moves: AffectingMoves;
            affecting_natures: StatAffectingNatures;
            characteristics: APIResource[];
            game_index: number;
            id: number;
            is_battle_only: boolean;
            move_damage_class: null | NamedAPIResource;
            name: string;
            names: StatName[];
        }

        interface AffectingMoves {
            decrease: AffectingMovesDecrease[];
            increase: AffectingMovesIncrease[];
        }

        interface AffectingMovesDecrease {
            change: number;
            move: NamedAPIResource;
        }

        interface AffectingMovesIncrease {
            change: number;
            move: NamedAPIResource;
        }

        interface StatAffectingNatures {
            decrease: NamedAPIResource[];
            increase: NamedAPIResource[];
        }

        interface StatName {
            language: NamedAPIResource;
            name: string;
        }

        interface SuperContestEffect {
            appeal: number;
            flavor_text_entries: SuperContestEffectFlavorTextEntry[];
            id: number;
            moves: NamedAPIResource[];
        }

        interface SuperContestEffectFlavorTextEntry {
            flavor_text: string;
            language: NamedAPIResource;
        }

        interface Type {
            damage_relations: TypeDamageRelations;
            game_indices: TypeGameIndex[];
            generation: NamedAPIResource;
            id: number;
            move_damage_class: null | NamedAPIResource;
            moves: NamedAPIResource[];
            name: string;
            names: TypeName[];
            past_damage_relations: PastDamageRelation[];
            pokemon: TypePokemon[];
        }

        interface TypeDamageRelations {
            double_damage_from: NamedAPIResource[];
            double_damage_to: NamedAPIResource[];
            half_damage_from: NamedAPIResource[];
            half_damage_to: NamedAPIResource[];
            no_damage_from: NamedAPIResource[];
            no_damage_to: NamedAPIResource[];
        }

        interface TypeGameIndex {
            game_index: number;
            generation: NamedAPIResource;
        }

        interface TypeName {
            language: NamedAPIResource;
            name: string;
        }

        interface PastDamageRelation {
            damage_relations: PastDamageRelationDamageRelations;
            generation: NamedAPIResource;
        }

        interface PastDamageRelationDamageRelations {
            double_damage_from: NamedAPIResource[];
            double_damage_to: NamedAPIResource[];
            half_damage_from: NamedAPIResource[];
            half_damage_to: NamedAPIResource[];
            no_damage_from: NamedAPIResource[];
            no_damage_to: NamedAPIResource[];
        }

        interface TypePokemon {
            pokemon: NamedAPIResource;
            slot: number;
        }

        interface Version {
            id: number;
            name: string;
            names: VersionName[];
            version_group: NamedAPIResource;
        }

        interface VersionName {
            language: NamedAPIResource;
            name: string;
        }

        interface VersionGroup {
            generation: NamedAPIResource;
            id: number;
            move_learn_methods: NamedAPIResource[];
            name: string;
            order: number;
            pokedexes: NamedAPIResource[];
            regions: NamedAPIResource[];
            versions: NamedAPIResource[];
        }

        interface RootEndPointInterval {
            limit?: number;
            offset?: number;
        }
    }

    interface PokeApiOptions {
        protocol?: "https" | "http";
        hostName?: string;
        versionPath?: string;
        cacheLimit?: number;
        timeout?: number;
    }

    class PokeAPI {
        constructor(options?: PokeApiOptions);
        resource(path: string): Promise<unknown>;
        resource(paths: string[]): Promise<unknown[]>;
        resource(paths: string[]): Promise<unknown[]>;
        resource<T>(path: string): Promise<T>;
        resource<T>(paths: string[]): Promise<T[]>;
        getBerryByName(nameOrId: string | number): Promise<PokeAPI.Berry>;
        getBerryByName(nameOrIds: Array<string | number>): Promise<PokeAPI.Berry[]>;
        getBerryFirmnessByName(nameOrId: string | number): Promise<PokeAPI.BerryFirmness>;
        getBerryFirmnessByName(nameOrIds: Array<string | number>): Promise<PokeAPI.BerryFirmness[]>;
        getBerryFlavorByName(nameOrId: string | number): Promise<PokeAPI.BerryFlavor>;
        getBerryFlavorByName(nameOrIds: Array<string | number>): Promise<PokeAPI.BerryFlavor[]>;
        getContestTypeByName(nameOrId: string | number): Promise<PokeAPI.ContestType>;
        getContestTypeByName(nameOrIds: Array<string | number>): Promise<PokeAPI.ContestType[]>;
        getContestEffectById(id: number): Promise<PokeAPI.ContestEffect>;
        getContestEffectById(ids: number[]): Promise<PokeAPI.ContestEffect[]>;
        getSuperContestEffectById(id: number): Promise<PokeAPI.SuperContestEffect>;
        getSuperContestEffectById(ids: number[]): Promise<PokeAPI.SuperContestEffect[]>;
        getEncounterMethodByName(nameOrId: string | number): Promise<PokeAPI.EncounterMethod>;
        getEncounterMethodByName(nameOrIds: Array<string | number>): Promise<PokeAPI.EncounterMethod[]>;
        getEncounterConditionByName(nameOrId: string | number): Promise<PokeAPI.EncounterCondition>;
        getEncounterConditionByName(nameOrIds: Array<string | number>): Promise<PokeAPI.EncounterCondition[]>;
        getEncounterConditionValueByName(nameOrId: string | number): Promise<PokeAPI.EncounterConditionValue>;
        getEncounterConditionValueByName(nameOrIds: Array<string | number>): Promise<PokeAPI.EncounterConditionValue[]>;
        getEvolutionChainById(id: number): Promise<PokeAPI.EvolutionChain>;
        getEvolutionChainById(ids: number[]): Promise<PokeAPI.EvolutionChain[]>;
        getEvolutionTriggerByName(nameOrId: string | number): Promise<PokeAPI.EvolutionTrigger>;
        getEvolutionTriggerByName(nameOrIds: Array<string | number>): Promise<PokeAPI.EvolutionTrigger[]>;
        getGenerationByName(nameOrId: string | number): Promise<PokeAPI.Generation>;
        getGenerationByName(nameOrIds: Array<string | number>): Promise<PokeAPI.Generation[]>;
        getPokedexByName(nameOrId: string | number): Promise<PokeAPI.Pokedex>;
        getPokedexByName(nameOrIds: Array<string | number>): Promise<PokeAPI.Pokedex[]>;
        getVersionByName(nameOrId: string | number): Promise<PokeAPI.Version>;
        getVersionByName(nameOrIds: Array<string | number>): Promise<PokeAPI.Version[]>;
        getVersionGroupByName(nameOrId: string | number): Promise<PokeAPI.VersionGroup>;
        getVersionGroupByName(nameOrIds: Array<string | number>): Promise<PokeAPI.VersionGroup[]>;
        getItemByName(nameOrId: string | number): Promise<PokeAPI.Item>;
        getItemByName(nameOrIds: Array<string | number>): Promise<PokeAPI.Item[]>;
        getItemAttributeByName(nameOrId: string | number): Promise<PokeAPI.ItemAttribute>;
        getItemAttributeByName(nameOrIds: Array<string | number>): Promise<PokeAPI.ItemAttribute[]>;
        getItemCategoryByName(nameOrId: string | number): Promise<PokeAPI.ItemCategory>;
        getItemCategoryByName(nameOrIds: Array<string | number>): Promise<PokeAPI.ItemCategory[]>;
        getItemFlingEffectByName(nameOrId: string | number): Promise<PokeAPI.ItemFlingEffect>;
        getItemFlingEffectByName(nameOrIds: Array<string | number>): Promise<PokeAPI.ItemFlingEffect[]>;
        getItemPocketByName(nameOrId: string | number): Promise<PokeAPI.ItemPocket>;
        getItemPocketByName(nameOrIds: Array<string | number>): Promise<PokeAPI.ItemPocket[]>;
        getMachineById(id: number): Promise<PokeAPI.Machine>;
        getMachineById(ids: number[]): Promise<PokeAPI.Machine[]>;
        getMoveByName(nameOrId: string | number): Promise<PokeAPI.Move>;
        getMoveByName(nameOrIds: Array<string | number>): Promise<PokeAPI.Move[]>;
        getMoveAilmentByName(nameOrId: string | number): Promise<PokeAPI.MoveAilment>;
        getMoveAilmentByName(nameOrIds: Array<string | number>): Promise<PokeAPI.MoveAilment[]>;
        getMoveBattleStyleByName(nameOrId: string | number): Promise<PokeAPI.MoveBattleStyle>;
        getMoveBattleStyleByName(nameOrIds: Array<string | number>): Promise<PokeAPI.MoveBattleStyle[]>;
        getMoveCategoryByName(nameOrId: string | number): Promise<PokeAPI.MoveCategory>;
        getMoveCategoryByName(nameOrIds: Array<string | number>): Promise<PokeAPI.MoveCategory[]>;
        getMoveDamageClassByName(nameOrId: string | number): Promise<PokeAPI.MoveDamageClass>;
        getMoveDamageClassByName(nameOrIds: Array<string | number>): Promise<PokeAPI.MoveDamageClass[]>;
        getMoveLearnMethodByName(nameOrId: string | number): Promise<PokeAPI.MoveLearnMethod>;
        getMoveLearnMethodByName(nameOrIds: Array<string | number>): Promise<PokeAPI.MoveLearnMethod[]>;
        getMoveTargetByName(nameOrId: string | number): Promise<PokeAPI.MoveTarget>;
        getMoveTargetByName(nameOrIds: Array<string | number>): Promise<PokeAPI.MoveTarget[]>;
        getLocationByName(nameOrId: string | number): Promise<PokeAPI.Location>;
        getLocationByName(nameOrIds: Array<string | number>): Promise<PokeAPI.Location[]>;
        getLocationAreaByName(nameOrId: string | number): Promise<PokeAPI.LocationArea>;
        getLocationAreaByName(nameOrIds: Array<string | number>): Promise<PokeAPI.LocationArea[]>;
        getPalParkAreaByName(nameOrId: string | number): Promise<PokeAPI.PalParkArea>;
        getPalParkAreaByName(nameOrIds: Array<string | number>): Promise<PokeAPI.PalParkArea[]>;
        getRegionByName(nameOrId: string | number): Promise<PokeAPI.Region>;
        getRegionByName(nameOrIds: Array<string | number>): Promise<PokeAPI.Region[]>;
        getAbilityByName(nameOrId: string | number): Promise<PokeAPI.Ability>;
        getAbilityByName(nameOrIds: Array<string | number>): Promise<PokeAPI.Ability[]>;
        getCharacteristicById(id: number): Promise<PokeAPI.Characteristic>;
        getCharacteristicById(ids: number[]): Promise<PokeAPI.Characteristic[]>;
        getEggGroupByName(nameOrId: string | number): Promise<PokeAPI.EggGroup>;
        getEggGroupByName(nameOrIds: Array<string | number>): Promise<PokeAPI.EggGroup[]>;
        getGenderByName(nameOrId: string | number): Promise<PokeAPI.Gender>;
        getGenderByName(nameOrIds: Array<string | number>): Promise<PokeAPI.Gender[]>;
        getGrowthRateByName(nameOrId: string | number): Promise<PokeAPI.GrowthRate>;
        getGrowthRateByName(nameOrIds: Array<string | number>): Promise<PokeAPI.GrowthRate[]>;
        getNatureByName(nameOrId: string | number): Promise<PokeAPI.Nature>;
        getNatureByName(nameOrIds: Array<string | number>): Promise<PokeAPI.Nature[]>;
        getPokeathlonStatByName(nameOrId: string | number): Promise<PokeAPI.PokeathlonStat>;
        getPokeathlonStatByName(nameOrIds: Array<string | number>): Promise<PokeAPI.PokeathlonStat[]>;
        getPokemonByName(nameOrId: string | number): Promise<PokeAPI.Pokemon>;
        getPokemonByName(nameOrIds: Array<string | number>): Promise<PokeAPI.Pokemon[]>;
        getPokemonColorByName(nameOrId: string | number): Promise<PokeAPI.PokemonColor>;
        getPokemonColorByName(nameOrIds: Array<string | number>): Promise<PokeAPI.PokemonColor[]>;
        getPokemonFormByName(nameOrId: string | number): Promise<PokeAPI.PokemonForm>;
        getPokemonFormByName(nameOrIds: Array<string | number>): Promise<PokeAPI.PokemonForm[]>;
        getPokemonHabitatByName(nameOrId: string | number): Promise<PokeAPI.PokemonHabitat>;
        getPokemonHabitatByName(nameOrIds: Array<string | number>): Promise<PokeAPI.PokemonHabitat[]>;
        getPokemonShapeByName(nameOrId: string | number): Promise<PokeAPI.PokemonShape>;
        getPokemonShapeByName(nameOrIds: Array<string | number>): Promise<PokeAPI.PokemonShape[]>;
        getPokemonSpeciesByName(nameOrId: string | number): Promise<PokeAPI.PokemonSpecies>;
        getPokemonSpeciesByName(nameOrIds: Array<string | number>): Promise<PokeAPI.PokemonSpecies[]>;
        getStatByName(nameOrId: string | number): Promise<PokeAPI.Stat>;
        getStatByName(nameOrIds: Array<string | number>): Promise<PokeAPI.Stat[]>;
        getTypeByName(nameOrId: string | number): Promise<PokeAPI.Type>;
        getTypeByName(nameOrIds: Array<string | number>): Promise<PokeAPI.Type[]>;
        getLanguageByName(nameOrId: string | number): Promise<PokeAPI.Language>;
        getLanguageByName(nameOrIds: Array<string | number>): Promise<PokeAPI.Language[]>;
        getEndpointsList(): PokeAPI.EndpointsList;
        getBerriesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getBerriesFirmnessList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getBerriesFlavorsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getContestTypesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getContestEffectsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.APIResourceList>;
        getSuperContestEffectsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.APIResourceList>;
        getEncounterMethodsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getEncounterConditionsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getEncounterConditionValuesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getEvolutionChainsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.APIResourceList>;
        getEvolutionTriggersList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getGenerationsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getPokedexList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getVersionsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getVersionGroupsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getItemsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getItemAttributesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getItemCategoriesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getItemFlingEffectsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getItemPocketsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getMachinesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.APIResourceList>;
        getMovesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getMoveAilmentsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getMoveBattleStylesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getMoveCategoriesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getMoveDamageClassesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getMoveLearnMethodsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getMoveTargetsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getLocationsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getLocationAreasList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getPalParkAreasList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getRegionsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getAbilitiesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getCharacteristicsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.APIResourceList>;
        getEggGroupsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getGendersList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getGrowthRatesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getNaturesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getPokeathlonStatsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getPokemonsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getPokemonColorsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getPokemonFormsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getPokemonHabitatsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getPokemonShapesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getPokemonSpeciesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getStatsList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getTypesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
        getLanguagesList(interval?: PokeAPI.RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList>;
    }

    export = PokeAPI;
}
