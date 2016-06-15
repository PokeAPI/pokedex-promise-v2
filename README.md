# pokedex-promise-v2 ![Bulbasaur](http://pokeapi.co/media/img/1383571573.78.png)

[![npm version](https://badge.fury.io/js/pokedex-promise-v2.svg)](https://badge.fury.io/js/pokedex-promise-v2)
[![Build Status](https://travis-ci.org/PokeAPI/pokedex-promise-v2.svg?branch=master)](https://travis-ci.org/PokeAPI/pokedex-promise-v2)

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

**NOTE**: Any function with the designation "ByName" can also be passed an integer ID. However, the functions with the designation "ById" can only be passed an integer ID. Refer to the [pokeapi v2 docs](http://pokeapi.co/docsv2/) to find out more about how the data is structured.

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
### Encounters

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

Use **getEncounterConditionByName** to return data that affects which pokemon might appear in the wild.
```js
  P.getEncounterConditionByName("swarm")
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getEncounterConditionValueByName** to return data the various states that an encounter condition can have.
```js
  P.getEncounterConditionValueByName("swarm-yes")
    .then(function(response) {
      res.json(response);
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
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getEvolutionTriggerByName** to return data about triggers which cause pokemon to evolve.
```js
  P.getEvolutionTriggerByName("level-up")
    .then(function(response) {
      res.json(response);
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
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getPokedexByName** to return data about specific types of pokedexes.
```js
  P.getPokedexByName("kanto")
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getVersionByName** to return data about specific versions of pokemon games.
```js
  P.getVersionByName("red")
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getVersionGroupByName** to return data about specific version groups of pokemon games.
```js
  P.getVersionGroupByName("red-blue")
    .then(function(response) {
      res.json(response);
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
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getItemAttributeByName** to return data about specific item attribute.
```js
  P.getItemAttributeByName("countable")
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getItemCategoryByName** to return data about specific item category.
```js
  P.getItemCategoryByName("stat-boosts")
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getItemFlingEffectByName** to return data about specific item fling effect.
```js
  P.getItemFlingEffectByName("badly-poison")
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getItemPocketByName** to return data about specific pockets in a players bag.
```js
  P.getItemPocketByName("misc")
    .then(function(response) {
      res.json(response);
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
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getMoveAilmentByName** to return data about specific pokemon move ailment.
```js
  P.getMoveAilmentByName("paralysis")
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getMoveBattleStyleByName** to return data about specific pokemon move battle style.
```js
  P.getMoveBattleStyleByName("attack")
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getMoveCategoryByName** to return data about specific pokemon move category.
```js
  P.getMoveCategoryByName("ailment")
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getMoveDamageClassByName** to return data about specific pokemon damage class.
```js
  P.getMoveDamageClassByName("status")
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getMoveLearnMethodByName** to return data about specific pokemon learn method.
```js
  P.getMoveLearnMethodByName("level-up")
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getMoveTargetByName** to return data about specific pokemon move target.
```js
  P.getMoveTargetByName("specific-move")
    .then(function(response) {
      res.json(response);
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
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getLocationAreaByName** to return data about specific pokemon location area.
```js
  P.getLocationAreaByName("canalave-city-area")
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getPalParkAreaByName** to return data about specific pokemon pal park area.
```js
  P.getPalParkAreaByName("forest")
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getRegionByName** to return data about specific pokemon region.
```js
  P.getRegionByName("kanto")
    .then(function(response) {
      res.json(response);
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
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getCharacteristicById** to return data about specific pokemon characteristic.
```js
  P.getCharacteristicById(1)
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getEggGroupByName** to return data about specific pokemon egg group.
```js
  P.getEggGroupByName("monster")
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getGenderByName** to return data about specific pokemon gender.
```js
  P.getGenderByName("female")
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getGrowthRateByName** to return data about specific pokemon growth rate.
```js
  P.getGrowthRateByName("slow")
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getNatureByName** to return data about specific pokemon nature.
```js
  P.getNatureByName("bold")
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getPokeathlonStatByName** to return data about specific pokeathon stat.
```js
  P.getPokeathlonStatByName("speed")
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getPokemonByName** to return data about specific pokemon.
```js
  P.getPokemonByName("butterfree")
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getPokemonColorByName** to return data about specific pokemon color.
```js
  P.getPokemonColorByName("black")
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getPokemonFormByName** to return data about specific pokemon form.
```js
  P.getPokemonFormByName("wormadam-plant")
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getPokemonHabitatByName** to return data about specific pokemon habitat.
```js
  P.getPokemonHabitatByName("grottes")
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getPokemonShapeByName** to return data about specific pokemon shape.
```js
  P.getPokemonShapeByName("ball")
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getPokemonSpeciesByName** to return data about specific pokemon species.
```js
  P.getPokemonSpeciesByName("wormadam")
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getStatByName** to return data about specific pokemon stat.
```js
  P.getStatByName("attack")
    .then(function(response) {
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getTypeByName** to return data about specific pokemon type.
```js
  P.getTypeByName("ground")
    .then(function(response) {
      res.json(response);
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
      res.json(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```
