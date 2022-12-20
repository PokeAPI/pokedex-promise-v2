import assert from 'assert';

import Pokedex from '../src/index.js';

const P = new Pokedex({
  protocol: 'https',
  hostName: 'pokeapi.co',
  versionPath: '/api/v2/',
});

(async () => {
  try {
    const berry = await P.getBerryByName(1);
    assert.equal(berry.name, 'cheri');
  } catch (error) {
    console.log(error);
  }
})();
