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
    // process.exit(0);
  } catch (error) {
    console.log(error);
    // process.exit(1);
  }
})();
