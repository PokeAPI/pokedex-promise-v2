const assert = require('assert');

var Pokedex = require("../src/index.js");

P = new Pokedex({
    protocol: 'https',
    hostName: 'pokeapi.co',
    versionPath: '/api/v2/'
});

(async () => {
    try {
        berry = await P.getBerryByName(1)
        assert.equal(berry.name, 'cheri');
        //process.exit(0);
    } catch (error) {
        console.log(error)
        //process.exit(1);
    }
})()