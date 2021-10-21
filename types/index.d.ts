// Type definitions for pokedex-promise-v2 v4.x
// Project: https://github.com/PokeAPI/pokedex-promise-v2
// Definitions by: Mudkip <https://github.com/mudkipme/>
declare module "pokedex-promise-v2" {
    interface APIResourceURL<T> extends String {
    }

    namespace PokeAPI {
        interface APIResource<T> {
            url: APIResourceURL<T>;
        }

        interface NamedAPIResource<T> {
            name: string;
            url: APIResourceURL<T>;
        }

        interface APIResourceList<T> {
            count: number;
            next: APIResourceURL<APIResourceList<T>> | null;
            previous: APIResourceURL<APIResourceList<T>> | null;
            results: APIResource<T>[];
        }

        interface NamedAPIResourceList<T> {
            count: number;
            next: APIResourceURL<NamedAPIResourceList<T>> | null;
            previous: APIResourceURL<NamedAPIResourceList<T>> | null;
            results: NamedAPIResource<T>[];
        }

        /** Berries are small fruits that can provide HP and status condition restoration, stat enhancement, and even damage negation when eaten by Pokémon. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Berry) for greater detail. */
        interface Berry {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** Time it takes the tree to grow one stage, in hours. Berry trees go through four of these growth stages before they can be picked. */
            growth_time: number;
            /** The maximum number of these berries that can grow on one tree in Generation IV. */
            max_harvest: number;
            /** The power of the move "Natural Gift" when used with this Berry. */
            natural_gift_power: number;
            /** The size of this Berry, in millimeters. */
            size: number;
            /** The smoothness of this Berry, used in making Pokéblocks or Poffins. */
            smoothness: number;
            /** The speed at which this Berry dries out the soil as it grows. A higher rate means the soil dries more quickly. */
            soil_dryness: number;
            /** The firmness of this berry, used in making Pokéblocks or Poffins. */
            firmness: NamedAPIResource<BerryFirmness>;
            /** A list of references to each flavor a berry can have and the potency of each of those flavors in regard to this berry. */
            flavors: BerryFlavorMap[];
            /** Berries are actually items. This is a reference to the item specific data for this berry. */
            item: NamedAPIResource<Item>;
            /** The type inherited by "Natural Gift" when used with this Berry. */
            natural_gift_type: NamedAPIResource<Type>;
        }

        interface BerryFlavorMap {
            /** How powerful the referenced flavor is for this berry. */
            potency: number;
            /** The referenced berry flavor. */
            flavor: NamedAPIResource<BerryFlavor>;
        }

        /** Berries can be soft or hard. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Category:Berries_by_firmness) for greater detail. */
        interface BerryFirmness {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** A list of the berries with this firmness. */
            berries: NamedAPIResource<Berry>[];
            /** The name of this resource listed in different languages. */
            names: Name[];
        }

        /** Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their [nature](#natures). Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Flavor) for greater detail. */
        interface BerryFlavor {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** A list of the berries with this flavor. */
            berries: FlavorBerryMap[];
            /** The contest type that correlates with this berry flavor. */
            contest_type: NamedAPIResource<ContestType>;
            /** The name of this resource listed in different languages. */
            names: Name[];
        }

        interface FlavorBerryMap {
            /** How powerful the referenced flavor is for this berry. */
            potency: number;
            /** The berry with the referenced flavor. */
            berry: NamedAPIResource<Berry>;
        }

        /** Contest types are categories judges used to weigh a Pokémon's condition in Pokémon contests. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Contest_condition) for greater detail. */
        interface ContestType {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The berry flavor that correlates with this contest type. */
            berry_flavor: NamedAPIResource<BerryFlavor>;
            /** The name of this contest type listed in different languages. */
            names: ContestName[];
        }

        interface ContestName {
            /** The name for this contest. */
            name: string;
            /** The color associated with this contest's name. */
            color: string;
            /** The language that this name is in. */
            language: NamedAPIResource<Language>;
        }

        /** Contest effects refer to the effects of moves when used in contests. */
        interface ContestEffect {
            /** The identifier for this resource. */
            id: number;
            /** The base number of hearts the user of this move gets. */
            appeal: number;
            /** The base number of hearts the user's opponent loses. */
            jam: number;
            /** The result of this contest effect listed in different languages. */
            effect_entries: Effect[];
            /** The flavor text of this contest effect listed in different languages. */
            flavor_text_entries: FlavorText[];
        }

        /** Super contest effects refer to the effects of moves when used in super contests. */
        interface SuperContestEffect {
            /** The identifier for this resource. */
            id: number;
            /** The level of appeal this super contest effect has. */
            appeal: number;
            /** The flavor text of this super contest effect listed in different languages. */
            flavor_text_entries: FlavorText[];
            /** A list of moves that have the effect when used in super contests. */
            moves: NamedAPIResource<Move>[];
        }

        /** Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Wild_Pok%C3%A9mon) for greater detail. */
        interface EncounterMethod {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** A good value for sorting. */
            order: number;
            /** The name of this resource listed in different languages. */
            names: Name[];
        }

        /** Conditions which affect what pokemon might appear in the wild, e.g., day or night. */
        interface EncounterCondition {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: Name[];
            /** A list of possible values for this encounter condition. */
            values: NamedAPIResource<EncounterConditionValue>[];
        }

        /** Encounter condition values are the various states that an encounter condition can have, i.e., time of day can be either day or night. */
        interface EncounterConditionValue {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The condition this encounter condition value pertains to. */
            condition: NamedAPIResource<EncounterCondition>;
            /** The name of this resource listed in different languages. */
            names: Name[];
        }

        /** Evolution chains are essentially family trees. They start with the lowest stage within a family and detail evolution conditions for each as well as Pokémon they can evolve into up through the hierarchy. */
        interface EvolutionChain {
            /** The identifier for this resource. */
            id: number;
            /** The item that a Pokémon would be holding when mating that would trigger the egg hatching a baby Pokémon rather than a basic Pokémon. */
            baby_trigger_item: NamedAPIResource<Item> | null;
            /** The base chain link object. Each link contains evolution details for a Pokémon in the chain. Each link references the next Pokémon in the natural evolution order. */
            chain: ChainLink;
        }

        interface ChainLink {
            /** Whether or not this link is for a baby Pokémon. This would only ever be true on the base link. */
            is_baby: boolean;
            /** The Pokémon species at this point in the evolution chain. */
            species: NamedAPIResource<PokemonSpecies>;
            /** All details regarding the specific details of the referenced Pokémon species evolution. */
            evolution_details: EvolutionDetail[] | null;
            /** A List of chain objects. */
            evolves_to: ChainLink[];
        }

