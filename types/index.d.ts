// Type definitions for pokedex-promise-v2 v4.x
// DO NOT MODIFY, THIS IS AUTO GENERATED
// Original code by: Mudkip <https://github.com/mudkipme/>
// Schema code by: HRKings <https://github.com/HRKings/>
// Execute 'npm run gentypes` to regenerate
declare module 'pokedex-promise-v2' {
    namespace PokeAPI {
    interface Ability {
      effect_changes: {
        effect_entries: {
          effect: string;
          language: {
            name: string;
            url: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        version_group: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      effect_entries: {
        effect: string;
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        short_effect: string;
        [k: string]: unknown;
      }[];
      flavor_text_entries: {
        flavor_text: string;
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        version_group: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      generation: {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      id: number;
      is_main_series: boolean;
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      pokemon: {
        is_hidden: boolean;
        pokemon: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        slot: number;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface AbilityNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface ApiResource {
      url: string;
      [k: string]: unknown;
    }
    interface ApiResourceList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface Berry {
      firmness: {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      flavors: {
        flavor: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        potency: number;
        [k: string]: unknown;
      }[];
      growth_time: number;
      id: number;
      item: {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      max_harvest: number;
      name: string;
      natural_gift_power: number;
      natural_gift_type: {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      size: number;
      smoothness: number;
      soil_dryness: number;
      [k: string]: unknown;
    }
    interface BerryNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface BerryFirmness {
      berries: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      id: number;
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface BerryFirmnessNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface BerryFlavor {
      berries: {
        berry: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        potency: number;
        [k: string]: unknown;
      }[];
      contest_type: {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      id: number;
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface BerryFlavorNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface Characteristic {
      descriptions: {
        description: string;
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      gene_modulo: number;
      highest_stat: {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      id: number;
      possible_values: number[];
      [k: string]: unknown;
    }
    interface CharacteristicList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface ContestEffect {
      appeal: number;
      effect_entries: {
        effect: string;
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      flavor_text_entries: {
        flavor_text: string;
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      id: number;
      jam: number;
      [k: string]: unknown;
    }
    interface ContestEffectList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface ContestType {
      berry_flavor: {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      id: number;
      name: string;
      names: {
        color: string;
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface ContestTypeNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface EggGroup {
      id: number;
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      pokemon_species: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface EggGroupNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface EncounterCondition {
      id: number;
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      values: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface EncounterConditionNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface EncounterConditionValue {
      condition: {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      id: number;
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface EncounterConditionValueNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface EncounterMethod {
      id: number;
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      order: number;
      [k: string]: unknown;
    }
    interface EncounterMethodNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface EvolutionChain {
      baby_trigger_item: null | {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      chain: {
        evolution_details: unknown[];
        evolves_to: {
          evolution_details: {
            gender: number | null;
            held_item: null | {
              name: string;
              url: string;
              [k: string]: unknown;
            };
            item: null | {
              name: string;
              url: string;
              [k: string]: unknown;
            };
            known_move: null | {
              name: string;
              url: string;
              [k: string]: unknown;
            };
            known_move_type: null | {
              name: string;
              url: string;
              [k: string]: unknown;
            };
            location: null | {
              name: string;
              url: string;
              [k: string]: unknown;
            };
            min_affection: number | null;
            min_beauty: number | null;
            min_happiness: number | null;
            min_level: number | null;
            needs_overworld_rain: boolean;
            party_species: null | {
              name: string;
              url: string;
              [k: string]: unknown;
            };
            party_type: null | {
              name: string;
              url: string;
              [k: string]: unknown;
            };
            relative_physical_stats: number | null;
            time_of_day: string;
            trade_species: null | {
              name: string;
              url: string;
              [k: string]: unknown;
            };
            trigger: {
              name: string;
              url: string;
              [k: string]: unknown;
            };
            turn_upside_down: boolean;
            [k: string]: unknown;
          }[];
          evolves_to: {
            evolution_details: {
              gender: number | null;
              held_item: null | {
                name: string;
                url: string;
                [k: string]: unknown;
              };
              item: null | {
                name: string;
                url: string;
                [k: string]: unknown;
              };
              known_move: null | {
                name: string;
                url: string;
                [k: string]: unknown;
              };
              known_move_type: null;
              location: null | {
                name: string;
                url: string;
                [k: string]: unknown;
              };
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
              trigger: {
                name: string;
                url: string;
                [k: string]: unknown;
              };
              turn_upside_down: boolean;
              [k: string]: unknown;
            }[];
            evolves_to: unknown[];
            is_baby: boolean;
            species: {
              name: string;
              url: string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          }[];
          is_baby: boolean;
          species: {
            name: string;
            url: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        is_baby: boolean;
        species: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      id: number;
      [k: string]: unknown;
    }
    interface EvolutionChainList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface EvolutionTrigger {
      id: number;
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      pokemon_species: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface EvolutionTriggerNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface Gender {
      id: number;
      name: string;
      pokemon_species_details: {
        pokemon_species: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        rate: number;
        [k: string]: unknown;
      }[];
      required_for_evolution: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface GenderNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface Generation {
      abilities: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      id: number;
      main_region: {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      moves: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      pokemon_species: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      types: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      version_groups: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface GenerationNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface GrowthRate {
      descriptions: {
        description: string;
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      formula: string;
      id: number;
      levels: {
        experience: number;
        level: number;
        [k: string]: unknown;
      }[];
      name: string;
      pokemon_species: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface GrowthRateNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
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
      [k: string]: unknown;
    }
    interface Item {
      attributes: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      baby_trigger_for: null | {
        url: string;
        [k: string]: unknown;
      };
      category: {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      cost: number;
      effect_entries: {
        effect: string;
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        short_effect: string;
        [k: string]: unknown;
      }[];
      flavor_text_entries: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        text: string;
        version_group: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      fling_effect: null | {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      fling_power: number | null;
      game_indices: {
        game_index: number;
        generation: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      held_by_pokemon: {
        pokemon: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        version_details: {
          rarity: number;
          version: {
            name: string;
            url: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      }[];
      id: number;
      machines: {
        machine: {
          url: string;
          [k: string]: unknown;
        };
        version_group: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      sprites: {
        default: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
    interface ItemNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface ItemAttribute {
      descriptions: {
        description: string;
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      id: number;
      items: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface ItemAttributeNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface ItemCategory {
      id: number;
      items: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      pocket: {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
    interface ItemCategoryNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface ItemFlingEffect {
      effect_entries: {
        effect: string;
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      id: number;
      items: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      name: string;
      [k: string]: unknown;
    }
    interface ItemFlingEffectNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface ItemPocket {
      categories: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      id: number;
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface ItemPocketNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface Language {
      id: number;
      iso3166: string;
      iso639: string;
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      official: boolean;
      [k: string]: unknown;
    }
    interface LanguageNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface Location {
      areas: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      game_indices: {
        game_index: number;
        generation: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      id: number;
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      region: null | {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
    interface LocationNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface LocationArea {
      encounter_method_rates: {
        encounter_method: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        version_details: {
          rate: number;
          version: {
            name: string;
            url: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      }[];
      game_index: number;
      id: number;
      location: {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      pokemon_encounters: {
        pokemon: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        version_details: {
          encounter_details: {
            chance: number;
            condition_values: {
              name: string;
              url: string;
              [k: string]: unknown;
            }[];
            max_level: number;
            method: {
              name: string;
              url: string;
              [k: string]: unknown;
            };
            min_level: number;
            [k: string]: unknown;
          }[];
          max_chance: number;
          version: {
            name: string;
            url: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface LocationAreaNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface Machine {
      id: number;
      item: {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      move: {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      version_group: {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
    interface MachineList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface Move {
      accuracy: number | null;
      contest_combos: null | {
        normal: {
          use_after:
            | null
            | {
                name: string;
                url: string;
                [k: string]: unknown;
              }[];
          use_before:
            | null
            | {
                name: string;
                url: string;
                [k: string]: unknown;
              }[];
          [k: string]: unknown;
        };
        super: {
          use_after:
            | null
            | {
                name: string;
                url: string;
                [k: string]: unknown;
              }[];
          use_before:
            | null
            | {
                name: string;
                url: string;
                [k: string]: unknown;
              }[];
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      contest_effect: null | {
        url: string;
        [k: string]: unknown;
      };
      contest_type: null | {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      damage_class: null | {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      effect_chance: number | null;
      effect_changes: {
        effect_entries: {
          effect: string;
          language: {
            name: string;
            url: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        version_group: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      effect_entries: {
        effect: string;
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        short_effect: string;
        [k: string]: unknown;
      }[];
      flavor_text_entries: {
        flavor_text: string;
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        version_group: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      generation: {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      id: number;
      learned_by_pokemon: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      machines: {
        machine: {
          url: string;
          [k: string]: unknown;
        };
        version_group: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      meta: null | {
        ailment: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        ailment_chance: number;
        category: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        crit_rate: number;
        drain: number;
        flinch_chance: number;
        healing: number;
        max_hits: number | null;
        max_turns: number | null;
        min_hits: number | null;
        min_turns: number | null;
        stat_chance: number;
        [k: string]: unknown;
      };
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      past_values: {
        accuracy: number | null;
        effect_chance: number | null;
        effect_entries: {
          effect: string;
          language: {
            name: string;
            url: string;
            [k: string]: unknown;
          };
          short_effect: string;
          [k: string]: unknown;
        }[];
        power: number | null;
        pp: number | null;
        type: null | {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        version_group: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      power: number | null;
      pp: number | null;
      priority: number;
      stat_changes: {
        change: number;
        stat: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      super_contest_effect: null | {
        url: string;
        [k: string]: unknown;
      };
      target: {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      type: {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
    interface MoveNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface MoveAilment {
      id: number;
      moves: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface MoveAilmentNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface MoveBattleStyle {
      id: number;
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface MoveBattleStyleNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface MoveCategory {
      descriptions: {
        description: string;
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      id: number;
      moves: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      name: string;
      [k: string]: unknown;
    }
    interface MoveCategoryNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface MoveDamageClass {
      descriptions: {
        description: string;
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      id: number;
      moves: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface MoveDamageClassNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface MoveLearnMethod {
      descriptions: {
        description: string;
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      id: number;
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      version_groups: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface MoveLearnMethodNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface MoveTarget {
      descriptions: {
        description: string;
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      id: number;
      moves: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface MoveTargetNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface NamedApiResource {
      name: string;
      url: string;
      [k: string]: unknown;
    }
    interface NamedApiResourceList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface Nature {
      decreased_stat: null | {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      hates_flavor: null | {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      id: number;
      increased_stat: null | {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      likes_flavor: null | {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      move_battle_style_preferences: {
        high_hp_preference: number;
        low_hp_preference: number;
        move_battle_style: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      pokeathlon_stat_changes: {
        max_change: number;
        pokeathlon_stat: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface NatureNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface PalParkArea {
      id: number;
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      pokemon_encounters: {
        base_score: number;
        pokemon_species: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        rate: number;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface PalParkAreaNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface PokeathlonStat {
      affecting_natures: {
        decrease: {
          max_change: number;
          nature: {
            name: string;
            url: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        increase: {
          max_change: number;
          nature: {
            name: string;
            url: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      };
      id: number;
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface PokeathlonStatNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface Pokedex {
      descriptions: {
        description: string;
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      id: number;
      is_main_series: boolean;
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      pokemon_entries: {
        entry_number: number;
        pokemon_species: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      region: null | {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      version_groups: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface PokedexNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    type PokemonEncounter = {
      location_area: {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      version_details: {
        encounter_details: {
          chance: number;
          condition_values: {
            name: string;
            url: string;
            [k: string]: unknown;
          }[];
          max_level: number;
          method: {
            name: string;
            url: string;
            [k: string]: unknown;
          };
          min_level: number;
          [k: string]: unknown;
        }[];
        max_chance: number;
        version: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }[];
    interface Pokemon {
      abilities: {
        ability: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        is_hidden: boolean;
        slot: number;
        [k: string]: unknown;
      }[];
      base_experience: number;
      forms: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      game_indices: {
        game_index: number;
        version: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      height: number;
      held_items: {
        item: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        version_details: {
          rarity: number;
          version: {
            name: string;
            url: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      }[];
      id: number;
      is_default: boolean;
      location_area_encounters: string;
      moves: {
        move: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        version_group_details: {
          level_learned_at: number;
          move_learn_method: {
            name: string;
            url: string;
            [k: string]: unknown;
          };
          version_group: {
            name: string;
            url: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      }[];
      name: string;
      order: number;
      past_types: {
        generation: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        types: {
          slot: number;
          type: {
            name: string;
            url: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      }[];
      species: {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      sprites: {
        back_default: null | string;
        back_female: null | string;
        back_shiny: null | string;
        back_shiny_female: null | string;
        front_default: null | string;
        front_female: null | string;
        front_shiny: null | string;
        front_shiny_female: null | string;
        other: {
          dream_world: {
            front_default: null | string;
            front_female: null | string;
            [k: string]: unknown;
          };
          "official-artwork": {
            front_default: null | string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        versions: {
          "generation-i": {
            "red-blue": {
              back_default: null | string;
              back_gray: null | string;
              front_default: null | string;
              front_gray: null | string;
              [k: string]: unknown;
            };
            yellow: {
              back_default: null | string;
              back_gray: null | string;
              front_default: null | string;
              front_gray: null | string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          "generation-ii": {
            crystal: {
              back_default: null | string;
              back_shiny: null | string;
              front_default: null | string;
              front_shiny: null | string;
              [k: string]: unknown;
            };
            gold: {
              back_default: null | string;
              back_shiny: null | string;
              front_default: null | string;
              front_shiny: null | string;
              [k: string]: unknown;
            };
            silver: {
              back_default: null | string;
              back_shiny: null | string;
              front_default: null | string;
              front_shiny: null | string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          "generation-iii": {
            emerald: {
              front_default: null | string;
              front_shiny: null | string;
              [k: string]: unknown;
            };
            "firered-leafgreen": {
              back_default: null | string;
              back_shiny: null | string;
              front_default: null | string;
              front_shiny: null | string;
              [k: string]: unknown;
            };
            "ruby-sapphire": {
              back_default: null | string;
              back_shiny: null | string;
              front_default: null | string;
              front_shiny: null | string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          "generation-iv": {
            "diamond-pearl": {
              back_default: null | string;
              back_female: null | string;
              back_shiny: null | string;
              back_shiny_female: null | string;
              front_default: null | string;
              front_female: null | string;
              front_shiny: null | string;
              front_shiny_female: null | string;
              [k: string]: unknown;
            };
            "heartgold-soulsilver": {
              back_default: null | string;
              back_female: null | string;
              back_shiny: null | string;
              back_shiny_female: null | string;
              front_default: null | string;
              front_female: null | string;
              front_shiny: null | string;
              front_shiny_female: null | string;
              [k: string]: unknown;
            };
            platinum: {
              back_default: null | string;
              back_female: null | string;
              back_shiny: null | string;
              back_shiny_female: null | string;
              front_default: null | string;
              front_female: null | string;
              front_shiny: null | string;
              front_shiny_female: null | string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          "generation-v": {
            "black-white": {
              animated: {
                back_default: null | string;
                back_female: null | string;
                back_shiny: null | string;
                back_shiny_female: null | string;
                front_default: null | string;
                front_female: null | string;
                front_shiny: null | string;
                front_shiny_female: null | string;
                [k: string]: unknown;
              };
              back_default: null | string;
              back_female: null | string;
              back_shiny: null | string;
              back_shiny_female: null | string;
              front_default: null | string;
              front_female: null | string;
              front_shiny: null | string;
              front_shiny_female: null | string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          "generation-vi": {
            "omegaruby-alphasapphire": {
              front_default: null | string;
              front_female: null | string;
              front_shiny: null | string;
              front_shiny_female: null | string;
              [k: string]: unknown;
            };
            "x-y": {
              front_default: null | string;
              front_female: null | string;
              front_shiny: null | string;
              front_shiny_female: null | string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          "generation-vii": {
            icons: {
              front_default: null | string;
              front_female: null | string;
              [k: string]: unknown;
            };
            "ultra-sun-ultra-moon": {
              front_default: null | string;
              front_female: null | string;
              front_shiny: null | string;
              front_shiny_female: null | string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          "generation-viii": {
            icons: {
              front_default: null | string;
              front_female: null | string;
              [k: string]: unknown;
            };
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      stats: {
        base_stat: number;
        effort: number;
        stat: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      types: {
        slot: number;
        type: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      weight: number;
      [k: string]: unknown;
    }
    interface PokemonNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface PokemonColor {
      id: number;
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      pokemon_species: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface PokemonColorNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface PokemonForm {
      form_name: string;
      form_names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      form_order: number;
      id: number;
      is_battle_only: boolean;
      is_default: boolean;
      is_mega: boolean;
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      order: number;
      pokemon: {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      sprites: {
        back_default: null | string;
        back_female: null | string;
        back_shiny: null | string;
        back_shiny_female: null | string;
        front_default: null | string;
        front_female: null | string;
        front_shiny: null | string;
        front_shiny_female: null | string;
        [k: string]: unknown;
      };
      types: {
        slot: number;
        type: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      version_group: {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
    interface PokemonFormNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface PokemonHabitat {
      id: number;
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      pokemon_species: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface PokemonHabitatNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface PokemonShape {
      awesome_names: {
        awesome_name: string;
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      id: number;
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      pokemon_species: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface PokemonShapeNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface PokemonSpecies {
      base_happiness: number;
      capture_rate: number;
      color: {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      egg_groups: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      evolution_chain: {
        url: string;
        [k: string]: unknown;
      };
      evolves_from_species: null | {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      flavor_text_entries: {
        flavor_text: string;
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        version: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      form_descriptions: {
        description: string;
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      forms_switchable: boolean;
      gender_rate: number;
      genera: {
        genus: string;
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      generation: {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      growth_rate: {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      habitat: null | {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      has_gender_differences: boolean;
      hatch_counter: number;
      id: number;
      is_baby: boolean;
      is_legendary: boolean;
      is_mythical: boolean;
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      order: number;
      pal_park_encounters: {
        area: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        base_score: number;
        rate: number;
        [k: string]: unknown;
      }[];
      pokedex_numbers: {
        entry_number: number;
        pokedex: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      shape: {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      varieties: {
        is_default: boolean;
        pokemon: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface PokemonSpeciesNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface Region {
      id: number;
      locations: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      main_generation: {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      pokedexes: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      version_groups: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface RegionNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface Stat {
      affecting_moves: {
        decrease: {
          change: number;
          move: {
            name: string;
            url: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        increase: {
          change: number;
          move: {
            name: string;
            url: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      };
      affecting_natures: {
        decrease: {
          name: string;
          url: string;
          [k: string]: unknown;
        }[];
        increase: {
          name: string;
          url: string;
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      };
      characteristics: {
        url: string;
        [k: string]: unknown;
      }[];
      game_index: number;
      id: number;
      is_battle_only: boolean;
      move_damage_class: null | {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface StatNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface SuperContestEffect {
      appeal: number;
      flavor_text_entries: {
        flavor_text: string;
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      id: number;
      moves: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface SuperContestEffectList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface Type {
      damage_relations: {
        double_damage_from: {
          name: string;
          url: string;
          [k: string]: unknown;
        }[];
        double_damage_to: {
          name: string;
          url: string;
          [k: string]: unknown;
        }[];
        half_damage_from: {
          name: string;
          url: string;
          [k: string]: unknown;
        }[];
        half_damage_to: {
          name: string;
          url: string;
          [k: string]: unknown;
        }[];
        no_damage_from: {
          name: string;
          url: string;
          [k: string]: unknown;
        }[];
        no_damage_to: {
          name: string;
          url: string;
          [k: string]: unknown;
        }[];
        [k: string]: unknown;
      };
      game_indices: {
        game_index: number;
        generation: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      generation: {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      id: number;
      move_damage_class: null | {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      moves: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      past_damage_relations: {
        damage_relations: {
          double_damage_from: {
            name: string;
            url: string;
            [k: string]: unknown;
          }[];
          double_damage_to: {
            name: string;
            url: string;
            [k: string]: unknown;
          }[];
          half_damage_from: {
            name: string;
            url: string;
            [k: string]: unknown;
          }[];
          half_damage_to: {
            name: string;
            url: string;
            [k: string]: unknown;
          }[];
          no_damage_from: {
            name: string;
            url: string;
            [k: string]: unknown;
          }[];
          no_damage_to: {
            name: string;
            url: string;
            [k: string]: unknown;
          }[];
          [k: string]: unknown;
        };
        generation: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      pokemon: {
        pokemon: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        slot: number;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface TypeNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface Version {
      id: number;
      name: string;
      names: {
        language: {
          name: string;
          url: string;
          [k: string]: unknown;
        };
        name: string;
        [k: string]: unknown;
      }[];
      version_group: {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
    interface VersionNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface VersionGroup {
      generation: {
        name: string;
        url: string;
        [k: string]: unknown;
      };
      id: number;
      move_learn_methods: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      name: string;
      order: number;
      pokedexes: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      regions: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      versions: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }
    interface VersionGroupNamedList {
      count: number;
      next: null | string;
      previous: null | string;
      results: {
        name: string;
        url: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }

        interface PokeApiOptions {
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

        class PokeAPI {
            constructor(options?: PokeApiOptions);
            resource(path: string): Promise<unknown>;
            resource(paths: string[]): Promise<unknown[]>;
            getBerryByName(nameOrId: string | number): Promise<PokeAPI.BerryNamedList>;
            getBerryByName(nameOrIds: Array<string | number>): Promise<PokeAPI.BerryNamedList[]>;
            getBerryFirmnessByName(nameOrId: string | number): Promise<PokeAPI.BerryFirmnessNamedList>;
            getBerryFirmnessByName(nameOrIds: Array<string | number>): Promise<PokeAPI.BerryFirmnessNamedList[]>;
            getBerryFlavorByName(nameOrId: string | number): Promise<PokeAPI.BerryFlavorNamedList>;
            getBerryFlavorByName(nameOrIds: Array<string | number>): Promise<PokeAPI.BerryFlavorNamedList[]>;
            getContestTypeByName(nameOrId: string | number): Promise<PokeAPI.ContestTypeNamedList>;
            getContestTypeByName(nameOrIds: Array<string | number>): Promise<PokeAPI.ContestTypeNamedList[]>;
            getContestEffectById(id: number): Promise<PokeAPI.ContestEffectList>;
            getContestEffectById(ids: number[]): Promise<PokeAPI.ContestEffectList[]>;
            getSuperContestEffectById(id: number): Promise<PokeAPI.SuperContestEffectList>;
            getSuperContestEffectById(ids: number[]): Promise<PokeAPI.SuperContestEffectList[]>;
            getEncounterMethodByName(nameOrId: string | number): Promise<PokeAPI.EncounterMethodNamedList>;
            getEncounterMethodByName(nameOrIds: Array<string | number>): Promise<PokeAPI.EncounterMethodNamedList[]>;
            getEncounterConditionByName(nameOrId: string | number): Promise<PokeAPI.EncounterConditionNamedList>;
            getEncounterConditionByName(nameOrIds: Array<string | number>): Promise<PokeAPI.EncounterConditionNamedList[]>;
            getEncounterConditionValueByName(nameOrId: string | number): Promise<PokeAPI.EncounterConditionValueNamedList>;
            getEncounterConditionValueByName(nameOrIds: Array<string | number>): Promise<PokeAPI.EncounterConditionValueNamedList[]>;
            getEvolutionChainById(id: number): Promise<PokeAPI.EvolutionChainList>;
            getEvolutionChainById(ids: number[]): Promise<PokeAPI.EvolutionChainList[]>;
            getEvolutionTriggerByName(nameOrId: string | number): Promise<PokeAPI.EvolutionTriggerNamedList>;
            getEvolutionTriggerByName(nameOrIds: Array<string | number>): Promise<PokeAPI.EvolutionTriggerNamedList[]>;
            getGenerationByName(nameOrId: string | number): Promise<PokeAPI.GenerationNamedList>;
            getGenerationByName(nameOrIds: Array<string | number>): Promise<PokeAPI.GenerationNamedList[]>;
            getPokedexByName(nameOrId: string | number): Promise<PokeAPI.PokedexNamedList>;
            getPokedexByName(nameOrIds: Array<string | number>): Promise<PokeAPI.PokedexNamedList[]>;
            getVersionByName(nameOrId: string | number): Promise<PokeAPI.VersionNamedList>;
            getVersionByName(nameOrIds: Array<string | number>): Promise<PokeAPI.VersionNamedList[]>;
            getVersionGroupByName(nameOrId: string | number): Promise<PokeAPI.VersionGroupNamedList>;
            getVersionGroupByName(nameOrIds: Array<string | number>): Promise<PokeAPI.VersionGroupNamedList[]>;
            getItemByName(nameOrId: string | number): Promise<PokeAPI.ItemNamedList>;
            getItemByName(nameOrIds: Array<string | number>): Promise<PokeAPI.ItemNamedList[]>;
            getItemAttributeByName(nameOrId: string | number): Promise<PokeAPI.ItemAttributeNamedList>;
            getItemAttributeByName(nameOrIds: Array<string | number>): Promise<PokeAPI.ItemAttributeNamedList[]>;
            getItemCategoryByName(nameOrId: string | number): Promise<PokeAPI.ItemCategoryNamedList>;
            getItemCategoryByName(nameOrIds: Array<string | number>): Promise<PokeAPI.ItemCategoryNamedList[]>;
            getItemFlingEffectByName(nameOrId: string | number): Promise<PokeAPI.ItemFlingEffectNamedList>;
            getItemFlingEffectByName(nameOrIds: Array<string | number>): Promise<PokeAPI.ItemFlingEffectNamedList[]>;
            getItemPocketByName(nameOrId: string | number): Promise<PokeAPI.ItemPocketNamedList>;
            getItemPocketByName(nameOrIds: Array<string | number>): Promise<PokeAPI.ItemPocketNamedList[]>;
            getMachineById(id: number): Promise<PokeAPI.MachineList>;
            getMachineById(ids: number[]): Promise<PokeAPI.MachineList[]>;
            getMoveByName(nameOrId: string | number): Promise<PokeAPI.MoveNamedList>;
            getMoveByName(nameOrIds: Array<string | number>): Promise<PokeAPI.MoveNamedList[]>;
            getMoveAilmentByName(nameOrId: string | number): Promise<PokeAPI.MoveAilmentNamedList>;
            getMoveAilmentByName(nameOrIds: Array<string | number>): Promise<PokeAPI.MoveAilmentNamedList[]>;
            getMoveBattleStyleByName(nameOrId: string | number): Promise<PokeAPI.MoveBattleStyleNamedList>;
            getMoveBattleStyleByName(nameOrIds: Array<string | number>): Promise<PokeAPI.MoveBattleStyleNamedList[]>;
            getMoveCategoryByName(nameOrId: string | number): Promise<PokeAPI.MoveCategoryNamedList>;
            getMoveCategoryByName(nameOrIds: Array<string | number>): Promise<PokeAPI.MoveCategoryNamedList[]>;
            getMoveDamageClassByName(nameOrId: string | number): Promise<PokeAPI.MoveDamageClassNamedList>;
            getMoveDamageClassByName(nameOrIds: Array<string | number>): Promise<PokeAPI.MoveDamageClassNamedList[]>;
            getMoveLearnMethodByName(nameOrId: string | number): Promise<PokeAPI.MoveLearnMethodNamedList>;
            getMoveLearnMethodByName(nameOrIds: Array<string | number>): Promise<PokeAPI.MoveLearnMethodNamedList[]>;
            getMoveTargetByName(nameOrId: string | number): Promise<PokeAPI.MoveTargetNamedList>;
            getMoveTargetByName(nameOrIds: Array<string | number>): Promise<PokeAPI.MoveTargetNamedList[]>;
            getLocationByName(nameOrId: string | number): Promise<PokeAPI.LocationNamedList>;
            getLocationByName(nameOrIds: Array<string | number>): Promise<PokeAPI.LocationNamedList[]>;
            getLocationAreaByName(nameOrId: string | number): Promise<PokeAPI.LocationAreaNamedList>;
            getLocationAreaByName(nameOrIds: Array<string | number>): Promise<PokeAPI.LocationAreaNamedList[]>;
            getPalParkAreaByName(nameOrId: string | number): Promise<PokeAPI.PalParkAreaNamedList>;
            getPalParkAreaByName(nameOrIds: Array<string | number>): Promise<PokeAPI.PalParkAreaNamedList[]>;
            getRegionByName(nameOrId: string | number): Promise<PokeAPI.RegionNamedList>;
            getRegionByName(nameOrIds: Array<string | number>): Promise<PokeAPI.RegionNamedList[]>;
            getAbilityByName(nameOrId: string | number): Promise<PokeAPI.AbilityNamedList>;
            getAbilityByName(nameOrIds: Array<string | number>): Promise<PokeAPI.AbilityNamedList[]>;
            getCharacteristicById(id: number): Promise<PokeAPI.CharacteristicList>;
            getCharacteristicById(ids: number[]): Promise<PokeAPI.CharacteristicList[]>;
            getEggGroupByName(nameOrId: string | number): Promise<PokeAPI.EggGroupNamedList>;
            getEggGroupByName(nameOrIds: Array<string | number>): Promise<PokeAPI.EggGroupNamedList[]>;
            getGenderByName(nameOrId: string | number): Promise<PokeAPI.GenderNamedList>;
            getGenderByName(nameOrIds: Array<string | number>): Promise<PokeAPI.GenderNamedList[]>;
            getGrowthRateByName(nameOrId: string | number): Promise<PokeAPI.GrowthRateNamedList>;
            getGrowthRateByName(nameOrIds: Array<string | number>): Promise<PokeAPI.GrowthRateNamedList[]>;
            getNatureByName(nameOrId: string | number): Promise<PokeAPI.NatureNamedList>;
            getNatureByName(nameOrIds: Array<string | number>): Promise<PokeAPI.NatureNamedList[]>;
            getPokeathlonStatByName(nameOrId: string | number): Promise<PokeAPI.PokeathlonStatNamedList>;
            getPokeathlonStatByName(nameOrIds: Array<string | number>): Promise<PokeAPI.PokeathlonStatNamedList[]>;
            getPokemonByName(nameOrId: string | number): Promise<PokeAPI.PokemonNamedList>;
            getPokemonByName(nameOrIds: Array<string | number>): Promise<PokeAPI.PokemonNamedList[]>;
            getPokemonColorByName(nameOrId: string | number): Promise<PokeAPI.PokemonColorNamedList>;
            getPokemonColorByName(nameOrIds: Array<string | number>): Promise<PokeAPI.PokemonColorNamedList[]>;
            getPokemonFormByName(nameOrId: string | number): Promise<PokeAPI.PokemonFormNamedList>;
            getPokemonFormByName(nameOrIds: Array<string | number>): Promise<PokeAPI.PokemonFormNamedList[]>;
            getPokemonHabitatByName(nameOrId: string | number): Promise<PokeAPI.PokemonHabitatNamedList>;
            getPokemonHabitatByName(nameOrIds: Array<string | number>): Promise<PokeAPI.PokemonHabitatNamedList[]>;
            getPokemonShapeByName(nameOrId: string | number): Promise<PokeAPI.PokemonShapeNamedList>;
            getPokemonShapeByName(nameOrIds: Array<string | number>): Promise<PokeAPI.PokemonShapeNamedList[]>;
            getPokemonSpeciesByName(nameOrId: string | number): Promise<PokeAPI.PokemonSpeciesNamedList>;
            getPokemonSpeciesByName(nameOrIds: Array<string | number>): Promise<PokeAPI.PokemonSpeciesNamedList[]>;
            getStatByName(nameOrId: string | number): Promise<PokeAPI.StatNamedList>;
            getStatByName(nameOrIds: Array<string | number>): Promise<PokeAPI.StatNamedList[]>;
            getTypeByName(nameOrId: string | number): Promise<PokeAPI.TypeNamedList>;
            getTypeByName(nameOrIds: Array<string | number>): Promise<PokeAPI.TypeNamedList[]>;
            getLanguageByName(nameOrId: string | number): Promise<PokeAPI.LanguageNamedList>;
            getLanguageByName(nameOrIds: Array<string | number>): Promise<PokeAPI.LanguageNamedList[]>;
            getEndpointsList(): EndpointsList;
            getBerriesList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getBerriesFirmnesssList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getBerriesFlavorsList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getContestTypesList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getContestEffectsList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedApiResourceList>;
            getSuperContestEffectsList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedApiResourceList>;
            getEncounterMethodsList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getEncounterConditionsList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getEncounterConditionValuesList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getEvolutionChainsList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedApiResourceList>;
            getEvolutionTriggersList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getGenerationsList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getPokedexsList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getVersionsList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getVersionGroupsList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getItemsList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getItemAttributesList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getItemCategoriesList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getItemFlingEffectsList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getItemPocketsList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getMachinesList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedApiResourceList>;
            getMovesList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getMoveAilmentsList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getMoveBattleStylesList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getMoveCategoriesList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getMoveDamageClassesList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getMoveLearnMethodsList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getMoveTargetsList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getLocationsList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getLocationAreasList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getPalParkAreasList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getRegionsList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getAbilitiesList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getCharacteristicsList(interval?: RootEndPointInterval): Promise<PokeAPI.NamedApiResourceList>;
            getEggGroupsList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getGendersList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getGrowthRatesList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getNaturesList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getPokeathlonStatsList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getPokemonsList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getPokemonColorsList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getPokemonFormsList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getPokemonHabitatsList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getPokemonShapesList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getPokemonSpeciesList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getStatsList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getTypesList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
            getLanguagesList(interval?: RootEndPointInterval): Promise<PokeAPI.ApiResourceList>;
        }
}

    export = PokeAPI;
}
