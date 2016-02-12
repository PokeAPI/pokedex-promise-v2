# pokedex-promise-v2
An easy way to use pokeapi v2 with promises in node.js

## Install

You can install with npm!
```
npm install pokedex-promise-v2
```

## Setup

Import to your project.
```js
var Pokedex = require('pokedex-promise-v2');
```

## Usage

Initialize the constructor.
```js
var P = new Pokedex();
```

**NOTE**: Any function with the designation "ByName" can also be passed an integer ID.

Use **getBerryByName** to return data about a specific berry.
```js
  P.getBerryByName('cheri')
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getBerryFirmnessByName** to return data about the firmness of a specific berry.
```js
  P.getBerryFirmnessByName('very-soft')
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```