        interface EvolutionDetail {
            /** The item required to cause evolution this into Pokémon species. */
            item: NamedAPIResource<Item> | null;
            /** The type of event that triggers evolution into this Pokémon species. */
            trigger: NamedAPIResource<EvolutionTrigger>;
            /** The id of the gender of the evolving Pokémon species must be in order to evolve into this Pokémon species. */
            gender: number | null;
            /** The item the evolving Pokémon species must be holding during the evolution trigger event to evolve into this Pokémon species. */
            held_item: NamedAPIResource<Item> | null;
            /** The move that must be known by the evolving Pokémon species during the evolution trigger event in order to evolve into this Pokémon species. */
            known_move: NamedAPIResource<Move> | null;
            /** The evolving Pokémon species must know a move with this type during the evolution trigger event in order to evolve into this Pokémon species. */
            known_move_type: NamedAPIResource<Type> | null;
            /** The location the evolution must be triggered at. */
            location: NamedAPIResource<Location> | null;
            /** The minimum required level of the evolving Pokémon species to evolve into this Pokémon species. */
            min_level: number;
            /** The minimum required level of happiness the evolving Pokémon species to evolve into this Pokémon species. */
            min_happiness: number | null;
            /** The minimum required level of beauty the evolving Pokémon species to evolve into this Pokémon species. */
            min_beauty: number | null;
            /** The minimum required level of affection the evolving Pokémon species to evolve into this Pokémon species. */
            min_affection: number | null;
            /** Whether or not it must be raining in the overworld to cause evolution this Pokémon species. */
            needs_overworld_rain: boolean;
            /** The Pokémon species that must be in the players party in order for the evolving Pokémon species to evolve into this Pokémon species. */
            party_species: NamedAPIResource<PokemonSpecies> | null;
            /** The player must have a Pokémon of this type in their party during the evolution trigger event in order for the evolving Pokémon species to evolve into this Pokémon species. */
            party_type: NamedAPIResource<Type> | null;
            /** The required relation between the Pokémon's Attack and Defense stats. 1 means Attack > Defense. 0 means Attack = Defense. -1 means Attack < Defense. */
            relative_physical_stats: number | null;
            /** The required time of day. Day or night. */
            time_of_day: string;
            /** Pokémon species for which this one must be traded. */
            trade_species: NamedAPIResource<PokemonSpecies> | null;
            /** Whether or not the 3DS needs to be turned upside-down as this Pokémon levels up. */
            turn_upside_down: boolean;
        }

        /** Evolution triggers are the events and conditions that cause a Pokémon to evolve. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Methods_of_evolution) for greater detail. */
        interface EvolutionTrigger {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: Name[];
            /** A list of pokemon species that result from this evolution trigger. */
            pokemon_species: NamedAPIResource<PokemonSpecies>[];
        }

        /** A generation is a grouping of the Pokémon games that separates them based on the Pokémon they include. In each generation, a new set of Pokémon, Moves, Abilities and Types that did not exist in the previous generation are released. */
        interface Generation {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** A list of abilities that were introduced in this generation. */
            abilities: NamedAPIResource<Ability>[];
            /** The name of this resource listed in different languages. */
            names: Name[];
            /** The main region travelled in this generation. */
            main_region: NamedAPIResource<Region>;
            /** A list of moves that were introduced in this generation. */
            moves: NamedAPIResource<Move>[];
            /** A list of Pokémon species that were introduced in this generation. */
            pokemon_species: NamedAPIResource<PokemonSpecies>[];
            /** A list of types that were introduced in this generation. */
            types: NamedAPIResource<Type>[];
            /** A list of version groups that were introduced in this generation. */
            version_groups: NamedAPIResource<VersionGroup>[];
        }

        /** A Pokédex is a handheld electronic encyclopedia device; one which is capable of recording and retaining information of the various Pokémon in a given region with the exception of the national dex and some smaller dexes related to portions of a region. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pokedex) for greater detail. */
        interface Pokedex {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** Whether or not this Pokédex originated in the main series of the video games. */
            is_main_series: boolean;
            /** The description of this resource listed in different languages. */
            descriptions: Description[];
            /** The name of this resource listed in different languages. */
            names: Name[];
            /** A list of Pokémon catalogued in this Pokédex and their indexes. */
            pokemon_entries: PokemonEntry[];
            /** The region this Pokédex catalogues Pokémon for. */
            region: NamedAPIResource<Region>;
            /** A list of version groups this Pokédex is relevant to. */
            version_groups: NamedAPIResource<VersionGroup>[];
        }

        interface PokemonEntry {
            /** The index of this Pokémon species entry within the Pokédex. */
            entry_number: number;
            /** The Pokémon species being encountered. */
            pokemon_species: NamedAPIResource<PokemonSpecies>;
        }

        /** Versions of the games, e.g., Red, Blue or Yellow. */
        interface Version {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: Name[];
            /** The version group this version belongs to. */
            version_group: NamedAPIResource<VersionGroup>;
        }

        /** Version groups categorize highly similar versions of the games. */
        interface VersionGroup {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** Order for sorting. Almost by date of release, except similar versions are grouped together. */
            order: number;
            /** The generation this version was introduced in. */
            generation: NamedAPIResource<Generation>;
            /** A list of methods in which Pokémon can learn moves in this version group. */
            move_learn_methods: NamedAPIResource<MoveLearnMethod>[];
            /** A list of Pokédexes introduces in this version group. */
            pokedexes: NamedAPIResource<Pokedex>[];
            /** A list of regions that can be visited in this version group. */
            regions: NamedAPIResource<Region>[];
            /** The versions this version group owns. */
            versions: NamedAPIResource<Version>[];
        }

        /** An item is an object in the games which the player can pick up, keep in their bag, and use in some manner. They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area. */
        interface Item {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The price of this item in stores. */
            cost: number;
            /** The power of the move Fling when used with this item. */
            fling_power: number;
            /** The effect of the move Fling when used with this item. */
            fling_effect: NamedAPIResource<ItemFlingEffect>;
            /** A list of attributes this item has. */
            attributes: NamedAPIResource<ItemAttribute>[];
            /** The category of items this item falls into. */
            category: NamedAPIResource<ItemCategory>;
            /** The effect of this ability listed in different languages. */
            effect_entries: VerboseEffect[];
            /** The flavor text of this ability listed in different languages. */
            flavor_text_entries: VersionGroupFlavorText[];
            /** A list of game indices relevent to this item by generation. */
            game_indices: GenerationGameIndex[];
            /** The name of this item listed in different languages. */
            names: Name[];
            /** A set of sprites used to depict this item in the game. */
            sprites: ItemSprites;
            /** A list of Pokémon that might be found in the wild holding this item. */
            held_by_pokemon: ItemHolderPokemon[];
            /** An evolution chain this item requires to produce a bay during mating. */
            baby_trigger_for: APIResource<EvolutionChain>;
            /** A list of the machines related to this item. */
            machines: MachineVersionDetail[];
        }

        interface ItemSprites {
            /** The default depiction of this item. */
            default: string;
        }

        interface ItemHolderPokemon {
            /** The Pokémon that holds this item. */
            pokemon: NamedAPIResource<Pokemon>;
            /** The details for the version that this item is held in by the Pokémon. */
            version_details: ItemHolderPokemonVersionDetail[];
        }

