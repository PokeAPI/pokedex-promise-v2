# pokedex-promise-v2 ![Bulbasaur](http://pokeapi.co/media/img/1383571573.78.png)

[![npm version](https://badge.fury.io/js/pokedex-promise-v2.svg)](https://badge.fury.io/js/pokedex-promise-v2)
[![Build Status](https://travis-ci.org/PokeAPI/pokedex-promise-v2.svg?branch=master)](https://travis-ci.org/PokeAPI/pokedex-promise-v2)
[![Package Quality](http://npm.packagequality.com/shield/pokedex-promise-v2.svg)](http://packagequality.com/#?package=pokedex-promise-v2)
[![Ghit.me](https://ghit.me/badge.svg?repo=PokeAPI/pokedex-promise-v2)](https://ghit.me/repo/PokeAPI/pokedex-promise-v2)
[![npm](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](https://github.com/PokeAPI/pokedex-promise-v2/blob/master/LICENSE)

An easy way to use [Pokéapi](https://pokeapi.co/) v2 with promises *(or callbacks as of v3)* in node.js

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Install](#install-)
- [Usage](#usage)
  - [Example requests](#example-requests)
- [Configuration](#configuration)
- [Endpoints](#endpoints)
  - [Berries](#berries)
  - [Contests](#contests)
  - [Encounters](#encounters)
  - [Evolution](#evolution)
  - [Games](#games)
  - [Items](#items)
  - [Machines](#machines)
  - [Moves](#moves)
  - [Locations](#locations)
  - [Pokemon](#pokemon)
  - [Utility](#utility)
- [Root Endpoints](#root-endpoints)
  - [List of supported root endpoints](#list-of-supported-root-endpoints)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install [![nodeVersion](https://img.shields.io/badge/node-any-brightgreen.svg)](https://www.npmjs.com/package/pokedex-promise-v2)

You can install with Npm!
```shell
npm install pokedex-promise-v2 --save
```

or with Yarn!
```shell
yarn add pokedex-promise-v2
```

## Usage

```js
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();
```

**NOTE**: Any function with the designation "ByName" can also be passed an integer ID. However, the functions with the designation "ById" can only be passed an integer ID. Refer to the [pokeapi v2 docs](http://pokeapi.co/docsv2/) to find out more about how the data is structured.

**UPDATE**: You can pass an array to each endpoint, it will retrive data for each array element. If you scroll down, you will find an example.

### Example requests

```js
  P.getPokemonByName('eevee') // with Promise
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });

  P.getPokemonByName(34, function(response, error) { // with callback
      if(!error) {
        console.log(response);
      } else {
        console.log(error)
      }
    });
```

## Configuration

Pass an Object to Pokedex in order to configure it. Available options: `protocol`, `hostName`, `versionPath`, `cacheLimit` in ms, `timeout` in ms.
Any option is optional :smile:. If no Object is passed, the Pokedex will be initialized to grab data from pokeapi.co using http with 20 seconds timeout and caching resources for 11 days.

```js
var Pokedex = require('pokedex-promise-v2');
var options = {
  protocol: 'https',
  hostName: 'localhost:443',
  versionPath: '/api/v2/',
  cacheLimit: 100 * 1000, // 100s
  tiemout: 5 * 1000 // 5s
}
var P = new Pokedex(options);
```

## Endpoints

### Berries

Use **getBerryByName** to return data about a specific berry.
```js
  P.getBerryByName('cheri')
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getBerryFirmnessByName** to return data about the firmness of a specific berry.
```js
  P.getBerryFirmnessByName('very-soft')
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getBerryFlavorByName** to return data about the flavor of a specific berry.
```js
  P.getBerryFlavorByName('spicy')
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

**Array** as a parameter example. It can be a mixed array.
This method fetches data asynchronously. So it is quite fast :smile:
```js
  P.getBerryByName(['cheri', 'chesto', 5])
    .then(function(response) {
      console.log(response);
    })
  // response will be an Array containing 3 Objects
  // response.forEach((item) => {console.log(item.size)}) // 80,50,20
```

### Contests

Use **getContestTypeByName** to return data about the effects of moves when used in contests.
```js
  P.getContestTypeByName('cool')
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getContestEffectById** to return data about the effects of moves when used in contests.
```js
  P.getContestTypeByName(1)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getSuperContestEffectById** to return data about the effects of moves when used in super contests.
```js
  P.getSuperContestTypeById(1)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```
### Encounters

Use **getEncounterMethodByName** to return data about the conditions in which a trainer may encounter a pokemon in the wild.
```js
  P.getEncounterMethodByName("walk")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getEncounterConditionByName** to return data that affects which pokemon might appear in the wild.
```js
  P.getEncounterConditionByName("swarm")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getEncounterConditionValueByName** to return data the various states that an encounter condition can have.
```js
  P.getEncounterConditionValueByName("swarm-yes")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

### Evolution

Use **getEvolutionChainById** to return data evolution chains.
```js
  P.getEvolutionChainById(1)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getEvolutionTriggerByName** to return data about triggers which cause pokemon to evolve.
```js
  P.getEvolutionTriggerByName("level-up")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

### Games

Use **getGenerationByName** to return data about the different generations of pokemon games.
```js
  P.getGenerationByName("generation-i")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getPokedexByName** to return data about specific types of pokedexes.
```js
  P.getPokedexByName("kanto")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getVersionByName** to return data about specific versions of pokemon games.
```js
  P.getVersionByName("red")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getVersionGroupByName** to return data about specific version groups of pokemon games.
```js
  P.getVersionGroupByName("red-blue")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

### Items

Use **getItemByName** to return data about specific items.
```js
  P.getItemByName("master-ball")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getItemAttributeByName** to return data about specific item attribute.
```js
  P.getItemAttributeByName("countable")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getItemCategoryByName** to return data about specific item category.
```js
  P.getItemCategoryByName("stat-boosts")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getItemFlingEffectByName** to return data about specific item fling effect.
```js
  P.getItemFlingEffectByName("badly-poison")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getItemPocketByName** to return data about specific pockets in a players bag.
```js
  P.getItemPocketByName("misc")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

### Machines

Use **getMachineById** to return data about specific machine.
```js
  P.getMachineById(2)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

### Moves

Use **getMoveByName** to return data about specific pokemon move.
```js
  P.getMoveByName("pound")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getMoveAilmentByName** to return data about specific pokemon move ailment.
```js
  P.getMoveAilmentByName("paralysis")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getMoveBattleStyleByName** to return data about specific pokemon move battle style.
```js
  P.getMoveBattleStyleByName("attack")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getMoveCategoryByName** to return data about specific pokemon move category.
```js
  P.getMoveCategoryByName("ailment")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getMoveDamageClassByName** to return data about specific pokemon damage class.
```js
  P.getMoveDamageClassByName("status")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getMoveLearnMethodByName** to return data about specific pokemon learn method.
```js
  P.getMoveLearnMethodByName("level-up")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getMoveTargetByName** to return data about specific pokemon move target.
```js
  P.getMoveTargetByName("specific-move")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

### Locations

Use **getLocationByName** to return data about specific pokemon location.
```js
  P.getLocationByName("sinnoh")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getLocationAreaByName** to return data about specific pokemon location area.
```js
  P.getLocationAreaByName("canalave-city-area")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getPalParkAreaByName** to return data about specific pokemon pal park area.
```js
  P.getPalParkAreaByName("forest")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getRegionByName** to return data about specific pokemon region.
```js
  P.getRegionByName("kanto")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

### Pokemon

Use **getAbilityByName** to return data about specific pokemon ability.
```js
  P.getAbilityByName("stench")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getCharacteristicById** to return data about specific pokemon characteristic.
```js
  P.getCharacteristicById(1)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getEggGroupByName** to return data about specific pokemon egg group.
```js
  P.getEggGroupByName("monster")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getGenderByName** to return data about specific pokemon gender.
```js
  P.getGenderByName("female")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getGrowthRateByName** to return data about specific pokemon growth rate.
```js
  P.getGrowthRateByName("slow")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getNatureByName** to return data about specific pokemon nature.
```js
  P.getNatureByName("bold")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getPokeathlonStatByName** to return data about specific pokeathon stat.
```js
  P.getPokeathlonStatByName("speed")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getPokemonByName** to return data about specific pokemon.
```js
  P.getPokemonByName("butterfree")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getPokemonColorByName** to return data about specific pokemon color.
```js
  P.getPokemonColorByName("black")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getPokemonFormByName** to return data about specific pokemon form.
```js
  P.getPokemonFormByName("wormadam-plant")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getPokemonHabitatByName** to return data about specific pokemon habitat.
```js
  P.getPokemonHabitatByName("grottes")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getPokemonShapeByName** to return data about specific pokemon shape.
```js
  P.getPokemonShapeByName("ball")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getPokemonSpeciesByName** to return data about specific pokemon species.
```js
  P.getPokemonSpeciesByName("wormadam")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getStatByName** to return data about specific pokemon stat.
```js
  P.getStatByName("attack")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getTypeByName** to return data about specific pokemon type.
```js
  P.getTypeByName("ground")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

### Utility

Use **getLanguageByName** to return data about specific pokemon language.
```js
  P.getLanguageByName("ja")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

## Root Endpoints

For each root endpoint we provide a method to get all the items contained by that endpoint. By default the method will return every item in the endpoint. If you want you can configure its offset and limit.

* `offset` is where to start. The first item that you will get. Default `0`
* `limit` is how many items you want to list. Default `100000`

**TIP**: Do not pass any config Object to your call, since you will get every item and everything will be cached to your RAM.

This call will get the list of pokemon between ID 34 and ID 44 

```js
  var interval = {
    limit: 10,
    offset: 34
  }
  P.getPokemonsList(interval)
    .then(function(response) {
      console.log(response);
    })
```

This is what you will get:

```json
{
  "count": 811,
  "next":  "https://pokeapi.co:443/api/v2/pokemon/?limit=11&offset=44",
  "previous": "https://pokeapi.co:443/api/v2/pokemon/?limit=11&offset=22",
  "results": [
    { 
      "url": "https://pokeapi.co:443/api/v2/pokemon/34/",
      "name": "nidoking" 
    },
    { 
      "url": "https://pokeapi.co:443/api/v2/pokemon/35/",
      "name": "clefairy"
    },
    {
      "url": "...",
      "name": "..."
    },
    { 
      "url": "https://pokeapi.co:443/api/v2/pokemon/44/",
      "name": "gloom"
    }
  ]
}
```

### List of supported root endpoints

* .getEndpointsList()
* .getBerriesList()
* .getBerriesFirmnesssList()
* .getBerriesFlavorsList()
* .getContestTypesList()
* .getContestEffectsList()
* .getSuperContestEffectsList()
* .getEncounterMethodsList()
* .getEncounterConditionsList()
* .getEncounterConditionValuesList()
* .getEvolutionChainsList()
* .getEvolutionTriggersList()
* .getGenerationsList()
* .getPokedexsList()
* .getVersionsList()
* .getVersionGroupsList()
* .getItemsList()
* .getItemAttributesList()
* .getItemCategoriesList()
* .getItemFlingEffectsList()
* .getItemPocketsList()
* .getMachinesList()
* .getMovesList()
* .getMoveAilmentsList()
* .getMoveBattleStylesList()
* .getMoveCategoriesList()
* .getMoveDamageClassesList()
* .getMoveLearnMethodsList()
* .getMoveTar* getsList()
* .getLocationsList()
* .getLocationAreasList()
* .getPalParkAreasList()
* .getRegionsList()
* .getAbilitiesList()
* .getCharacteristicsList()
* .getEggGroupsList()
* .getGendersList()
* .getGrowthRatesList()
* .getNaturesList()
* .getPokeathlonStatsList()
* .getPokemonsList()
* .getPokemonColorsList()
* .getPokemonFormsList()
* .getPokemonHabitatsList()
* .getPokemonShapesList()
* .getPokemonSpeciesList()
* .getStatsList()
* .getTypesList()
* .getLanguagesList()
