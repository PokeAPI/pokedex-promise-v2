const rp = require('request-promise');
const cache = require('memory-cache');
const async = require('async');

const CACHE_LIMIT = 1000000 * 1000; // 11 days

const pokeUrl = 'http://pokeapi.co';
const versionUrl = '/api/v2/';



getJSON = function (url, cb) {

  // retrive possible content from volatile memory
  const cachedResult = cache.get(url);
  if (cachedResult !== null) {
    return cachedResult;
  } else {
    const options = {
      url: url,
      json: true,
    };
    return rp.get(options)
      .catch(function (error) {
        throw error;
      })
      .then(function (response) {
        if (response.statusCode !== undefined && response.statusCode !== 200) {
          throw response;
        }

        //cache the object to volatile memory
        cache.put(url, response, CACHE_LIMIT);

        // if a callback is present, call it
        if (cb) {
          cb(response);
        } else {
          return response;
        }
      });
  }
};

const endpoints = [
  ['getBerryByName', 'berry'], 
  ['getBerryFirmnessByName', 'berry-firmness'], 
  ['getBerryFlavorByName', 'berry-flavor'], 
  ['getContestTypeByName', 'contest-type'], 
  ['getContestEffectById', 'contest-effect'], 
  ['getSuperContestEffectById', 'super-contest-effect'], 
  ['getEncounterMethodByName', 'encounter-method'], 
  ['getEncounterConditionByName', 'encounter-condition'], 
  ['getEncounterConditionValueByName', 'encounter-condition-value'], 
  ['getEvolutionChainById', 'evolution-chain'], 
  ['getEvolutionTriggerByName', 'evolution-trigger'], 
  ['getGenerationByName', 'generation'], 
  ['getPokedexByName', 'pokedex'], 
  ['getVersionByName', 'version'], 
  ['getVersionGroupByName', 'version-group'], 
  ['getItemByName', 'item'], 
  ['getItemAttributeByName', 'item-attribute'], 
  ['getItemCategoryByName', 'item-category'], 
  ['getItemFlingEffectByName', 'item-fling-effect'], 
  ['getItemPocketByName', 'item-pocket'], 
  ['getMoveByName', 'move'], 
  ['getMoveAilmentByName', 'move-ailment'], 
  ['getMoveBattleStyleByName', 'move-battle-style'], 
  ['getMoveCategoryByName', 'move-category'], 
  ['getMoveDamageClassByName', 'move-damage-class'], 
  ['getMoveLearnMethodByName', 'move-learn-method'], 
  ['getMoveTargetByName', 'move-target'], 
  ['getLocationByName', 'location'], 
  ['getLocationAreaByName', 'location-area'], 
  ['getPalParkAreaByName', 'pal-park-area'], 
  ['getRegionByName', 'region'], 
  ['getAbilityByName', 'ability'], 
  ['getCharacteristicById', 'characteristic'], 
  ['getEggGroupByName', 'egg-group'], 
  ['getGenderByName', 'gender'], 
  ['getGrowthRateByName', 'growth-rate'], 
  ['getNatureByName', 'nature'], 
  ['getPokeathlonStatByName', 'pokeathlon-stat'], 
  ['getPokemonByName', 'pokemon'], 
  ['getPokemonColorByName', 'pokemon-color'], 
  ['getPokemonFormByName', 'pokemon-form'], 
  ['getPokemonHabitatByName', 'pokemon-habitat'], 
  ['getPokemonShapeByName', 'pokemon-shape'], 
  ['getPokemonSpeciesByName', 'pokemon-species'], 
  ['getStatByName', 'stat'], 
  ['getTypeByName', 'type'], 
  ['getLanguageByName', 'language']
];

const Pokedex = (function() {
  function Pokedex(){}

  // add to Pokedex.prototype all our endpoint functions
  endpoints.forEach(function (endpoint) {
    Pokedex.prototype[endpoint[0]] = function (input) { 
      if (input) {

        // if the user has submitted a Name or an Id, return the Json promise
        if (typeof input === 'number' || typeof input === 'string') {
          return getJSON(pokeUrl +  versionUrl + endpoint[1] + '/' + input + '/'); 
        }

        // if the user has submitted an Array
        // return a new promise which will resolve when all getJSON calls are ended
        else if (typeof input === 'object') {
          var toReturn = []
          return new Promise(function (resolve, reject){

            // fetch data asynchronously to be faster
            async.forEachOf(input, function (name){

              //get current input data and then try to resolve
              getJSON(pokeUrl +  versionUrl + endpoint[1] + '/' + name + '/', function (response){
                toReturn.push(response);
                if(toReturn.length === input.length){
                  resolve(toReturn);
                }
              });
            })
          });
        }
      }
    }
  });
  return Pokedex;
})();

module.exports = Pokedex;