        interface ItemHolderPokemonVersionDetail {
            /** How often this Pokémon holds this item in this version. */
            rarity: number;
            /** The version that this item is held in by the Pokémon. */
            version: NamedAPIResource<Version>;
        }

        /** Item attributes define particular aspects of items, e.g. "usable in battle" or "consumable". */
        interface ItemAttribute {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** A list of items that have this attribute. */
            items: NamedAPIResource<Item>[];
            /** The name of this item attribute listed in different languages. */
            names: Name[];
            /** The description of this item attribute listed in different languages. */
            descriptions: Description[];
        }

        /** Item categories determine where items will be placed in the players bag. */
        interface ItemCategory {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** A list of items that are a part of this category. */
            items: NamedAPIResource<Item>[];
            /** The name of this item category listed in different languages. */
            names: Name[];
            /** The pocket items in this category would be put in. */
            pocket: NamedAPIResource<ItemPocket>;
        }

        /** The various effects of the move "Fling" when used with different items. */
        interface ItemFlingEffect {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The result of this fling effect listed in different languages. */
            effect_entries: Effect[];
            /** A list of items that have this fling effect. */
            items: NamedAPIResource<Item>[];
        }

        /** Pockets within the players bag used for storing items by category. */
        interface ItemPocket {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** A list of item categories that are relevant to this item pocket. */
            categories: NamedAPIResource<ItemCategory>[];
            /** The name of this resource listed in different languages. */
            names: Name[];
        }

        /** Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes. */
        interface Location {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The region this location can be found in. */
            region: NamedAPIResource <Region>;
            /** The name of this resource listed in different languages. */
            names: Name[];
            /** A list of game indices relevent to this location by generation. */
            game_indices: GenerationGameIndex[];
            /** Areas that can be found within this location. */
            areas: NamedAPIResource<LocationArea>[];
        }

        /** Location areas are sections of areas, such as floors in a building or cave. Each area has its own set of possible Pokémon encounters. */
        interface LocationArea {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The internal id of an API resource within game data. */
            game_index: number;
            /** A list of methods in which Pokémon may be encountered in this area and how likely the method will occur depending on the version of the game. */
            encounter_method_rates: EncounterMethodRate[];
            /** The region this location area can be found in. */
            location: NamedAPIResource<Location>;
            /** The name of this resource listed in different languages. */
            names: Name[];
            /** A list of Pokémon that can be encountered in this area along with version specific details about the encounter. */
            pokemon_encounters: PokemonEncounter[];
        }

        interface EncounterMethodRate {
            /** The method in which Pokémon may be encountered in an area.. */
            encounter_method: NamedAPIResource <EncounterMethod>;
            /** The chance of the encounter to occur on a version of the game. */
            version_details: EncounterVersionDetails[];
        }

        interface EncounterVersionDetails {
            /** The chance of an encounter to occur. */
            rate: number;
            /** The version of the game in which the encounter can occur with the given chance. */
            version: NamedAPIResource <Version>;
        }

        interface PokemonEncounter {
            /** The Pokémon being encountered. */
            pokemon: NamedAPIResource <Pokemon>;
            /** A list of versions and encounters with Pokémon that might happen in the referenced location area. */
            version_details: VersionEncounterDetail[];
        }

        /** Areas used for grouping Pokémon encounters in Pal Park. They're like habitats that are specific to [Pal Park](https://bulbapedia.bulbagarden.net/wiki/Pal_Park). */
        interface PalParkArea {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: Name[];
            /** A list of Pokémon encountered in thi pal park area along with details. */
            pokemon_encounters: PalParkEncounterSpecies[];
        }

        interface PalParkEncounterSpecies {
            /** The base score given to the player when this Pokémon is caught during a pal park run. */
            base_score: number;
            /** The base rate for encountering this Pokémon in this pal park area. */
            rate: number;
            /** The Pokémon species being encountered. */
            pokemon_species: NamedAPIResource <PokemonSpecies>;
        }

        /** A region is an organized area of the Pokémon world. Most often, the main difference between regions is the species of Pokémon that can be encountered within them. */
        interface Region {
            /** The identifier for this resource. */
            id: number;
            /** A list of locations that can be found in this region. */
            locations: NamedAPIResource<Location>[];
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: Name[];
            /** The generation this region was introduced in. */
            main_generation: NamedAPIResource <Generation>;
            /** A list of pokédexes that catalogue Pokémon in this region. */
            pokedexes: NamedAPIResource<Pokedex>[];
            /** A list of version groups where this region can be visited. */
            version_groups: NamedAPIResource<VersionGroup>[];
        }

        /** Machines are the representation of items that teach moves to Pokémon. They vary from version to version, so it is not certain that one specific TM or HM corresponds to a single Machine. */
        interface Machine {
            /** The identifier for this resource. */
            id: number;
            /** The TM or HM item that corresponds to this machine. */
            item: NamedAPIResource<Item>;
            /** The move that is taught by this machine. */
            move: NamedAPIResource<Move>;
            /** The version group that this machine applies to. */
            version_group: NamedAPIResource<VersionGroup>;
        }

        /** Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas. */
        interface Move {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The percent value of how likely this move is to be successful. */
            accuracy: number;
            /** The percent value of how likely it is this moves effect will happen. */
            effect_chance: number | null;
            /** Power points. The number of times this move can be used. */
            pp: number;
            /** A value between -8 and 8. Sets the order in which moves are executed during battle. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Priority) for greater detail. */
            priority: number;
            /** The base power of this move with a value of 0 if it does not have a base power. */
            power: number;
            /** A detail of normal and super contest combos that require this move. */
            contest_combos: ContestComboSets;
            /** The type of appeal this move gives a Pokémon when used in a contest. */
            contest_type: NamedAPIResource<ContestType>;
            /** The effect the move has when used in a contest. */
            contest_effect: APIResource<ContestEffect>;
            /** The type of damage the move inflicts on the target, e.g. physical. */
            damage_class: NamedAPIResource<MoveDamageClass>;
            /** The effect of this move listed in different languages. */
            effect_entries: VerboseEffect[];
            /** The list of previous effects this move has had across version groups of the games. */
            effect_changes: AbilityEffectChange[];
            /** The flavor text of this move listed in different languages. */
            flavor_text_entries: MoveFlavorText[];
            /** The generation in which this move was introduced. */
            generation: NamedAPIResource <Generation>;
            /** A list of the machines that teach this move. */
            machines: MachineVersionDetail[];
            /** Metadata about this move */
            meta: MoveMetaData;
            /** The name of this resource listed in different languages. */
            names: Name[];
            /** A list of move resource value changes across version groups of the game. */
            past_values: PastMoveStatValues[];
            /** A list of stats this moves effects and how much it effects them. */
            stat_changes: MoveStatChange[];
            /** The effect the move has when used in a super contest. */
            super_contest_effect: APIResource <SuperContestEffect>;
            /** The type of target that will receive the effects of the attack. */
            target: NamedAPIResource <MoveTarget>;
            /** The elemental type of this move. */
            type: NamedAPIResource  <Type>;
        }

