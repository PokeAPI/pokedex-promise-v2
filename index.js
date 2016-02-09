var rp = require('request-promise');

var pokeUrl = 'http://pokeapi.co';

getJSON = function(url) {
  var options = {
    url: url,
    json: true,
  };
  return rp.get(options)
    .catch(function(error) {
      return error;
    })
    .then(function(response) {
      return response;
    });
};

var Pokedex = (function() {
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
    return getJSON(pokeUrl + '/api/v2/contest-type/' + id);
  };


  return Pokedex;
})();

module.exports = Pokedex;
