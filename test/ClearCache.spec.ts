import assert from 'assert';

import Pokedex from '../src/index.js';

const P = new Pokedex();

(async () => {
  try {
    let { name } = await P.getPokemonByName('eevee');
    assert.strictEqual(name, 'eevee');

    assert.strictEqual(P.cacheSize(), 1);

    P.clearCache();

    assert.strictEqual(P.cacheSize(), 0);

    name = (await P.getPokemonByName('eevee')).name;
    assert.strictEqual(name, 'eevee');

    assert.strictEqual(P.cacheSize(), 1);
  } catch (error) {
    throw new Error(error);
  }
})();