        interface ContestComboSets {
            /** A detail of moves this move can be used before or after, granting additional appeal points in contests. */
            normal: ContestComboDetail;
            /** A detail of moves this move can be used before or after, granting additional appeal points in super contests. */
            super: ContestComboDetail;
        }

        interface ContestComboDetail {
            /** A list of moves to use before this move. */
            use_before: NamedAPIResource<Move>[] | null;
            /** A list of moves to use after this move. */
            use_after: NamedAPIResource<Move>[] | null;
        }

        interface MoveFlavorText {
            /** The localized flavor text for an api resource in a specific language. */
            flavor_text: string;
            /** The language this name is in. */
            language: NamedAPIResource<Language>;
            /** The version group that uses this flavor text. */
            version_group: NamedAPIResource<VersionGroup>;
        }

        interface MoveMetaData {
            /** The status ailment this move inflicts on its target. */
            ailment: NamedAPIResource <MoveAilment>;
            /** The category of move this move falls under, e.g. damage or ailment. */
            category: NamedAPIResource <MoveCategory>;
            /** The minimum number of times this move hits. Null if it always only hits once. */
            min_hits: number | null;
            /** The maximum number of times this move hits. Null if it always only hits once. */
            max_hits: number | null;
            /** The minimum number of turns this move continues to take effect. Null if it always only lasts one turn. */
            min_turns: number | null;
            /** The maximum number of turns this move continues to take effect. Null if it always only lasts one turn. */
            max_turns: number | null;
            /** HP drain (if positive) or Recoil damage (if negative), in percent of damage done. */
            drain: number;
            /** The amount of hp gained by the attacking Pokemon, in percent of it's maximum HP. */
            healing: number;
            /** Critical hit rate bonus. */
            crit_rate: number;
            /** The likelihood this attack will cause an ailment. */
            ailment_chance: number;
            /** The likelihood this attack will cause the target Pokémon to flinch. */
            flinch_chance: number;
            /** The likelihood this attack will cause a stat change in the target Pokémon. */
            stat_chance: number;
        }

        interface MoveStatChange {
            /** The amount of change. */
            change: number;
            /** The stat being affected. */
            stat: NamedAPIResource  <Stat>;
        }

        interface PastMoveStatValues {
            /** The percent value of how likely this move is to be successful. */
            accuracy: number;
            /** The percent value of how likely it is this moves effect will take effect. */
            effect_chance: number;
            /** The base power of this move with a value of 0 if it does not have a base power. */
            power: number;
            /** Power points. The number of times this move can be used. */
            pp: number;
            /** The effect of this move listed in different languages. */
            effect_entries: VerboseEffect[];
            /** The elemental type of this move. */
            type: NamedAPIResource  <Type>;
            /** The version group in which these move stat values were in effect. */
            version_group: NamedAPIResource <VersionGroup>;
        }

        /** Move Ailments are status conditions caused by moves used during battle. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/http://bulbapedia.bulbagarden.net/wiki/Status_condition) for greater detail. */
        interface MoveAilment {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** A list of moves that cause this ailment. */
            moves: NamedAPIResource<Move>[];
            /** The name of this resource listed in different languages. */
            names: Name[];
        }

        /** Styles of moves when used in the Battle Palace. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III)) for greater detail. */
        interface MoveBattleStyle {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: Name[];
        }

        /** Very general categories that loosely group move effects. */
        interface MoveCategory {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** A list of moves that fall into this category. */
            moves: NamedAPIResource<Move>[];
            /** The description of this resource listed in different languages. */
            descriptions: Description[];
        }

        /** Damage classes moves can have, e.g. physical, special, or non-damaging. */
        interface MoveDamageClass {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The description of this resource listed in different languages. */
            descriptions: Description[];
            /** A list of moves that fall into this damage class. */
            moves: NamedAPIResource<Move>[];
            /** The name of this resource listed in different languages. */
            names: Name[];
        }

        /** Methods by which Pokémon can learn moves. */
        interface MoveLearnMethod {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The description of this resource listed in different languages. */
            descriptions: Description[];
            /** The name of this resource listed in different languages. */
            names: Name[];
            /** A list of version groups where moves can be learned through this method. */
            version_groups: NamedAPIResource<VersionGroup>[];
        }

        /** Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves. */
        interface MoveTarget {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The description of this resource listed in different languages. */
            descriptions: Description[];
            /** A list of moves that that are directed at this target. */
            moves: NamedAPIResource<Move>[];
            /** The name of this resource listed in different languages. */
            names: Name[];
        }

        /** Abilities provide passive effects for Pokémon in battle or in the overworld. Pokémon have multiple possible abilities but can have only one ability at a time. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Ability) for greater detail. */
        interface Ability {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** Whether or not this ability originated in the main series of the video games. */
            is_main_series: boolean;
            /** The generation this ability originated in. */
            generation: NamedAPIResource<Generation>;
            /** The name of this resource listed in different languages. */
            names: Name[];
            /** The effect of this ability listed in different languages. */
            effect_entries: VerboseEffect[];
            /** The list of previous effects this ability has had across version groups. */
            effect_changes: AbilityEffectChange[];
            /** The flavor text of this ability listed in different languages. */
            flavor_text_entries: AbilityFlavorText[];
            /** A list of Pokémon that could potentially have this ability. */
            pokemon: AbilityPokemon[];
        }

        interface AbilityEffectChange {
            /** The previous effect of this ability listed in different languages. */
            effect_entries: Effect[];
            /** The version group in which the previous effect of this ability originated. */
            version_group: NamedAPIResource<VersionGroup>;
        }

        interface AbilityFlavorText {
            /** The localized name for an API resource in a specific language. */
            flavor_text: string;
            /** The language this text resource is in. */
            language: NamedAPIResource<Language>;
            /** The version group that uses this flavor text. */
            version_group: NamedAPIResource<VersionGroup>;
        }

        interface AbilityPokemon {
            /** Whether or not this a hidden ability for the referenced Pokémon. */
            is_hidden: boolean;
            /** Pokémon have 3 ability 'slots' which hold references to possible abilities they could have. This is the slot of this ability for the referenced pokemon. */
            slot: number;
            /** The Pokémon this ability could belong to. */
            pokemon: NamedAPIResource<Pokemon>;
        }

        /** Characteristics indicate which stat contains a Pokémon's highest IV. A Pokémon's Characteristic is determined by the remainder of its highest IV divided by 5 (gene_modulo). Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Characteristic) for greater detail. */
        interface Characteristic {
            /** The identifier for this resource. */
            id: number;
            /** The remainder of the highest stat/IV divided by 5. */
            gene_modulo: number;
            /** The possible values of the highest stat that would result in a Pokémon recieving this characteristic when divided by 5. */
            possible_values: number[];
        }

        /** Egg Groups are categories which determine which Pokémon are able to interbreed. Pokémon may belong to either one or two Egg Groups. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Egg_Group) for greater detail. */
        interface EggGroup {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: Name[];
            /** A list of all Pokémon species that are members of this egg group. */
            pokemon_species: NamedAPIResource<PokemonSpecies>[];
        }

