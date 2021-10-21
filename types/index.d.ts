/* tslint:disable */
/** Execute `npm run gentypes` to regenerate **/
class PokeAPI {
    resource(path: string): Promise<unknown>;
    resource(paths: string[]): Promise<unknown[]>;
    getBerryByName(nameOrId: string | number): Promise<Berry>;
    getBerryByName(nameOrIds: Array<string | number>): Promise<Berry[]>;
    getBerryFirmnessByName(nameOrId: string | number): Promise<BerryFirmness>;
    getBerryFirmnessByName(nameOrIds: Array<string | number>): Promise<BerryFirmness[]>;
    getBerryFlavorByName(nameOrId: string | number): Promise<BerryFlavor>;
    getBerryFlavorByName(nameOrIds: Array<string | number>): Promise<BerryFlavor[]>;
    getContestTypeByName(nameOrId: string | number): Promise<ContestType>;
    getContestTypeByName(nameOrIds: Array<string | number>): Promise<ContestType[]>;
    getContestEffectById(id: number): Promise<ContestEffect>;
    getContestEffectById(ids: number[]): Promise<ContestEffect[]>;
    getSuperContestEffectById(id: number): Promise<SuperContestEffect>;
    getSuperContestEffectById(ids: number[]): Promise<SuperContestEffect[]>;
    getEncounterMethodByName(nameOrId: string | number): Promise<EncounterMethod>;
    getEncounterMethodByName(nameOrIds: Array<string | number>): Promise<EncounterMethod[]>;
    getEncounterConditionByName(nameOrId: string | number): Promise<EncounterCondition>;
    getEncounterConditionByName(nameOrIds: Array<string | number>): Promise<EncounterCondition[]>;
    getEncounterConditionValueByName(nameOrId: string | number): Promise<EncounterConditionValue>;
    getEncounterConditionValueByName(nameOrIds: Array<string | number>): Promise<EncounterConditionValue[]>;
    getEvolutionChainById(id: number): Promise<EvolutionChain>;
    getEvolutionChainById(ids: number[]): Promise<EvolutionChain[]>;
    getEvolutionTriggerByName(nameOrId: string | number): Promise<EvolutionTrigger>;
    getEvolutionTriggerByName(nameOrIds: Array<string | number>): Promise<EvolutionTrigger[]>;
    getGenerationByName(nameOrId: string | number): Promise<Generation>;
    getGenerationByName(nameOrIds: Array<string | number>): Promise<Generation[]>;
    getPokedexByName(nameOrId: string | number): Promise<Pokedex>;
    getPokedexByName(nameOrIds: Array<string | number>): Promise<Pokedex[]>;
    getVersionByName(nameOrId: string | number): Promise<Version>;
    getVersionByName(nameOrIds: Array<string | number>): Promise<Version[]>;
    getVersionGroupByName(nameOrId: string | number): Promise<VersionGroup>;
    getVersionGroupByName(nameOrIds: Array<string | number>): Promise<VersionGroup[]>;
    getItemByName(nameOrId: string | number): Promise<Item>;
    getItemByName(nameOrIds: Array<string | number>): Promise<Item[]>;
    getItemAttributeByName(nameOrId: string | number): Promise<ItemAttribute>;
    getItemAttributeByName(nameOrIds: Array<string | number>): Promise<ItemAttribute[]>;
    getItemCategoryByName(nameOrId: string | number): Promise<ItemCategory>;
    getItemCategoryByName(nameOrIds: Array<string | number>): Promise<ItemCategory[]>;
    getItemFlingEffectByName(nameOrId: string | number): Promise<ItemFlingEffect>;
    getItemFlingEffectByName(nameOrIds: Array<string | number>): Promise<ItemFlingEffect[]>;
    getItemPocketByName(nameOrId: string | number): Promise<ItemPocket>;
    getItemPocketByName(nameOrIds: Array<string | number>): Promise<ItemPocket[]>;
    getMachineById(id: number): Promise<Machine>;
    getMachineById(ids: number[]): Promise<Machine[]>;
    getMoveByName(nameOrId: string | number): Promise<Move>;
    getMoveByName(nameOrIds: Array<string | number>): Promise<Move[]>;
    getMoveAilmentByName(nameOrId: string | number): Promise<MoveAilment>;
    getMoveAilmentByName(nameOrIds: Array<string | number>): Promise<MoveAilment[]>;
    getMoveBattleStyleByName(nameOrId: string | number): Promise<MoveBattleStyle>;
    getMoveBattleStyleByName(nameOrIds: Array<string | number>): Promise<MoveBattleStyle[]>;
    getMoveCategoryByName(nameOrId: string | number): Promise<MoveCategory>;
    getMoveCategoryByName(nameOrIds: Array<string | number>): Promise<MoveCategory[]>;
    getMoveDamageClassByName(nameOrId: string | number): Promise<MoveDamageClass>;
    getMoveDamageClassByName(nameOrIds: Array<string | number>): Promise<MoveDamageClass[]>;
    getMoveLearnMethodByName(nameOrId: string | number): Promise<MoveLearnMethod>;
    getMoveLearnMethodByName(nameOrIds: Array<string | number>): Promise<MoveLearnMethod[]>;
    getMoveTargetByName(nameOrId: string | number): Promise<MoveTarget>;
    getMoveTargetByName(nameOrIds: Array<string | number>): Promise<MoveTarget[]>;
    getLocationByName(nameOrId: string | number): Promise<Location>;
    getLocationByName(nameOrIds: Array<string | number>): Promise<Location[]>;
    getLocationAreaByName(nameOrId: string | number): Promise<LocationArea>;
    getLocationAreaByName(nameOrIds: Array<string | number>): Promise<LocationArea[]>;
    getPalParkAreaByName(nameOrId: string | number): Promise<PalParkArea>;
    getPalParkAreaByName(nameOrIds: Array<string | number>): Promise<PalParkArea[]>;
    getRegionByName(nameOrId: string | number): Promise<Region>;
    getRegionByName(nameOrIds: Array<string | number>): Promise<Region[]>;
    getAbilityByName(nameOrId: string | number): Promise<Ability>;
    getAbilityByName(nameOrIds: Array<string | number>): Promise<Ability[]>;
    getCharacteristicById(id: number): Promise<Characteristic>;
    getCharacteristicById(ids: number[]): Promise<Characteristic[]>;
    getEggGroupByName(nameOrId: string | number): Promise<EggGroup>;
    getEggGroupByName(nameOrIds: Array<string | number>): Promise<EggGroup[]>;
    getGenderByName(nameOrId: string | number): Promise<Gender>;
    getGenderByName(nameOrIds: Array<string | number>): Promise<Gender[]>;
    getGrowthRateByName(nameOrId: string | number): Promise<GrowthRate>;
    getGrowthRateByName(nameOrIds: Array<string | number>): Promise<GrowthRate[]>;
    getNatureByName(nameOrId: string | number): Promise<Nature>;
    getNatureByName(nameOrIds: Array<string | number>): Promise<Nature[]>;
    getPokeathlonStatByName(nameOrId: string | number): Promise<PokeathlonStat>;
    getPokeathlonStatByName(nameOrIds: Array<string | number>): Promise<PokeathlonStat[]>;
    getPokemonByName(nameOrId: string | number): Promise<Pokemon>;
    getPokemonByName(nameOrIds: Array<string | number>): Promise<Pokemon[]>;
    getPokemonColorByName(nameOrId: string | number): Promise<PokemonColor>;
    getPokemonColorByName(nameOrIds: Array<string | number>): Promise<PokemonColor[]>;
    getPokemonFormByName(nameOrId: string | number): Promise<PokemonForm>;
    getPokemonFormByName(nameOrIds: Array<string | number>): Promise<PokemonForm[]>;
    getPokemonHabitatByName(nameOrId: string | number): Promise<PokemonHabitat>;
    getPokemonHabitatByName(nameOrIds: Array<string | number>): Promise<PokemonHabitat[]>;
    getPokemonShapeByName(nameOrId: string | number): Promise<PokemonShape>;
    getPokemonShapeByName(nameOrIds: Array<string | number>): Promise<PokemonShape[]>;
    getPokemonSpeciesByName(nameOrId: string | number): Promise<PokemonSpecies>;
    getPokemonSpeciesByName(nameOrIds: Array<string | number>): Promise<PokemonSpecies[]>;
    getStatByName(nameOrId: string | number): Promise<Stat>;
    getStatByName(nameOrIds: Array<string | number>): Promise<Stat[]>;
    getTypeByName(nameOrId: string | number): Promise<Type>;
    getTypeByName(nameOrIds: Array<string | number>): Promise<Type[]>;
    getLanguageByName(nameOrId: string | number): Promise<Language>;
    getLanguageByName(nameOrIds: Array<string | number>): Promise<Language[]>;
    getEndpointsList(): Index;
    getBerriesList(interval?: RootEndPointInterval): Promise<ApiResourceList<Berry>>;
    getBerriesFirmnesssList(interval?: RootEndPointInterval): Promise<ApiResourceList<BerryFirmness>>;
    getBerriesFlavorsList(interval?: RootEndPointInterval): Promise<ApiResourceList<BerryFlavor>>;
    getContestTypesList(interval?: RootEndPointInterval): Promise<ApiResourceList<ContestType>>;
    getContestEffectsList(interval?: RootEndPointInterval): Promise<ApiResourceList<ContestEffect>>;
    getSuperContestEffectsList(interval?: RootEndPointInterval): Promise<ApiResourceList<SuperContestEffect>>;
    getEncounterMethodsList(interval?: RootEndPointInterval): Promise<ApiResourceList<EncounterMethod>>;
    getEncounterConditionsList(interval?: RootEndPointInterval): Promise<ApiResourceList<EncounterCondition>>;
    getEncounterConditionValuesList(interval?: RootEndPointInterval): Promise<ApiResourceList<EncounterConditionValue>>;
    getEvolutionChainsList(interval?: RootEndPointInterval): Promise<ApiResourceList<EvolutionChain>>;
    getEvolutionTriggersList(interval?: RootEndPointInterval): Promise<ApiResourceList<EvolutionTrigger>>;
    getGenerationsList(interval?: RootEndPointInterval): Promise<ApiResourceList<Generation>>;
    getPokedexsList(interval?: RootEndPointInterval): Promise<ApiResourceList<Pokedex>>;
    getVersionsList(interval?: RootEndPointInterval): Promise<ApiResourceList<Version>>;
    getVersionGroupsList(interval?: RootEndPointInterval): Promise<ApiResourceList<VersionGroup>>;
    getItemsList(interval?: RootEndPointInterval): Promise<ApiResourceList<Item>>;
    getItemAttributesList(interval?: RootEndPointInterval): Promise<ApiResourceList<ItemAttribute>>;
    getItemCategoriesList(interval?: RootEndPointInterval): Promise<ApiResourceList<ItemCategory>>;
    getItemFlingEffectsList(interval?: RootEndPointInterval): Promise<ApiResourceList<ItemFlingEffect>>;
    getItemPocketsList(interval?: RootEndPointInterval): Promise<ApiResourceList<ItemPocket>>;
    getMachinesList(interval?: RootEndPointInterval): Promise<ApiResourceList<Machine>>;
    getMovesList(interval?: RootEndPointInterval): Promise<ApiResourceList<Move>>;
    getMoveAilmentsList(interval?: RootEndPointInterval): Promise<ApiResourceList<MoveAilment>>;
    getMoveBattleStylesList(interval?: RootEndPointInterval): Promise<ApiResourceList<MoveBattleStyle>>;
    getMoveCategoriesList(interval?: RootEndPointInterval): Promise<ApiResourceList<MoveCategory>>;
    getMoveDamageClassesList(interval?: RootEndPointInterval): Promise<ApiResourceList<MoveDamageClass>>;
    getMoveLearnMethodsList(interval?: RootEndPointInterval): Promise<ApiResourceList<MoveLearnMethod>>;
    getMoveTargetsList(interval?: RootEndPointInterval): Promise<ApiResourceList<MoveTarget>>;
    getLocationsList(interval?: RootEndPointInterval): Promise<ApiResourceList<Location>>;
    getLocationAreasList(interval?: RootEndPointInterval): Promise<ApiResourceList<LocationArea>>;
    getPalParkAreasList(interval?: RootEndPointInterval): Promise<ApiResourceList<PalParkArea>>;
    getRegionsList(interval?: RootEndPointInterval): Promise<ApiResourceList<Region>>;
    getAbilitiesList(interval?: RootEndPointInterval): Promise<ApiResourceList<Ability>>;
    getCharacteristicsList(interval?: RootEndPointInterval): Promise<ApiResourceList<Characteristic>>;
    getEggGroupsList(interval?: RootEndPointInterval): Promise<ApiResourceList<EggGroup>>;
    getGendersList(interval?: RootEndPointInterval): Promise<ApiResourceList<Gender>>;
    getGrowthRatesList(interval?: RootEndPointInterval): Promise<ApiResourceList<GrowthRate>>;
    getNaturesList(interval?: RootEndPointInterval): Promise<ApiResourceList<Nature>>;
    getPokeathlonStatsList(interval?: RootEndPointInterval): Promise<ApiResourceList<PokeathlonStat>>;
    getPokemonsList(interval?: RootEndPointInterval): Promise<ApiResourceList<Pokemon>>;
    getPokemonColorsList(interval?: RootEndPointInterval): Promise<ApiResourceList<PokemonColor>>;
    getPokemonFormsList(interval?: RootEndPointInterval): Promise<ApiResourceList<PokemonForm>>;
    getPokemonHabitatsList(interval?: RootEndPointInterval): Promise<ApiResourceList<PokemonHabitat>>;
    getPokemonShapesList(interval?: RootEndPointInterval): Promise<ApiResourceList<PokemonShape>>;
    getPokemonSpeciesList(interval?: RootEndPointInterval): Promise<ApiResourceList<PokemonSpecies>>;
    getStatsList(interval?: RootEndPointInterval): Promise<ApiResourceList<Stat>>;
    getTypesList(interval?: RootEndPointInterval): Promise<ApiResourceList<Type>>;
    getLanguagesList(interval?: RootEndPointInterval): Promise<ApiResourceList<Language>>;
}

