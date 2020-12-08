const assert = require('assert');

var Pokedex = require("../src/index");
var P = new Pokedex();

(async () => {
  try {
    let name = (await P.getPokemonByName('eevee')).name;
    assert.strictEqual(name, 'eevee');
  
    assert.strictEqual(P.cacheSize(), 1);
  
    P.clearCache();
  
    assert.strictEqual(P.cacheSize(), 0);
  
    name = (await P.getPokemonByName('eevee')).name;
    assert.strictEqual(name, 'eevee');
  
    assert.strictEqual(P.cacheSize(), 1);
  } catch (error) {
    console.log(error);
  }
})();