        /** Genders were introduced in Generation II for the purposes of breeding Pokémon but can also result in visual differences or even different evolutionary lines. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Gender) for greater detail. */
        interface Gender {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** A list of Pokémon species that can be this gender and how likely it is that they will be. */
            pokemon_species_details: PokemonSpeciesGender[];
            /** A list of Pokémon species that required this gender in order for a Pokémon to evolve into them. */
            required_for_evolution: NamedAPIResource<PokemonSpecies>[];
        }

        interface PokemonSpeciesGender {
            /** The chance of this Pokémon being female, in eighths; or -1 for genderless. */
            rate: number;
            /** A Pokémon species that can be the referenced gender. */
            pokemon_species: NamedAPIResource<PokemonSpecies>;
        }

        /** Growth rates are the speed with which Pokémon gain levels through experience. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Experience) for greater detail. */
        interface GrowthRate {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The formula used to calculate the rate at which the Pokémon species gains level. */
            formula: string;
            /** The descriptions of this characteristic listed in different languages. */
            descriptions: Description[];
            /** A list of levels and the amount of experienced needed to atain them based on this growth rate. */
            levels: GrowthRateExperienceLevel[];
            /** A list of Pokémon species that gain levels at this growth rate. */
            pokemon_species: NamedAPIResource<PokemonSpecies>[];
        }

        interface GrowthRateExperienceLevel {
            /** The level gained. */
            level: number;
            /** The amount of experience required to reach the referenced level. */
            experience: number;
        }

        /** Natures influence how a Pokémon's stats grow. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Nature) for greater detail. */
        interface Nature {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The stat decreased by 10% in Pokémon with this nature. */
            decreased_stat: NamedAPIResource<Stat>;
            /** The stat increased by 10% in Pokémon with this nature. */
            increased_stat: NamedAPIResource<Stat>;
            /** The flavor hated by Pokémon with this nature. */
            hates_flavor: NamedAPIResource<BerryFlavor>;
            /** The flavor liked by Pokémon with this nature. */
            likes_flavor: NamedAPIResource<BerryFlavor>;
            /** A list of Pokéathlon stats this nature effects and how much it effects them. */
            pokeathlon_stat_changes: NatureStatChange[];
            /** A list of battle styles and how likely a Pokémon with this nature is to use them in the Battle Palace or Battle Tent. */
            move_battle_style_preferences: MoveBattleStylePreference[];
            /** The name of this resource listed in different languages. */
            names: Name[];
        }

        interface NatureStatChange {
            /** The amount of change. */
            max_change: number;
            /** The stat being affected. */
            pokeathlon_stat: NamedAPIResource<PokeathlonStat>;
        }

        interface MoveBattleStylePreference {
            /** Chance of using the move, in percent, if HP is under one half. */
            low_hp_preference: number;
            /** Chance of using the move, in percent, if HP is over one half. */
            high_hp_preference: number;
            /** The move battle style. */
            move_battle_style: NamedAPIResource<MoveBattleStyle>;
        }

        /** Pokeathlon Stats are different attributes of a Pokémon's performance in Pokéathlons. In Pokéathlons, competitions happen on different courses; one for each of the different Pokéathlon stats. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9athlon) for greater detail. */
        interface PokeathlonStat {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: Name[];
            /** A detail of natures which affect this Pokéathlon stat positively or negatively. */
            affecting_natures: NaturePokeathlonStatAffectSets;
        }

        interface NaturePokeathlonStatAffectSets {
            /** A list of natures and how they change the referenced Pokéathlon stat. */
            increase: NaturePokeathlonStatAffect[];
            /** A list of natures and how they change the referenced Pokéathlon stat. */
            decrease: NaturePokeathlonStatAffect[];
        }

        interface NaturePokeathlonStatAffect {
            /** The maximum amount of change to the referenced Pokéathlon stat. */
            max_change: number;
            /** The nature causing the change. */
            nature: NamedAPIResource<Nature>;
        }

        /** Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon.  Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_(species)) for greater detail. */
        interface Pokemon {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The base experience gained for defeating this Pokémon. */
            base_experience: number;
            /** The height of this Pokémon in decimetres. */
            height: number;
            /** Set for exactly one Pokémon used as the default for each species. */
            is_default: boolean;
            /** Order for sorting. Almost national order, except families are grouped together. */
            order: number;
            /** The weight of this Pokémon in hectograms. */
            weight: number;
            /** A list of abilities this Pokémon could potentially have. */
            abilities: PokemonAbility[];
            /** A list of forms this Pokémon can take on. */
            forms: NamedAPIResource<PokemonForm>[];
            /** A list of game indices relevent to Pokémon item by generation. */
            game_indices: VersionGameIndex[];
            /** A list of items this Pokémon may be holding when encountered. */
            held_items: PokemonHeldItem[];
            /** A link to a list of location areas, as well as encounter details pertaining to specific versions. */
            location_area_encounters: string;
            /** A list of moves along with learn methods and level details pertaining to specific version groups. */
            moves: PokemonMove[];
            /** A set of sprites used to depict this Pokémon in the game. A visual representation of the various sprites can be found at <a href='https://github.com/PokeAPI/sprites#sprites'>PokeAPI/sprites</a> */
            sprites: PokemonSprites;
            /** The species this Pokémon belongs to. */
            species: NamedAPIResource<PokemonSpecies>;
            /** A list of base stat values for this Pokémon. */
            stats: PokemonStat[];
            /** A list of details showing types this Pokémon has. */
            types: PokemonType[];
        }

        interface PokemonAbility {
            /** Whether or not this is a hidden ability. */
            is_hidden: boolean;
            /** The slot this ability occupies in this Pokémon species. */
            slot: number;
            /** The ability the Pokémon may have. */
            ability: NamedAPIResource<Ability>;
        }

        interface PokemonType {
            /** The order the Pokémon's types are listed in. */
            slot: number;
            /** The type the referenced Pokémon has. */
            type: NamedAPIResource<Type>;
        }

        interface PokemonHeldItem {
            /** The item the referenced Pokémon holds. */
            item: NamedAPIResource<Item>;
            /** The details of the different versions in which the item is held. */
            version_details: PokemonHeldItemVersion[];
        }

        interface PokemonHeldItemVersion {
            /** The version in which the item is held. */
            version: NamedAPIResource<Version>;
            /** How often the item is held. */
            rarity: number;
        }

        interface PokemonMove {
            /** The move the Pokémon can learn. */
            move: NamedAPIResource<Move>;
            /** The details of the version in which the Pokémon can learn the move. */
            version_group_details: PokemonMoveVersion[];
        }

        interface PokemonMoveVersion {
            /** The method by which the move is learned. */
            move_learn_method: NamedAPIResource<MoveLearnMethod>;
            /** The version group in which the move is learned. */
            version_group: NamedAPIResource<VersionGroup>;
            /** The minimum level to learn the move. */
            level_learned_at: number;
        }