export = PokeAPI;

 interface Ability {
  effect_changes: {
    effect_entries: {
      effect: string;
      language: {
        name: string;
        url: string;
        
      };
      
    }[];
    version_group: {
      name: string;
      url: string;
      
    };
    
  }[];
  effect_entries: {
    effect: string;
    language: {
      name: string;
      url: string;
      
    };
    short_effect: string;
    
  }[];
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
      
    };
    version_group: {
      name: string;
      url: string;
      
    };
    
  }[];
  generation: {
    name: string;
    url: string;
    
  };
  id: number;
  is_main_series: boolean;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  pokemon: {
    is_hidden: boolean;
    pokemon: {
      name: string;
      url: string;
      
    };
    slot: number;
    
  }[];
  
}

 interface ApiResourceList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    url: string;
    
  }[];
  
}

 interface Berry {
  firmness: {
    name: string;
    url: string;
    
  };
  flavors: {
    flavor: {
      name: string;
      url: string;
      
    };
    potency: number;
    
  }[];
  growth_time: number;
  id: number;
  item: {
    name: string;
    url: string;
    
  };
  max_harvest: number;
  name: string;
  natural_gift_power: number;
  natural_gift_type: {
    name: string;
    url: string;
    
  };
  size: number;
  smoothness: number;
  soil_dryness: number;
  
}

 interface BerryFirmness {
  berries: {
    name: string;
    url: string;
    
  }[];
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  
}

 interface BerryFlavor {
  berries: {
    berry: {
      name: string;
      url: string;
      
    };
    potency: number;
    
  }[];
  contest_type: {
    name: string;
    url: string;
    
  };
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  
}

 interface Characteristic {
  descriptions: {
    description: string;
    language: {
      name: string;
      url: string;
      
    };
    
  }[];
  gene_modulo: number;
  highest_stat: {
    name: string;
    url: string;
    
  };
  id: number;
  possible_values: number[];
  
}

 interface ContestEffect {
  appeal: number;
  effect_entries: {
    effect: string;
    language: {
      name: string;
      url: string;
      
    };
    
  }[];
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
      
    };
    
  }[];
  id: number;
  jam: number;
  
}

 interface ContestType {
  berry_flavor: {
    name: string;
    url: string;
    
  };
  id: number;
  name: string;
  names: {
    color: string;
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  
}

 interface EggGroup {
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  pokemon_species: {
    name: string;
    url: string;
    
  }[];
  
}

 interface EncounterCondition {
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  values: {
    name: string;
    url: string;
    
  }[];
  
}

 interface EncounterConditionValue {
  condition: {
    name: string;
    url: string;
    
  };
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  
}

 interface EncounterMethod {
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  order: number;
  
}

 interface EvolutionTrigger {
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  pokemon_species: {
    name: string;
    url: string;
    
  }[];
  
}

 interface EvolutionChain {
  baby_trigger_item: null | {
    name: string;
    url: string;
    
  };
  chain: {
    evolution_details: unknown[];
    evolves_to: {
      evolution_details: {
        gender: number | null;
        held_item: null | {
          name: string;
          url: string;
          
        };
        item: null | {
          name: string;
          url: string;
          
        };
        known_move: null | {
          name: string;
          url: string;
          
        };
        known_move_type: null | {
          name: string;
          url: string;
          
        };
        location: null | {
          name: string;
          url: string;
          
        };
        min_affection: number | null;
        min_beauty: number | null;
        min_happiness: number | null;
        min_level: number | null;
        needs_overworld_rain: boolean;
        party_species: null | {
          name: string;
          url: string;
          
        };
        party_type: null | {
          name: string;
          url: string;
          
        };
        relative_physical_stats: number | null;
        time_of_day: string;
        trade_species: null | {
          name: string;
          url: string;
          
        };
        trigger: {
          name: string;
          url: string;
          
        };
        turn_upside_down: boolean;
        
      }[];
      evolves_to: {
        evolution_details: {
          gender: number | null;
          held_item: null | {
            name: string;
            url: string;
            
          };
          item: null | {
            name: string;
            url: string;
            
          };
          known_move: null | {
            name: string;
            url: string;
            
          };
          known_move_type: null;
          location: null | {
            name: string;
            url: string;
            
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
            
          };
          turn_upside_down: boolean;
          
        }[];
        evolves_to: unknown[];
        is_baby: boolean;
        species: {
          name: string;
          url: string;
          
        };
        
      }[];
      is_baby: boolean;
      species: {
        name: string;
        url: string;
        
      };
      
    }[];
    is_baby: boolean;
    species: {
      name: string;
      url: string;
      
    };
    
  };
  id: number;
  
}

 interface Gender {
  id: number;
  name: string;
  pokemon_species_details: {
    pokemon_species: {
      name: string;
      url: string;
      
    };
    rate: number;
    
  }[];
  required_for_evolution: {
    name: string;
    url: string;
    
  }[];
  
}

 interface Generation {
  abilities: {
    name: string;
    url: string;
    
  }[];
  id: number;
  main_region: {
    name: string;
    url: string;
    
  };
  moves: {
    name: string;
    url: string;
    
  }[];
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  pokemon_species: {
    name: string;
    url: string;
    
  }[];
  types: {
    name: string;
    url: string;
    
  }[];
  version_groups: {
    name: string;
    url: string;
    
  }[];
  
}

 interface GrowthRate {
  descriptions: {
    description: string;
    language: {
      name: string;
      url: string;
      
    };
    
  }[];
  formula: string;
  id: number;
  levels: {
    experience: number;
    level: number;
    
  }[];
  name: string;
  pokemon_species: {
    name: string;
    url: string;
    
  }[];
  
}

 interface ItemAttribute {
  descriptions: {
    description: string;
    language: {
      name: string;
      url: string;
      
    };
    
  }[];
  id: number;
  items: {
    name: string;
    url: string;
    
  }[];
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  
}

 interface ItemCategory {
  id: number;
  items: {
    name: string;
    url: string;
    
  }[];
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  pocket: {
    name: string;
    url: string;
    
  };
  
}

 interface ItemFlingEffect {
  effect_entries: {
    effect: string;
    language: {
      name: string;
      url: string;
      
    };
    
  }[];
  id: number;
  items: {
    name: string;
    url: string;
    
  }[];
  name: string;
  
}

 interface ItemPocket {
  categories: {
    name: string;
    url: string;
    
  }[];
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  
}

 interface Item {
  attributes: {
    name: string;
    url: string;
    
  }[];
  baby_trigger_for: null | {
    url: string;
    
  };
  category: {
    name: string;
    url: string;
    
  };
  cost: number;
  effect_entries: {
    effect: string;
    language: {
      name: string;
      url: string;
      
    };
    short_effect: string;
    
  }[];
  flavor_text_entries: {
    language: {
      name: string;
      url: string;
      
    };
    text: string;
    version_group: {
      name: string;
      url: string;
      
    };
    
  }[];
  fling_effect: null | {
    name: string;
    url: string;
    
  };
  fling_power: number | null;
  game_indices: {
    game_index: number;
    generation: {
      name: string;
      url: string;
      
    };
    
  }[];
  held_by_pokemon: {
    pokemon: {
      name: string;
      url: string;
      
    };
    version_details: {
      rarity: number;
      version: {
        name: string;
        url: string;
        
      };
      
    }[];
    
  }[];
  id: number;
  machines: {
    machine: {
      url: string;
      
    };
    version_group: {
      name: string;
      url: string;
      
    };
    
  }[];
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  sprites: {
    default: string;
    
  };
  
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
      
    };
    name: string;
    
  }[];
  official: boolean;
  
}

 interface Location {
  areas: {
    name: string;
    url: string;
    
  }[];
  game_indices: {
    game_index: number;
    generation: {
      name: string;
      url: string;
      
    };
    
  }[];
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  region: null | {
    name: string;
    url: string;
    
  };
  
}

 interface LocationArea {
  encounter_method_rates: {
    encounter_method: {
      name: string;
      url: string;
      
    };
    version_details: {
      rate: number;
      version: {
        name: string;
        url: string;
        
      };
      
    }[];
    
  }[];
  game_index: number;
  id: number;
  location: {
    name: string;
    url: string;
    
  };
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  pokemon_encounters: {
    pokemon: {
      name: string;
      url: string;
      
    };
    version_details: {
      encounter_details: {
        chance: number;
        condition_values: {
          name: string;
          url: string;
          
        }[];
        max_level: number;
        method: {
          name: string;
          url: string;
          
        };
        min_level: number;
        
      }[];
      max_chance: number;
      version: {
        name: string;
        url: string;
        
      };
      
    }[];
    
  }[];
  
}

 interface Machine {
  id: number;
  item: {
    name: string;
    url: string;
    
  };
  move: {
    name: string;
    url: string;
    
  };
  version_group: {
    name: string;
    url: string;
    
  };
  
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
            
          }[];
      use_before:
        | null
        | {
            name: string;
            url: string;
            
          }[];
      
    };
    super: {
      use_after:
        | null
        | {
            name: string;
            url: string;
            
          }[];
      use_before:
        | null
        | {
            name: string;
            url: string;
            
          }[];
      
    };
    
  };
  contest_effect: null | {
    url: string;
    
  };
  contest_type: null | {
    name: string;
    url: string;
    
  };
  damage_class: null | {
    name: string;
    url: string;
    
  };
  effect_chance: number | null;
  effect_changes: {
    effect_entries: {
      effect: string;
      language: {
        name: string;
        url: string;
        
      };
      
    }[];
    version_group: {
      name: string;
      url: string;
      
    };
    
  }[];
  effect_entries: {
    effect: string;
    language: {
      name: string;
      url: string;
      
    };
    short_effect: string;
    
  }[];
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
      
    };
    version_group: {
      name: string;
      url: string;
      
    };
    
  }[];
  generation: {
    name: string;
    url: string;
    
  };
  id: number;
  learned_by_pokemon: {
    name: string;
    url: string;
    
  }[];
  machines: {
    machine: {
      url: string;
      
    };
    version_group: {
      name: string;
      url: string;
      
    };
    
  }[];
  meta: null | {
    ailment: {
      name: string;
      url: string;
      
    };
    ailment_chance: number;
    category: {
      name: string;
      url: string;
      
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
    
  };
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  past_values: {
    accuracy: number | null;
    effect_chance: number | null;
    effect_entries: {
      effect: string;
      language: {
        name: string;
        url: string;
        
      };
      short_effect: string;
      
    }[];
    power: number | null;
    pp: number | null;
    type: null | {
      name: string;
      url: string;
      
    };
    version_group: {
      name: string;
      url: string;
      
    };
    
  }[];
  power: number | null;
  pp: number | null;
  priority: number;
  stat_changes: {
    change: number;
    stat: {
      name: string;
      url: string;
      
    };
    
  }[];
  super_contest_effect: null | {
    url: string;
    
  };
  target: {
    name: string;
    url: string;
    
  };
  type: {
    name: string;
    url: string;
    
  };
  
}

 interface MoveAilment {
  id: number;
  moves: {
    name: string;
    url: string;
    
  }[];
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  
}

 interface 1List {
  id: number;
  moves: {
    name: string;
    url: string;
    
  }[];
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  
}

 interface MoveBattleStyle {
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  
}

 interface MoveCategory {
  descriptions: {
    description: string;
    language: {
      name: string;
      url: string;
      
    };
    
  }[];
  id: number;
  moves: {
    name: string;
    url: string;
    
  }[];
  name: string;
  
}

 interface MoveDamageClass {
  descriptions: {
    description: string;
    language: {
      name: string;
      url: string;
      
    };
    
  }[];
  id: number;
  moves: {
    name: string;
    url: string;
    
  }[];
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  
}

 interface MoveLearnMethod {
  descriptions: {
    description: string;
    language: {
      name: string;
      url: string;
      
    };
    
  }[];
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  version_groups: {
    name: string;
    url: string;
    
  }[];
  
}

 interface MoveTarget {
  descriptions: {
    description: string;
    language: {
      name: string;
      url: string;
      
    };
    
  }[];
  id: number;
  moves: {
    name: string;
    url: string;
    
  }[];
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  
}

 interface NamedApiResourceList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface Nature {
  decreased_stat: null | {
    name: string;
    url: string;
    
  };
  hates_flavor: null | {
    name: string;
    url: string;
    
  };
  id: number;
  increased_stat: null | {
    name: string;
    url: string;
    
  };
  likes_flavor: null | {
    name: string;
    url: string;
    
  };
  move_battle_style_preferences: {
    high_hp_preference: number;
    low_hp_preference: number;
    move_battle_style: {
      name: string;
      url: string;
      
    };
    
  }[];
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  pokeathlon_stat_changes: {
    max_change: number;
    pokeathlon_stat: {
      name: string;
      url: string;
      
    };
    
  }[];
  
}

 interface PalParkArea {
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  pokemon_encounters: {
    base_score: number;
    pokemon_species: {
      name: string;
      url: string;
      
    };
    rate: number;
    
  }[];
  
}

 interface PokeathlonStat {
  affecting_natures: {
    decrease: {
      max_change: number;
      nature: {
        name: string;
        url: string;
        
      };
      
    }[];
    increase: {
      max_change: number;
      nature: {
        name: string;
        url: string;
        
      };
      
    }[];
    
  };
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  
}

 interface Pokedex {
  descriptions: {
    description: string;
    language: {
      name: string;
      url: string;
      
    };
    
  }[];
  id: number;
  is_main_series: boolean;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  pokemon_entries: {
    entry_number: number;
    pokemon_species: {
      name: string;
      url: string;
      
    };
    
  }[];
  region: null | {
    name: string;
    url: string;
    
  };
  version_groups: {
    name: string;
    url: string;
    
  }[];
  
}

 type $id = {
  location_area: {
    name: string;
    url: string;
    
  };
  version_details: {
    encounter_details: {
      chance: number;
      condition_values: {
        name: string;
        url: string;
        
      }[];
      max_level: number;
      method: {
        name: string;
        url: string;
        
      };
      min_level: number;
      
    }[];
    max_chance: number;
    version: {
      name: string;
      url: string;
      
    };
    
  }[];
  
}[];

 interface Pokemon {
  abilities: {
    ability: {
      name: string;
      url: string;
      
    };
    is_hidden: boolean;
    slot: number;
    
  }[];
  base_experience: number;
  forms: {
    name: string;
    url: string;
    
  }[];
  game_indices: {
    game_index: number;
    version: {
      name: string;
      url: string;
      
    };
    
  }[];
  height: number;
  held_items: {
    item: {
      name: string;
      url: string;
      
    };
    version_details: {
      rarity: number;
      version: {
        name: string;
        url: string;
        
      };
      
    }[];
    
  }[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: {
    move: {
      name: string;
      url: string;
      
    };
    version_group_details: {
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
        
      };
      version_group: {
        name: string;
        url: string;
        
      };
      
    }[];
    
  }[];
  name: string;
  order: number;
  past_types: {
    generation: {
      name: string;
      url: string;
      
    };
    types: {
      slot: number;
      type: {
        name: string;
        url: string;
        
      };
      
    }[];
    
  }[];
  species: {
    name: string;
    url: string;
    
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
        
      };
      "official-artwork": {
        front_default: null | string;
        
      };
      
    };
    versions: {
      "generation-i": {
        "red-blue": {
          back_default: null | string;
          back_gray: null | string;
          front_default: null | string;
          front_gray: null | string;
          
        };
        yellow: {
          back_default: null | string;
          back_gray: null | string;
          front_default: null | string;
          front_gray: null | string;
          
        };
        
      };
      "generation-ii": {
        crystal: {
          back_default: null | string;
          back_shiny: null | string;
          front_default: null | string;
          front_shiny: null | string;
          
        };
        gold: {
          back_default: null | string;
          back_shiny: null | string;
          front_default: null | string;
          front_shiny: null | string;
          
        };
        silver: {
          back_default: null | string;
          back_shiny: null | string;
          front_default: null | string;
          front_shiny: null | string;
          
        };
        
      };
      "generation-iii": {
        emerald: {
          front_default: null | string;
          front_shiny: null | string;
          
        };
        "firered-leafgreen": {
          back_default: null | string;
          back_shiny: null | string;
          front_default: null | string;
          front_shiny: null | string;
          
        };
        "ruby-sapphire": {
          back_default: null | string;
          back_shiny: null | string;
          front_default: null | string;
          front_shiny: null | string;
          
        };
        
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
          
        };
        
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
            
          };
          back_default: null | string;
          back_female: null | string;
          back_shiny: null | string;
          back_shiny_female: null | string;
          front_default: null | string;
          front_female: null | string;
          front_shiny: null | string;
          front_shiny_female: null | string;
          
        };
        
      };
      "generation-vi": {
        "omegaruby-alphasapphire": {
          front_default: null | string;
          front_female: null | string;
          front_shiny: null | string;
          front_shiny_female: null | string;
          
        };
        "x-y": {
          front_default: null | string;
          front_female: null | string;
          front_shiny: null | string;
          front_shiny_female: null | string;
          
        };
        
      };
      "generation-vii": {
        icons: {
          front_default: null | string;
          front_female: null | string;
          
        };
        "ultra-sun-ultra-moon": {
          front_default: null | string;
          front_female: null | string;
          front_shiny: null | string;
          front_shiny_female: null | string;
          
        };
        
      };
      "generation-viii": {
        icons: {
          front_default: null | string;
          front_female: null | string;
          
        };
        
      };
      
    };
    
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
      
    };
    
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
      
    };
    
  }[];
  weight: number;
  
}

 interface PokemonColor {
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  pokemon_species: {
    name: string;
    url: string;
    
  }[];
  
}

 interface PokemonHabitat {
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  pokemon_species: {
    name: string;
    url: string;
    
  }[];
  
}

 interface PokemonShape {
  awesome_names: {
    awesome_name: string;
    language: {
      name: string;
      url: string;
      
    };
    
  }[];
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  pokemon_species: {
    name: string;
    url: string;
    
  }[];
  
}

 interface PokemonSpecies {
  base_happiness: number;
  capture_rate: number;
  color: {
    name: string;
    url: string;
    
  };
  egg_groups: {
    name: string;
    url: string;
    
  }[];
  evolution_chain: {
    url: string;
    
  };
  evolves_from_species: null | {
    name: string;
    url: string;
    
  };
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
      
    };
    version: {
      name: string;
      url: string;
      
    };
    
  }[];
  form_descriptions: {
    description: string;
    language: {
      name: string;
      url: string;
      
    };
    
  }[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: {
    genus: string;
    language: {
      name: string;
      url: string;
      
    };
    
  }[];
  generation: {
    name: string;
    url: string;
    
  };
  growth_rate: {
    name: string;
    url: string;
    
  };
  habitat: null | {
    name: string;
    url: string;
    
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
      
    };
    name: string;
    
  }[];
  order: number;
  pal_park_encounters: {
    area: {
      name: string;
      url: string;
      
    };
    base_score: number;
    rate: number;
    
  }[];
  pokedex_numbers: {
    entry_number: number;
    pokedex: {
      name: string;
      url: string;
      
    };
    
  }[];
  shape: {
    name: string;
    url: string;
    
  };
  varieties: {
    is_default: boolean;
    pokemon: {
      name: string;
      url: string;
      
    };
    
  }[];
  
}

 interface Region {
  id: number;
  locations: {
    name: string;
    url: string;
    
  }[];
  main_generation: {
    name: string;
    url: string;
    
  };
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  pokedexes: {
    name: string;
    url: string;
    
  }[];
  version_groups: {
    name: string;
    url: string;
    
  }[];
  
}

 interface Stat {
  affecting_moves: {
    decrease: {
      change: number;
      move: {
        name: string;
        url: string;
        
      };
      
    }[];
    increase: {
      change: number;
      move: {
        name: string;
        url: string;
        
      };
      
    }[];
    
  };
  affecting_natures: {
    decrease: {
      name: string;
      url: string;
      
    }[];
    increase: {
      name: string;
      url: string;
      
    }[];
    
  };
  characteristics: {
    url: string;
    
  }[];
  game_index: number;
  id: number;
  is_battle_only: boolean;
  move_damage_class: null | {
    name: string;
    url: string;
    
  };
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  
}

 interface SuperContestEffect {
  appeal: number;
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
      url: string;
      
    };
    
  }[];
  id: number;
  moves: {
    name: string;
    url: string;
    
  }[];
  
}

 interface Type {
  damage_relations: {
    double_damage_from: {
      name: string;
      url: string;
      
    }[];
    double_damage_to: {
      name: string;
      url: string;
      
    }[];
    half_damage_from: {
      name: string;
      url: string;
      
    }[];
    half_damage_to: {
      name: string;
      url: string;
      
    }[];
    no_damage_from: {
      name: string;
      url: string;
      
    }[];
    no_damage_to: {
      name: string;
      url: string;
      
    }[];
    
  };
  game_indices: {
    game_index: number;
    generation: {
      name: string;
      url: string;
      
    };
    
  }[];
  generation: {
    name: string;
    url: string;
    
  };
  id: number;
  move_damage_class: null | {
    name: string;
    url: string;
    
  };
  moves: {
    name: string;
    url: string;
    
  }[];
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  past_damage_relations: {
    damage_relations: {
      double_damage_from: {
        name: string;
        url: string;
        
      }[];
      double_damage_to: {
        name: string;
        url: string;
        
      }[];
      half_damage_from: {
        name: string;
        url: string;
        
      }[];
      half_damage_to: {
        name: string;
        url: string;
        
      }[];
      no_damage_from: {
        name: string;
        url: string;
        
      }[];
      no_damage_to: {
        name: string;
        url: string;
        
      }[];
      
    };
    generation: {
      name: string;
      url: string;
      
    };
    
  }[];
  pokemon: {
    pokemon: {
      name: string;
      url: string;
      
    };
    slot: number;
    
  }[];
  
}

 interface Version {
  id: number;
  name: string;
  names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
  }[];
  version_group: {
    name: string;
    url: string;
    
  };
  
}

 interface VersionGroup {
  generation: {
    name: string;
    url: string;
    
  };
  id: number;
  move_learn_methods: {
    name: string;
    url: string;
    
  }[];
  name: string;
  order: number;
  pokedexes: {
    name: string;
    url: string;
    
  }[];
  regions: {
    name: string;
    url: string;
    
  }[];
  versions: {
    name: string;
    url: string;
    
  }[];
  
}

 interface PokemonForm {
  form_name: string;
  form_names: {
    language: {
      name: string;
      url: string;
      
    };
    name: string;
    
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
      
    };
    name: string;
    
  }[];
  order: number;
  pokemon: {
    name: string;
    url: string;
    
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
    
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
      
    };
    
  }[];
  version_group: {
    name: string;
    url: string;
    
  };
  
}

 interface AbilityList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface BerryList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface BerryFirmnessList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface BerryFlavorList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface CharacteristicList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    url: string;
    
  }[];
  
}

 interface ContestEffectList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    url: string;
    
  }[];
  
}

 interface EggGroupList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface ContestTypeList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface EncounterConditionList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface EncounterConditionValueList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface EncounterMethodList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface EvolutionChainList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    url: string;
    
  }[];
  
}

 interface EvolutionTriggerList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface GenderList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface GenerationList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface GrowthRateList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface ItemList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface ItemAttributeList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface ItemCategoryList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface ItemFlingEffectList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface ItemPocketList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface LanguageList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface LocationList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface MachineList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    url: string;
    
  }[];
  
}

 interface LocationAreaList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface MoveList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface MoveAilmentList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface MoveBattleStyleList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface MoveCategoryList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface MoveDamageClassList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface MoveLearnMethodList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface MoveTargetList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface NatureList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface PalParkAreaList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface PokeathlonStatList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface PokedexList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface PokemonList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface PokemonHabitatList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface PokemonShapeList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface PokemonSpeciesList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface RegionList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface StatList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface SuperContestEffectList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    url: string;
    
  }[];
  
}

 interface TypeList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface VersionList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface VersionGroupList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface PokemonFormList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

 interface PokemonColorList {
  count: number;
  next: null | string;
  previous: null | string;
  results: {
    name: string;
    url: string;
    
  }[];
  
}

