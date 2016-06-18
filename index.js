const rp = require('request-promise');
const cache = require('memory-cache');

const CACHE_LIMIT = 1000000 * 1000 //11 days
const pokeUrl = 'http://pokeapi.co';

getJSON = function(url) {
  const cachedResult = cache.get(url);
  if (cachedResult !== null) {
    return cachedResult;
  } else {
    const options = {
      url: url,
      json: true,
    };
    return rp.get(options)
      .catch(function(error) {
        throw error;
      })
      .then(function(response) {
        if (response.statusCode !== undefined && response.statusCode !== 200) {
          throw response;
        }
        cache.put(url, response, CACHE_LIMIT);
        return response;
      });
  }
};

const Pokedex = (function() {
  function Pokedex() {}

  Pokedex.prototype.getBerryByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/berry/' + name);
  };

  Pokedex.prototype.getBerryFirmnessByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/berry-firmness/' + name);
  };

  Pokedex.prototype.getBerryFlavorByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/berry-flavor/' + name);
  };

  Pokedex.prototype.getContestTypeByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/contest-type/' + name);
  };

  Pokedex.prototype.getContestEffectById = function(id) {
    return getJSON(pokeUrl + '/api/v2/contest-effect/' + id);
  };

  Pokedex.prototype.getSuperContestEffectById = function(id) {
    return getJSON(pokeUrl + '/api/v2/super-contest-effect/' + id);
  };

  Pokedex.prototype.getEncounterMethodByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/encounter-method/' + name);
  };

  Pokedex.prototype.getEncounterConditionByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/encounter-condition/' + name);
  };

  Pokedex.prototype.getEncounterConditionValueByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/encounter-condition-value/' + name);
  };

  Pokedex.prototype.getEvolutionChainById = function(id) {
    return getJSON(pokeUrl + '/api/v2/evolution-chain/' + id);
  };

  Pokedex.prototype.getEvolutionTriggerByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/evolution-trigger/' + name);
  };

  Pokedex.prototype.getGenerationByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/generation/' + name);
  };

  Pokedex.prototype.getPokedexByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/pokedex/' + name);
  };

  Pokedex.prototype.getVersionByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/version/' + name);
  };

  Pokedex.prototype.getVersionGroupByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/version-group/' + name);
  };

  Pokedex.prototype.getItemByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/item/' + name);
  };

  Pokedex.prototype.getItemAttributeByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/item-attribute/' + name);
  };

  Pokedex.prototype.getItemCategoryByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/item-category/' + name);
  };

  Pokedex.prototype.getItemFlingEffectByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/item-fling-effect/' + name);
  };

  Pokedex.prototype.getItemPocketByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/item-pocket/' + name);
  };

  Pokedex.prototype.getMoveByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/move/' + name);
  };

  Pokedex.prototype.getMoveAilmentByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/move-ailment/' + name);
  };

  Pokedex.prototype.getMoveBattleStyleByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/move-battle-style/' + name);
  };

  Pokedex.prototype.getMoveCategoryByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/move-category/' + name);
  };

  Pokedex.prototype.getMoveDamageClassByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/move-damage-class/' + name);
  };

  Pokedex.prototype.getMoveLearnMethodByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/move-learn-method/' + name);
  };

  Pokedex.prototype.getMoveTargetByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/move-target/' + name);
  };

  Pokedex.prototype.getLocationByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/location/' + name);
  };

  Pokedex.prototype.getLocationAreaByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/location-area/' + name);
  };

  Pokedex.prototype.getPalParkAreaByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/pal-park-area/' + name);
  };

  Pokedex.prototype.getRegionByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/region/' + name);
  };

  Pokedex.prototype.getAbilityByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/ability/' + name);
  };

  Pokedex.prototype.getCharacteristicById = function(id) {
    return getJSON(pokeUrl + '/api/v2/characteristic/' + id);
  };

  Pokedex.prototype.getEggGroupByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/egg-group/' + name);
  };

  Pokedex.prototype.getGenderByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/gender/' + name);
  };

  Pokedex.prototype.getGrowthRateByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/growth-rate/' + name);
  };

  Pokedex.prototype.getNatureByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/nature/' + name);
  };

  Pokedex.prototype.getPokeathlonStatByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/pokeathlon-stat/' + name);
  };

  Pokedex.prototype.getPokemonByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/pokemon/' + name);
  };

  Pokedex.prototype.getPokemonColorByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/pokemon-color/' + name);
  };

  Pokedex.prototype.getPokemonFormByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/pokemon-form/' + name);
  };

  Pokedex.prototype.getPokemonHabitatByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/pokemon-habitat/' + name);
  };

  Pokedex.prototype.getPokemonShapeByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/pokemon-shape/' + name);
  };

  Pokedex.prototype.getPokemonSpeciesByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/pokemon-species/' + name);
  };

  Pokedex.prototype.getStatByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/stat/' + name);
  };

  Pokedex.prototype.getTypeByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/type/' + name);
  };

  Pokedex.prototype.getLanguageByName = function(name) {
    return getJSON(pokeUrl + '/api/v2/language/' + name);
  };

  return Pokedex;
})();

module.exports = Pokedex;