        interface PokemonStat {
            /** The stat the Pokémon has. */
            stat: NamedAPIResource<Stat>;
            /** The effort points (EV) the Pokémon has in the stat. */
            effort: number;
            /** The base value of the stat. */
            base_stat: number;
        }

        interface PokemonSprites {
            /** The default depiction of this Pokémon from the front in battle. */
            front_default: string;
            /** The shiny depiction of this Pokémon from the front in battle. */
            front_shiny: string;
            /** The female depiction of this Pokémon from the front in battle. */
            front_female: string;
            /** The shiny female depiction of this Pokémon from the front in battle. */
            front_shiny_female: string;
            /** The default depiction of this Pokémon from the back in battle. */
            back_default: string;
            /** The shiny depiction of this Pokémon from the back in battle. */
            back_shiny: string;
            /** The female depiction of this Pokémon from the back in battle. */
            back_female: string;
            /** The shiny female depiction of this Pokémon from the back in battle. */
            back_shiny_female: string;
        }

        /** Pokémon Location Areas are ares where Pokémon can be found. */
        interface LocationAreaEncounter {
            /** The location area the referenced Pokémon can be encountered in. */
            location_area: NamedAPIResource<LocationArea>;
            /** A list of versions and encounters with the referenced Pokémon that might happen. */
            version_details: VersionEncounterDetail[];
        }

        /** Colors used for sorting Pokémon in a Pokédex. The color listed in the Pokédex is usually the color most apparent or covering each Pokémon's body. No orange category exists; Pokémon that are primarily orange are listed as red or brown. */
        interface PokemonColor {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: Name[];
            /** A list of the Pokémon species that have this color. */
            pokemon_species: NamedAPIResource<PokemonSpecies>[];
        }

        /** Some Pokémon may appear in one of multiple, visually different forms. These differences are purely cosmetic. For variations within a Pokémon species, which do differ in more than just visuals, the 'Pokémon' entity is used to represent such a variety. */
        interface PokemonForm {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The order in which forms should be sorted within all forms. Multiple forms may have equal order, in which case they should fall back on sorting by name. */
            order: number;
            /** The order in which forms should be sorted within a species' forms. */
            form_order: number;
            /** True for exactly one form used as the default for each Pokémon. */
            is_default: boolean;
            /** Whether or not this form can only happen during battle. */
            is_battle_only: boolean;
            /** Whether or not this form requires mega evolution. */
            is_mega: boolean;
            /** The name of this form. */
            form_name: string;
            /** The Pokémon that can take on this form. */
            pokemon: NamedAPIResource<Pokemon>;
            /** A set of sprites used to depict this Pokémon form in the game. */
            sprites: PokemonFormSprites;
            /** The version group this Pokémon form was introduced in. */
            version_group: NamedAPIResource<VersionGroup>;
            /** The form specific full name of this Pokémon form, or empty if the form does not have a specific name. */
            names: Name[];
            /** The form specific form name of this Pokémon form, or empty if the form does not have a specific name. */
            form_names: Name[];
        }

        interface PokemonFormSprites {
            /** The default depiction of this Pokémon form from the front in battle. */
            front_default: string;
            /** The shiny depiction of this Pokémon form from the front in battle. */
            front_shiny: string;
            /** The default depiction of this Pokémon form from the back in battle. */
            back_default: string;
            /** The shiny depiction of this Pokémon form from the back in battle. */
            back_shiny: string;
        }

        /** Habitats are generally different terrain Pokémon can be found in but can also be areas designated for rare or legendary Pokémon. */
        interface PokemonHabitat {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The name of this resource listed in different languages. */
            names: Name[];
            /** A list of the Pokémon species that can be found in this habitat. */
            pokemon_species: NamedAPIResource<PokemonSpecies>[];
        }

        /** Shapes used for sorting Pokémon in a Pokédex. */
        interface PokemonShape {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The "scientific" name of this Pokémon shape listed in different languages. */
            awesome_names: AwesomeName[];
            /** The name of this resource listed in different languages. */
            names: Name[];
            /** A list of the Pokémon species that have this shape. */
            pokemon_species: NamedAPIResource<PokemonSpecies>[];
        }

        interface AwesomeName {
            /** The localized "scientific" name for an API resource in a specific language. */
            awesome_name: string;
            /** The language this "scientific" name is in. */
            language: NamedAPIResource<Language>;
        }

        /** A Pokémon Species forms the basis for at least one Pokémon. Attributes of a Pokémon species are shared across all varieties of Pokémon within the species. A good example is Wormadam; Wormadam is the species which can be found in three different varieties, Wormadam-Trash, Wormadam-Sandy and Wormadam-Plant. */
        interface PokemonSpecies {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** The order in which species should be sorted. Based on National Dex order, except families are grouped together and sorted by stage. */
            order: number;
            /** The chance of this Pokémon being female, in eighths; or -1 for genderless. */
            gender_rate: number;
            /** The base capture rate; up to 255. The higher the number, the easier the catch. */
            capture_rate: number;
            /** The happiness when caught by a normal Pokéball; up to 255. The higher the number, the happier the Pokémon. */
            base_happiness: number;
            /** Whether or not this is a baby Pokémon. */
            is_baby: boolean;
            /** Whether or not this is a legendary Pokémon. */
            is_legendary: boolean;
            /** Whether or not this is a mythical Pokémon. */
            is_mythical: boolean;
            /** Initial hatch counter: one must walk 255 × (hatch_counter + 1) steps before this Pokémon's egg hatches, unless utilizing bonuses like Flame Body's. */
            hatch_counter: number;
            /** Whether or not this Pokémon has visual gender differences. */
            has_gender_differences: boolean;
            /** Whether or not this Pokémon has multiple forms and can switch between them. */
            forms_switchable: boolean;
            /** The rate at which this Pokémon species gains levels. */
            growth_rate: NamedAPIResource<GrowthRate>;
            /** A list of Pokedexes and the indexes reserved within them for this Pokémon species. */
            pokedex_numbers: PokemonSpeciesDexEntry[];
            /** A list of egg groups this Pokémon species is a member of. */
            egg_groups: NamedAPIResource<EggGroup>[];
            /** The color of this Pokémon for Pokédex search. */
            color: NamedAPIResource<PokemonColor>;
            /** The shape of this Pokémon for Pokédex search. */
            shape: NamedAPIResource<PokemonShape>;
            /** The Pokémon species that evolves into this Pokemon_species. */
            evolves_from_species: NamedAPIResource<PokemonSpecies>;
            /** The evolution chain this Pokémon species is a member of. */
            evolution_chain: APIResource<EvolutionChain>;
            /** The habitat this Pokémon species can be encountered in. */
            habitat: NamedAPIResource<PokemonHabitat> | null;
            /** The generation this Pokémon species was introduced in. */
            generation: NamedAPIResource<Generation>;
            /** The name of this resource listed in different languages. */
            names: Name[];
            /** A list of encounters that can be had with this Pokémon species in pal park. */
            pal_park_encounters: PalParkEncounterArea[];
            /** A list of flavor text entries for this Pokémon species. */
            flavor_text_entries: FlavorText[];
            /** Descriptions of different forms Pokémon take on within the Pokémon species. */
            form_descriptions: Description[];
            /** The genus of this Pokémon species listed in multiple languages. */
            genera: Genus[];
            /** A list of the Pokémon that exist within this Pokémon species. */
            varieties: PokemonSpeciesVariety[];
        }

