var Pokedex = require("../index.js");
var chai = require('chai'),
  expect = chai.expect,
  assert = chai.assert;

// order matters: github.com/chaijs/chai-things/issues/4#issuecomment-87801365
chai.use(require("chai-things"));
chai.use(require("chai-as-promised"));

describe("pokedex", function() {
  var promise,
    id = 2,
    P = new Pokedex();

  this.timeout(40000);

  describe(".getBerryFirmnessByName(Id: int) with callback", function() {
    var resultAsCallback;
    before(function(done) {
      promise = P.getBerryFirmnessByName(id, function(data) {
        resultAsCallback = data;
        done();
      });
    });
    it("should have property name", function() {
      return expect(resultAsCallback).to.have.property("name");
    });
  });

  describe(".getBerryByName(Array: mixed) with callback", function() {
    var resultAsCallback;
    before(function(done) {
      promise = P.getBerryByName(['cheri', 'chesto', 5], function(data) {
        resultAsCallback = data;
        done();
      });
    });
    it("result in callback should have length 3", function() {
      return expect(resultAsCallback).to.have.length(3);
    });
    it("berries should have property max_harvest", function() {
      return expect(resultAsCallback).to.all.have.property('max_harvest');
    });
  });

  describe(".getBerryByName(Array: mixed) cached", function() {
    var resultAsCallback;
    before(function(done) {
      promise = P.getBerryByName(['cheri', 'chesto', 5]).then(function(data) {
        resultAsCallback = data;
        done();
      });
    });
    it("result in callback should have length 3", function() {
      return expect(resultAsCallback).to.have.length(3);
    });
    it("berries should have property soil_dryness", function() {
      return expect(resultAsCallback).to.all.have.property('soil_dryness');
    });
  });

  describe(".getBerryByName(String: name) invalid with callback", function() {
    var resultAsCallback;
    before(function(done) {
      promise = P.getBerryByName("asd", function(data, error) {
        if(error) {
          resultAsCallback = error;
        } else {
          resultAsCallback = data;
        }
        done();
      });
    });
    it("should fail with an error that has response property", function() {
      return expect(resultAsCallback).to.have.property('response');
    });
  });

  describe(".getBerryByName(String: name) invalid", function() {
    var resultAsCallback;
    before(function(done) {
      promise = P.getBerryByName("das").then(function(data) {
          resultAsCallback = data;
          done();
        }).catch(function (error){
          resultAsCallback = error;
          done();
        });
    });
    it("should fail", function() {
      return expect(Promise.regect);
    });
    it("should fail with an error that has response property", function() {
      return expect(resultAsCallback).to.have.property('response');
    });
  });

  describe(".getBerryByName(Array: string)", function() {
    before(function() {
      promise = P.getBerryByName(['cheri', 'chesto', 'pecha']);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have length 3", function() {
      return expect(promise).to.eventually.have.length(3);
    });
    it("berries should have property growth_time", function() {
      return expect(promise).to.eventually.all.have.property('growth_time');
    });
  });

  describe(".getBerryByName(Array: int)", function() {
    before(function() {
      promise = P.getBerryByName([1, 3, 5]);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have length 3", function() {
      return expect(promise).to.eventually.have.length(3);
    });
    it("berries should have property growth_time", function() {
      return expect(promise).to.eventually.all.have.property('growth_time');
    });
  });

  describe(".getPokemonByName(Array: int)", function() {
    before(function() {
      promise = P.getPokemonByName([15, 35, 433, 444]);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have length 4", function() {
      return expect(promise).to.eventually.have.length(4);
    });
    it("pokemons should have property height", function() {
      return expect(promise).to.eventually.all.have.property('height');
    });
  });

  describe(".getBerryByName(Id: int)", function() {
    before(function() {
      promise = P.getBerryByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getBerryByName(Id: int) cached", function() {
    before(function() {
      promise = P.getBerryByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getBerryFirmnessByName(Id: int)", function() {
    before(function() {
      promise = P.getBerryFirmnessByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getBerryFlavorByName(Id: int)", function() {
    before(function() {
      promise = P.getBerryFlavorByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getContestTypeByName(Id: int)", function() {
    before(function() {
      promise = P.getContestTypeByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getContestEffectById(Id: int)", function() {
    before(function() {
      promise = P.getContestEffectById(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property id", function() {
      return expect(promise).to.eventually.have.property("id");
    });
  });

  describe(".getSuperContestEffectById(Id: int)", function() {
    before(function() {
      promise = P.getSuperContestEffectById(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property id", function() {
      return expect(promise).to.eventually.have.property("id");
    });
  });

  describe(".getEncounterMethodByName(Id: int)", function() {
    before(function() {
      promise = P.getEncounterMethodByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getEncounterConditionByName(Id: int)", function() {
    before(function() {
      promise = P.getEncounterConditionByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getEncounterConditionValueByName(Id: int)", function() {
    before(function() {
      promise = P.getEncounterConditionValueByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getEvolutionChainById(Id: int)", function() {
    before(function() {
      promise = P.getEvolutionChainById(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("id");
    });
  });

  describe(".getEvolutionTriggerByName(Id: int)", function() {
    before(function() {
      promise = P.getEvolutionTriggerByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getGenerationByName(Id: int)", function() {
    before(function() {
      promise = P.getGenerationByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getPokedexByName(Id: int)", function() {
    before(function() {
      promise = P.getPokedexByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getVersionByName(Id: int)", function() {
    before(function() {
      promise = P.getVersionByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getVersionGroupByName(Id: int)", function() {
    before(function() {
      promise = P.getVersionGroupByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getItemByName(Id: int)", function() {
    before(function() {
      promise = P.getItemByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getItemAttributeByName(Id: int)", function() {
    before(function() {
      promise = P.getItemAttributeByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getItemCategoryByName(Id: int)", function() {
    before(function() {
      promise = P.getItemCategoryByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getItemFlingEffectByName(Id: int)", function() {
    before(function() {
      promise = P.getItemFlingEffectByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getItemPocketByName(Id: int)", function() {
    before(function() {
      promise = P.getItemPocketByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getMoveByName(Id: int)", function() {
    before(function() {
      promise = P.getMoveByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getMoveAilmentByName(Id: int)", function() {
    before(function() {
      promise = P.getMoveAilmentByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getMoveBattleStyleByName(Id: int)", function() {
    before(function() {
      promise = P.getMoveBattleStyleByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getMoveCategoryByName(Id: int)", function() {
    before(function() {
      promise = P.getMoveCategoryByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getMoveDamageClassByName(Id: int)", function() {
    before(function() {
      promise = P.getMoveDamageClassByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getMoveTargetByName(Id: int)", function() {
    before(function() {
      promise = P.getMoveTargetByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getLocationByName(Id: int)", function() {
    before(function() {
      promise = P.getLocationByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getLocationAreaByName(Id: int)", function() {
    before(function() {
      promise = P.getLocationAreaByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getPalParkAreaByName(Id: int)", function() {
    before(function() {
      promise = P.getPalParkAreaByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getRegionByName(Id: int)", function() {
    before(function() {
      promise = P.getRegionByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getAbilityByName(Id: int)", function() {
    before(function() {
      promise = P.getAbilityByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getCharacteristicById(Id: int)", function() {
    before(function() {
      promise = P.getCharacteristicById(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("id");
    });
  });

  describe(".getEggGroupByName(Id: int)", function() {
    before(function() {
      promise = P.getEggGroupByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getGenderByName(Id: int)", function() {
    before(function() {
      promise = P.getGenderByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getGrowthRateByName(Id: int)", function() {
    before(function() {
      promise = P.getGrowthRateByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getNatureByName(Id: int)", function() {
    before(function() {
      promise = P.getNatureByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getPokeathlonStatByName(Id: int)", function() {
    before(function() {
      promise = P.getPokeathlonStatByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getPokemonByName(Id: int)", function() {
    before(function() {
      promise = P.getPokemonByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getPokemonColorByName(Id: int)", function() {
    before(function() {
      promise = P.getPokemonColorByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getPokemonFormByName(Id: int)", function() {
    before(function() {
      promise = P.getPokemonFormByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getPokemonHabitatByName(Id: int)", function() {
    before(function() {
      promise = P.getPokemonHabitatByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getPokemonShapeByName(Id: int)", function() {
    before(function() {
      promise = P.getPokemonShapeByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getPokemonSpeciesByName(Id: int)", function() {
    before(function() {
      promise = P.getPokemonSpeciesByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getStatByName(Id: int)", function() {
    before(function() {
      promise = P.getStatByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getTypeByName(Id: int)", function() {
    before(function() {
      promise = P.getTypeByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getLanguageByName(Id: int)", function() {
    before(function() {
      promise = P.getLanguageByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getBerryByName(Name: string)", function() {
    before(function() {
      promise = P.getBerryByName('sfgfsgsfggsfg');
    });
    it("should fail", function() {
      return expect(Promise.regect);
    });
  });

});
