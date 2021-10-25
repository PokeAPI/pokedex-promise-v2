import assert from 'assert';
import { Berry } from 'pokedex-promise-v2';

import Pokedex from '../src/index.js';

const P = new Pokedex({
  protocol: 'https',
  hostName: 'pokeapi.co',
  versionPath: '/api/v2/',
});

(async () => {
  try {
    const berry = await P.getBerryByName(1) as Berry;
    assert.equal(berry.name, 'cheri');
    // process.exit(0);
  } catch (error) {
    console.log(error);
    // process.exit(1);
  }
})();