        interface Genus {
            /** The localized genus for the referenced Pokémon species */
            genus: string;
            /** The language this genus is in. */
            language: NamedAPIResource<Language>;
        }

        interface PokemonSpeciesDexEntry {
            /** The index number within the Pokédex. */
            entry_number: number;
            /** The Pokédex the referenced Pokémon species can be found in. */
            pokedex: NamedAPIResource<Pokedex>;
        }

        interface PalParkEncounterArea {
            /** The base score given to the player when the referenced Pokémon is caught during a pal park run. */
            base_score: number;
            /** The base rate for encountering the referenced Pokémon in this pal park area. */
            rate: number;
            /** The pal park area where this encounter happens. */
            area: NamedAPIResource<PalParkArea>;
        }

        interface PokemonSpeciesVariety {
            /** Whether this variety is the default variety. */
            is_default: boolean;
            /** The Pokémon variety. */
            pokemon: NamedAPIResource<Pokemon>;
        }

        /** Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles. */
        interface Stat {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** ID the games use for this stat. */
            game_index: number;
            /** Whether this stat only exists within a battle. */
            is_battle_only: boolean;
            /** A detail of moves which affect this stat positively or negatively. */
            affecting_moves: MoveStatAffectSets;
            /** A detail of natures which affect this stat positively or negatively. */
            affecting_natures: NatureStatAffectSets;
            /** A list of characteristics that are set on a Pokémon when its highest base stat is this stat. */
            characteristics: APIResource<Characteristic>[];
            /** The class of damage this stat is directly related to. */
            move_damage_class: NamedAPIResource<MoveDamageClass>;
            /** The name of this resource listed in different languages. */
            names: Name[];
        }

        interface MoveStatAffectSets {
            /** A list of moves and how they change the referenced stat. */
            increase: MoveStatAffect[];
            /** A list of moves and how they change the referenced stat. */
            decrease: MoveStatAffect[];
        }

        interface MoveStatAffect {
            /** The maximum amount of change to the referenced stat. */
            change: number;
            /** The move causing the change. */
            move: NamedAPIResource<Move>;
        }

        interface NatureStatAffectSets {
            /** A list of natures and how they change the referenced stat. */
            increase: NamedAPIResource<Nature>[];
            /** A list of nature sand how they change the referenced stat. */
            decrease: NamedAPIResource<Nature>[];
        }

        /** Types are properties for Pokémon and their moves. Each type has three properties: which types of Pokémon it is super effective against, which types of Pokémon it is not very effective against, and which types of Pokémon it is completely ineffective against. */
        interface Type {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** A detail of how effective this type is toward others and vice versa. */
            damage_relations: TypeRelations;
            /** A list of game indices relevent to this item by generation. */
            game_indices: GenerationGameIndex[];
            /** The generation this type was introduced in. */
            generation: NamedAPIResource<Generation>;
            /** The class of damage inflicted by this type. */
            move_damage_class: NamedAPIResource<MoveDamageClass>;
            /** The name of this resource listed in different languages. */
            names: Name[];
            /** A list of details of Pokémon that have this type. */
            pokemon: TypePokemon[];
            /** A list of moves that have this type. */
            moves: NamedAPIResource<Move>[];
        }

        interface TypePokemon {
            /** The order the Pokémon's types are listed in. */
            slot: number;
            /** The Pokémon that has the referenced type. */
            pokemon: NamedAPIResource<Pokemon>;
        }

        interface TypeRelations {
            /** A list of types this type has no effect on. */
            no_damage_to: NamedAPIResource<Type>[];
            /** A list of types this type is not very effect against. */
            half_damage_to: NamedAPIResource<Type>[];
            /** A list of types this type is very effect against. */
            double_damage_to: NamedAPIResource<Type>[];
            /** A list of types that have no effect on this type. */
            no_damage_from: NamedAPIResource<Type>[];
            /** A list of types that are not very effective against this type. */
            half_damage_from: NamedAPIResource<Type>[];
            /** A list of types that are very effective against this type. */
            double_damage_from: NamedAPIResource<Type>[];
        }

        /** Languages for translations of API resource information. */
        interface Language {
            /** The identifier for this resource. */
            id: number;
            /** The name for this resource. */
            name: string;
            /** Whether or not the games are published in this language. */
            official: boolean;
            /** The two-letter code of the country where this language is spoken. Note that it is not unique. */
            iso639: string;
            /** The two-letter code of the language. Note that it is not unique. */
            iso3166: string;
            /** The name of this resource listed in different languages. */
            names: Name[];
        }

        interface Description {
            /** The localized description for an API resource in a specific language. */
            description: string;
            /** The language this name is in. */
            language: NamedAPIResource<Language>;
        }

        interface Effect {
            /** The localized effect text for an API resource in a specific language. */
            effect: string;
            /** The language this effect is in. */
            language: NamedAPIResource<Language>;
        }

        interface Encounter {
            /** The lowest level the Pokémon could be encountered at. */
            min_level: number;
            /** The highest level the Pokémon could be encountered at. */
            max_level: number;
            /** A list of condition values that must be in effect for this encounter to occur. */
            condition_values: NamedAPIResource<EncounterConditionValue>[];
            /** Percent chance that this encounter will occur. */
            chance: number;
            /** The method by which this encounter happens. */
            method: NamedAPIResource<EncounterMethod>;
        }

        interface FlavorText {
            /** The localized flavor text for an API resource in a specific language. */
            flavor_text: string;
            /** The language this name is in. */
            language: NamedAPIResource<Language>;
            /** The game version this flavor text is extracted from. */
            version: NamedAPIResource<Version>;
        }

        interface GenerationGameIndex {
            /** The internal id of an API resource within game data. */
            game_index: number;
            /** The generation relevent to this game index. */
            generation: NamedAPIResource<Generation>;
        }

        interface MachineVersionDetail {
            /** The machine that teaches a move from an item. */
            machine: APIResource <Machine>;
            /** The version group of this specific machine. */
            version_group: NamedAPIResource<VersionGroup>;
        }

        interface Name {
            /** The localized name for an API resource in a specific language. */
            name: string;
            /** The language this name is in. */
            language: NamedAPIResource<Language>;
        }

        interface VerboseEffect {
            /** The localized effect text for an API resource in a specific language. */
            effect: string;
            /** The localized effect text in brief. */
            short_effect: string;
            /** The language this effect is in. */
            language: NamedAPIResource<Language>;
        }

        interface VersionEncounterDetail {
            /** The game version this encounter happens in. */
            version: NamedAPIResource<Version>;
            /** The total percentage of all encounter potential. */
            max_chance: number;
            /** A list of encounters and their specifics. */
            encounter_details: Encounter[];
        }

