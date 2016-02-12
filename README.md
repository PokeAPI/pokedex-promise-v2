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

**NOTE**: Any function with the designation "ByName" can also be passed an integer ID. However, the functions with the designation "ById" can only be passed an integer ID.

### Berries

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

Use **getBerryFlavorByName** to return data about the flavor of a specific berry.
```js
  P.getBerryFirmnessByName('spicy')
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

### Contests

Use **getContestTypeByName** to return data about the effects of moves when used in contests.
```js
  P.getContestTypeByName('cool')
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getContestEffectById** to return data about the effects of moves when used in contests.
```js
  P.getContestTypeByName(1)
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getSuperContestEffectById** to return data about the effects of moves when used in super contests.
```js
  P.getSuperContestTypeById(1)
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getEncounterMethodByName** to return data about the conditions in which a trainer may encounter a pokemon in the wild.
```js
  P.getEncounterMethodByName("walk")
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```
