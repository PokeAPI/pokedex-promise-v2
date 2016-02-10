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

Use **getBerryByName** to return data about a specific berry. **NOTE**: You can also pass in an integer to get the berry by ID.
```js
  P.getBerryByName
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```