        interface VersionGameIndex {
            /** The internal id of an API resource within game data. */
            game_index: number;
            /** The version relevent to this game index. */
            version: NamedAPIResource<Version>;
        }

        interface VersionGroupFlavorText {
            /** The localized name for an API resource in a specific language. */
            text: string;
            /** The language this name is in. */
            language: NamedAPIResource<Language>;
            /** The version group which uses this flavor text. */
            version_group: NamedAPIResource<VersionGroup>;
        }
    }

    interface PokeAPIOptions {
        protocol?: "https" | "http";
        hostName?: string;
        versionPath?: string;
        cacheLimit?: number;
        timeout?: number;
    }

    interface RootEndPointInterval {
        limit?: number;
        offset?: number;
    }

    interface EndPointResult {
        "berry": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.Berry>>;
        "berry-firmness": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.BerryFirmness>>;
        "berry-flavor": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.BerryFlavor>>;
        "contest-type": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.ContestType>>;
        "contest-effect": APIResourceURL<PokeAPI.APIResourceList<PokeAPI.ContestEffect>>;
        "super-contest-effect": APIResourceURL<PokeAPI.APIResourceList<PokeAPI.SuperContestEffect>>;
        "encounter-method": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.EncounterMethod>>;
        "encounter-condition": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.EncounterCondition>>;
        "encounter-condition-value": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.EncounterConditionValue>>;
        "evolution-chain": APIResourceURL<PokeAPI.APIResourceList<PokeAPI.EvolutionChain>>;
        "evolution-trigger": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.EvolutionTrigger>>;
        "generation": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.Generation>>;
        "pokedex": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.Pokedex>>;
        "version": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.Version>>;
        "version-group": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.VersionGroup>>;
        "item": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.Item>>;
        "item-attribute": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.ItemAttribute>>;
        "item-category": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.ItemCategory>>;
        "item-fling-effect": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.ItemFlingEffect>>;
        "item-pocket": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.ItemPocket>>;
        "machine": APIResourceURL<PokeAPI.APIResourceList<PokeAPI.Machine>>;
        "move": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.Move>>;
        "move-ailment": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.MoveAilment>>;
        "move-battle-style": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.MoveBattleStyle>>;
        "move-category": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.MoveCategory>>;
        "move-damage-class": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.MoveDamageClass>>;
        "move-learn-method": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.MoveLearnMethod>>;
        "move-target": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.MoveTarget>>;
        "location": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.Location>>;
        "location-area": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.LocationArea>>;
        "pal-park-area": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.PalParkArea>>;
        "region": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.Region>>;
        "ability": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.Ability>>;
        "characteristic": APIResourceURL<PokeAPI.APIResourceList<PokeAPI.Characteristic>>;
        "egg-group": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.EggGroup>>;
        "gender": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.Gender>>;
        "growth-rate": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.GrowthRate>>;
        "nature": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.Nature>>;
        "pokeathlon-stat": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.PokeathlonStat>>;
        "pokemon": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.Pokemon>>;
        "pokemon-color": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.PokemonColor>>;
        "pokemon-form": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.PokemonForm>>;
        "pokemon-habitat": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.PokemonHabitat>>;
        "pokemon-shape": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.PokemonShape>>;
        "pokemon-species": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.PokemonSpecies>>;
        "stat": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.Stat>>;
        "type": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.Type>>;
        "language": APIResourceURL<PokeAPI.NamedAPIResourceList<PokeAPI.Language>>;
    }

    class PokeAPI {
        constructor(options?: PokeAPIOptions);
        resource(path: string): Promise<unknown>;
        resource(paths: string[]): Promise<unknown[]>;
        resource<T>(path: APIResourceURL<T>): Promise<T>;
        resource<T>(paths: APIResourceURL<T>[]): Promise<T[]>;
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
        getEndpointsList(): EndPointResult;
        getBerriesList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.Berry>>;
        getBerriesFirmnesssList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.BerryFirmness>>;
        getBerriesFlavorsList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.BerryFlavor>>;
        getContestTypesList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.ContestType>>;
        getContestEffectsList(interval?: RootEndPointInterval): Promise<PokeAPI.APIResourceList<PokeAPI.ContestEffect>>;
        getSuperContestEffectsList(interval?: RootEndPointInterval): Promise<PokeAPI.APIResourceList<PokeAPI.SuperContestEffect>>;
        getEncounterMethodsList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.EncounterMethod>>;
        getEncounterConditionsList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.EncounterCondition>>;
        getEncounterConditionValuesList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.EncounterConditionValue>>;
        getEvolutionChainsList(interval?: RootEndPointInterval): Promise<PokeAPI.APIResourceList<PokeAPI.EvolutionChain>>;
        getEvolutionTriggersList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.EvolutionTrigger>>;
        getGenerationsList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.Generation>>;
        getPokedexsList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.Pokedex>>;
        getVersionsList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.Version>>;
        getVersionGroupsList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.VersionGroup>>;
        getItemsList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.Item>>;
        getItemAttributesList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.ItemAttribute>>;
        getItemCategoriesList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.ItemCategory>>;
        getItemFlingEffectsList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.ItemFlingEffect>>;
        getItemPocketsList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.ItemPocket>>;
        getMachinesList(interval?: RootEndPointInterval): Promise<PokeAPI.APIResourceList<PokeAPI.Machine>>;
        getMovesList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.Move>>;
        getMoveAilmentsList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.MoveAilment>>;
        getMoveBattleStylesList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.MoveBattleStyle>>;
        getMoveCategoriesList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.MoveCategory>>;
        getMoveDamageClassesList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.MoveDamageClass>>;
        getMoveLearnMethodsList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.MoveLearnMethod>>;
        getMoveTargetsList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.MoveTarget>>;
        getLocationsList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.Location>>;
        getLocationAreasList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.LocationArea>>;
        getPalParkAreasList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.PalParkArea>>;
        getRegionsList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.Region>>;
        getAbilitiesList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.Ability>>;
        getCharacteristicsList(interval?: RootEndPointInterval): Promise<PokeAPI.APIResourceList<PokeAPI.Characteristic>>;
        getEggGroupsList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.EggGroup>>;
        getGendersList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.Gender>>;
        getGrowthRatesList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.GrowthRate>>;
        getNaturesList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.Nature>>;
        getPokeathlonStatsList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.PokeathlonStat>>;
        getPokemonsList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.Pokemon>>;
        getPokemonColorsList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.PokemonColor>>;
        getPokemonFormsList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.PokemonForm>>;
        getPokemonHabitatsList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.PokemonHabitat>>;
        getPokemonShapesList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.PokemonShape>>;
        getPokemonSpeciesList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.PokemonSpecies>>;
        getStatsList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.Stat>>;
        getTypesList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.Type>>;
        getLanguagesList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedAPIResourceList<PokeAPI.Language>>;
    }

    export = PokeAPI;
}
