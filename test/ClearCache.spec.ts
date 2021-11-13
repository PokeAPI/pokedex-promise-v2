import assert from 'assert';
import { Pokemon } from 'pokedex-promise-v2';

import Pokedex from '../src/index.js';

const P = new Pokedex();

(async () => {
  try {
    let { name } = await P.getPokemonByName('eevee') as Pokemon;
    assert.strictEqual(name, 'eevee');

    assert.strictEqual(P.cacheSize(), 1);

    P.clearCache();

    assert.strictEqual(P.cacheSize(), 0);

    name = (await P.getPokemonByName('eevee') as Pokemon).name;
    assert.strictEqual(name, 'eevee');

    assert.strictEqual(P.cacheSize(), 1);
  } catch (error) {
    throw new Error(error);
  }
})();
