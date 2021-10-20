/* eslint-disable no-undef */
import chai from 'chai';
import chaiThings from 'chai-things';
import chaiAsPromised from 'chai-as-promised';
import Pokedex from '../src/index.js';

// order matters: github.com/chaijs/chai-things/issues/4#issuecomment-87801365
chai.use(chaiThings);
chai.use(chaiAsPromised);

describe('pokedex', function () {
  let promise;
  const id = 2;
  const P = new Pokedex({
    protocol: 'https',
    hostName: 'pokeapi.co',
    versionPath: '/api/v2/',
  });
  this.timeout(10000);

  // test resource endpoint

  describe('P', () => {
    it('should be an object', () => chai.expect(P).to.be.an('object'));
    it('should have getPokemonByName function', () => chai.expect(P).to.have.property('getPokemonByName'));
    it('should have getPokemonsList function', () => chai.expect(P).to.have.property('getPokemonsList'));
  });

  describe('.resource(Mixed: Array) with callback', () => {
    let resultAsCallback;
    before((done) => {
      promise = P.resource(['https://pokeapi.co/api/v2/berry/12', 'https://pokeapi.co/api/v2/berry/11', 'https://pokeapi.co/api/v2/pokemon/12'], (data) => {
        resultAsCallback = data;
        done();
      });
    });
    it('should all have property name', () => chai.expect(resultAsCallback).to.eventually.all.have.property('name'));
  });

  describe('.resource(Url: String) secure (with ssl)', () => {
    before(() => {
      promise = P.resource('https://pokeapi.co/api/v2/berry/12');
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.resource(Path: String) secure (with ssl)', () => {
    before(() => {
      promise = P.resource('/api/v2/berry/13');
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.resource(Mixed: Array) secure (with ssl)', () => {
    before(() => {
      promise = P.resource(['/api/v2/berry/15', 'https://pokeapi.co/api/v2/berry/14']);
    });
    it('should succeed', () => promise);
    it('should have length 2', () => chai.expect(promise).to.eventually.have.length(2));
    it('should have property name', () => chai.expect(promise).to.eventually.all.have.property('name'));
  });

  // start custom uncommon calls

  describe('.getLanguagesList() with callback cached and offset', () => {
    let resultAsCallback;
    before((done) => {
      promise = P.getLanguagesList({ offset: 2 }, (data) => {
        resultAsCallback = data;
        done();
      });
    });
    it('should have property count', () => chai.expect(resultAsCallback).to.have.property('count'));
  });

  describe('.getLanguagesList() with callback, 0 cached and offset', () => {
    let resultAsCallback;
    before((done) => {
      promise = P.getLanguagesList({ offset: 2, cacheLimit: 0 }, (data) => {
        resultAsCallback = data;
        done();
      });
    });
    it('should have property count', () => chai.expect(resultAsCallback).to.have.property('count'));
  });

  describe('.getLanguagesList() with callback, negative cached and offset', () => {
    let resultAsCallback;
    before((done) => {
      promise = P.getLanguagesList({ offset: 2, cacheLimit: -1 }, (data) => {
        resultAsCallback = data;
        done();
      });
    });
    it('should have property count', () => chai.expect(resultAsCallback).to.have.property('count'));
  });

  describe('.getItemCategoryByName(Id: int) secure (with ssl)', () => {
    before(() => {
      promise = P.getItemCategoryByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getBerryFirmnessByName(Id: int) with callback', () => {
    let resultAsCallback;
    before((done) => {
      promise = P.getBerryFirmnessByName(id, (data) => {
        resultAsCallback = data;
        done();
      });
    });
    it('should have property name', () => chai.expect(resultAsCallback).to.have.property('name'));
  });

  describe('.getBerryByName(Array: mixed) with callback', () => {
    let resultAsCallback;
    before((done) => {
      promise = P.getBerryByName(['cheri', 'chesto', 5], (data) => {
        resultAsCallback = data;
        done();
      });
    });
    it('result in callback should have length 3', () => chai.expect(resultAsCallback).to.have.length(3));
    it('berries should have property max_harvest', () => chai.expect(resultAsCallback).to.all.have.property('max_harvest'));
  });

  describe('.getBerryByName(Array: mixed) cached', () => {
    let resultAsCallback;
    before((done) => {
      promise = P.getBerryByName(['cheri', 'chesto', 5]).then((data) => {
        resultAsCallback = data;
        done();
      });
    });
    it('result in callback should have length 3', () => chai.expect(resultAsCallback).to.have.length(3));
    it('berries should have property soil_dryness', () => chai.expect(resultAsCallback).to.all.have.property('soil_dryness'));
  });

  describe('.getBerryByName(String: name) invalid with callback', () => {
    let resultAsCallback;
    before((done) => {
      promise = P.getBerryByName('asd', (data, error) => {
        if (error) {
          resultAsCallback = error;
        }
        done();
      });
    });
    it('should fail with an error that has response property', () => chai.expect(resultAsCallback).to.have.property('response'));
  });

  describe('.getBerryByName(String: name) invalid', () => {
    it('should fail', () => chai.expect(P.getBerryByName('das')).to.be.rejected);
    it('should fail with an error that has response property', () => chai.expect(P.getBerryByName('das')).to.be.eventually.rejectedWith(Error).and.have.property('response'));
  });

  // end custom uncommon calls

  // start root endpoints

  describe('.getEndpointsList() secure (with ssl)', () => {
    before(() => {
      promise = P.getEndpointsList();
    });
    it('should succeed', () => promise);
    it('should have property pokedex', () => chai.expect(promise).to.eventually.have.property('pokedex'));
  });

  describe('.getBerriesList() secure (with ssl)', () => {
    before(() => {
      promise = P.getBerriesList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getBerriesFirmnesssList() secure (with ssl)', () => {
    before(() => {
      promise = P.getBerriesFirmnesssList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getBerriesFlavorsList() secure (with ssl)', () => {
    before(() => {
      promise = P.getBerriesFlavorsList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getContestTypesList() secure (with ssl)', () => {
    before(() => {
      promise = P.getContestTypesList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getContestEffectsList() secure (with ssl)', () => {
    before(() => {
      promise = P.getContestEffectsList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getSuperContestEffectsList() secure (with ssl)', () => {
    before(() => {
      promise = P.getSuperContestEffectsList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getEncounterMethodsList() secure (with ssl)', () => {
    before(() => {
      promise = P.getEncounterMethodsList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getEncounterConditionsList() secure (with ssl)', () => {
    before(() => {
      promise = P.getEncounterConditionsList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getEncounterConditionValuesList() secure (with ssl)', () => {
    before(() => {
      promise = P.getEncounterConditionValuesList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getEvolutionchaisList() secure (with ssl)', () => {
    before(() => {
      promise = P.getEvolutionChainsList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getEvolutionTriggersList() secure (with ssl)', () => {
    before(() => {
      promise = P.getEvolutionTriggersList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getGenerationsList() secure (with ssl)', () => {
    before(() => {
      promise = P.getGenerationsList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getPokedexsList() secure (with ssl)', () => {
    before(() => {
      promise = P.getPokedexsList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getVersionsList() secure (with ssl)', () => {
    before(() => {
      promise = P.getVersionsList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getVersionGroupsList() secure (with ssl)', () => {
    before(() => {
      promise = P.getVersionGroupsList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getItemsList() secure (with ssl)', () => {
    before(() => {
      promise = P.getItemsList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getItemAttributesList() secure (with ssl)', () => {
    before(() => {
      promise = P.getItemAttributesList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getItemCategoriesList() secure (with ssl)', () => {
    before(() => {
      promise = P.getItemCategoriesList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getItemFlingEffectsList() secure (with ssl)', () => {
    before(() => {
      promise = P.getItemFlingEffectsList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getItemPocketsList() secure (with ssl)', () => {
    before(() => {
      promise = P.getItemPocketsList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getMachinesList() secure (with ssl)', () => {
    before(() => {
      promise = P.getMachinesList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getMovesList() secure (with ssl)', () => {
    before(() => {
      promise = P.getMovesList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getMoveAilmentsList() secure (with ssl)', () => {
    before(() => {
      promise = P.getMoveAilmentsList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getMoveBattleStylesList() secure (with ssl)', () => {
    before(() => {
      promise = P.getMoveBattleStylesList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getMoveCategoriesList() secure (with ssl)', () => {
    before(() => {
      promise = P.getMoveCategoriesList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getMoveDamageClassesList() secure (with ssl)', () => {
    before(() => {
      promise = P.getMoveDamageClassesList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getMoveLearnMethodsList() secure (with ssl)', () => {
    before(() => {
      promise = P.getMoveLearnMethodsList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getMoveTargetsList() secure (with ssl)', () => {
    before(() => {
      promise = P.getMoveTargetsList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getLocationsList() secure (with ssl)', () => {
    before(() => {
      promise = P.getLocationsList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getLocationAreasList() secure (with ssl)', () => {
    before(() => {
      promise = P.getLocationAreasList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getPalParkAreasList() secure (with ssl)', () => {
    before(() => {
      promise = P.getPalParkAreasList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getRegionsList() secure (with ssl)', () => {
    before(() => {
      promise = P.getRegionsList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getAbilitiesList() secure (with ssl)', () => {
    before(() => {
      promise = P.getAbilitiesList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getCharacteristicsList() secure (with ssl)', () => {
    before(() => {
      promise = P.getCharacteristicsList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getEggGroupsList() secure (with ssl)', () => {
    before(() => {
      promise = P.getEggGroupsList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getGendersList() secure (with ssl)', () => {
    before(() => {
      promise = P.getGendersList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getGrowthRatesList() secure (with ssl)', () => {
    before(() => {
      promise = P.getGrowthRatesList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getNaturesList() secure (with ssl)', () => {
    before(() => {
      promise = P.getNaturesList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getPokeathlonStatsList() secure (with ssl)', () => {
    before(() => {
      promise = P.getPokeathlonStatsList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getPokemonsList() secure (with ssl)', () => {
    before(() => {
      promise = P.getPokemonsList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getPokemonColorsList() secure (with ssl)', () => {
    before(() => {
      promise = P.getPokemonColorsList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getPokemonFormsList() secure (with ssl)', () => {
    before(() => {
      promise = P.getPokemonFormsList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getPokemonHabitatsList() secure (with ssl)', () => {
    before(() => {
      promise = P.getPokemonHabitatsList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getPokemonShapesList() secure (with ssl)', () => {
    before(() => {
      promise = P.getPokemonShapesList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getPokemonSpeciesList() secure (with ssl)', () => {
    before(() => {
      promise = P.getPokemonSpeciesList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getStatsList() secure (with ssl)', () => {
    before(() => {
      promise = P.getStatsList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getTypesList() secure (with ssl)', () => {
    before(() => {
      promise = P.getTypesList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  describe('.getLanguagesList() secure (with ssl)', () => {
    before(() => {
      promise = P.getLanguagesList();
    });
    it('should succeed', () => promise);
    it('should have property count', () => chai.expect(promise).to.eventually.have.property('count'));
  });

  // end root endpoints

  // start normals calls

  describe('.getBerryByName(Array: string)', () => {
    before(() => {
      promise = P.getBerryByName(['cheri', 'chesto', 'pecha']);
    });
    it('should succeed', () => promise);
    it('should have length 3', () => chai.expect(promise).to.eventually.have.length(3));
    it('berries should have property growth_time', () => chai.expect(promise).to.eventually.all.have.property('growth_time'));
  });

  describe('.getBerryByName(Array: int)', () => {
    before(() => {
      promise = P.getBerryByName([1, 3, 5]);
    });
    it('should succeed', () => promise);
    it('should have length 3', () => chai.expect(promise).to.eventually.have.length(3));
    it('berries should have property growth_time', () => chai.expect(promise).to.eventually.all.have.property('growth_time'));
  });

  describe('.getPokemonByName(Array: int)', () => {
    before(() => {
      promise = P.getPokemonByName([15, 35, 433, 444]);
    });
    it('should succeed', () => promise);
    it('should have length 4', () => chai.expect(promise).to.eventually.have.length(4));
    it('pokemons should have property height', () => chai.expect(promise).to.eventually.all.have.property('height'));
  });

  describe('.getBerryByName(Id: int)', () => {
    before(() => {
      promise = P.getBerryByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getBerryByName(Id: int) cached', () => {
    before(() => {
      promise = P.getBerryByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getBerryFirmnessByName(Id: int)', () => {
    before(() => {
      promise = P.getBerryFirmnessByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getBerryFlavorByName(Id: int)', () => {
    before(() => {
      promise = P.getBerryFlavorByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getContestTypeByName(Id: int)', () => {
    before(() => {
      promise = P.getContestTypeByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getContestEffectById(Id: int)', () => {
    before(() => {
      promise = P.getContestEffectById(id);
    });
    it('should succeed', () => promise);
    it('should have property id', () => chai.expect(promise).to.eventually.have.property('id'));
  });

  describe('.getSuperContestEffectById(Id: int)', () => {
    before(() => {
      promise = P.getSuperContestEffectById(id);
    });
    it('should succeed', () => promise);
    it('should have property id', () => chai.expect(promise).to.eventually.have.property('id'));
  });

  describe('.getEncounterMethodByName(Id: int)', () => {
    before(() => {
      promise = P.getEncounterMethodByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getEncounterConditionByName(Id: int)', () => {
    before(() => {
      promise = P.getEncounterConditionByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getEncounterConditionValueByName(Id: int)', () => {
    before(() => {
      promise = P.getEncounterConditionValueByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getEvolutionchaiById(Id: int)', () => {
    before(() => {
      promise = P.getEvolutionChainById(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('id'));
  });

  describe('.getEvolutionTriggerByName(Id: int)', () => {
    before(() => {
      promise = P.getEvolutionTriggerByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getGenerationByName(Id: int)', () => {
    before(() => {
      promise = P.getGenerationByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getPokedexByName(Id: int)', () => {
    before(() => {
      promise = P.getPokedexByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getVersionByName(Id: int)', () => {
    before(() => {
      promise = P.getVersionByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getVersionGroupByName(Id: int)', () => {
    before(() => {
      promise = P.getVersionGroupByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getItemByName(Id: int)', () => {
    before(() => {
      promise = P.getItemByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getItemAttributeByName(Id: int)', () => {
    before(() => {
      promise = P.getItemAttributeByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getItemCategoryByName(Id: int)', () => {
    before(() => {
      promise = P.getItemCategoryByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getItemFlingEffectByName(Id: int)', () => {
    before(() => {
      promise = P.getItemFlingEffectByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getItemPocketByName(Id: int)', () => {
    before(() => {
      promise = P.getItemPocketByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getMachineById(Id: int)', () => {
    before(() => {
      promise = P.getMachineById(id);
    });
    it('should succeed', () => promise);
    it('should have property id', () => chai.expect(promise).to.eventually.have.property('id'));
  });

  describe('.getMoveByName(Id: int)', () => {
    before(() => {
      promise = P.getMoveByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getMoveAilmentByName(Id: int)', () => {
    before(() => {
      promise = P.getMoveAilmentByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getMoveBattleStyleByName(Id: int)', () => {
    before(() => {
      promise = P.getMoveBattleStyleByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getMoveCategoryByName(Id: int)', () => {
    before(() => {
      promise = P.getMoveCategoryByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getMoveDamageClassByName(Id: int)', () => {
    before(() => {
      promise = P.getMoveDamageClassByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getMoveTargetByName(Id: int)', () => {
    before(() => {
      promise = P.getMoveTargetByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getLocationByName(Id: int)', () => {
    before(() => {
      promise = P.getLocationByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getLocationAreaByName(Id: int)', () => {
    before(() => {
      promise = P.getLocationAreaByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getPalParkAreaByName(Id: int)', () => {
    before(() => {
      promise = P.getPalParkAreaByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getRegionByName(Id: int)', () => {
    before(() => {
      promise = P.getRegionByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getAbilityByName(Id: int)', () => {
    before(() => {
      promise = P.getAbilityByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getCharacteristicById(Id: int)', () => {
    before(() => {
      promise = P.getCharacteristicById(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('id'));
  });

  describe('.getEggGroupByName(Id: int)', () => {
    before(() => {
      promise = P.getEggGroupByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getGenderByName(Id: int)', () => {
    before(() => {
      promise = P.getGenderByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getGrowthRateByName(Id: int)', () => {
    before(() => {
      promise = P.getGrowthRateByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getNatureByName(Id: int)', () => {
    before(() => {
      promise = P.getNatureByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getPokeathlonStatByName(Id: int)', () => {
    before(() => {
      promise = P.getPokeathlonStatByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getPokemonByName(Id: int)', () => {
    before(() => {
      promise = P.getPokemonByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getPokemonColorByName(Id: int)', () => {
    before(() => {
      promise = P.getPokemonColorByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getPokemonFormByName(Id: int)', () => {
    before(() => {
      promise = P.getPokemonFormByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getPokemonHabitatByName(Id: int)', () => {
    before(() => {
      promise = P.getPokemonHabitatByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getPokemonShapeByName(Id: int)', () => {
    before(() => {
      promise = P.getPokemonShapeByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getPokemonSpeciesByName(Id: int)', () => {
    before(() => {
      promise = P.getPokemonSpeciesByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getStatByName(Id: int)', () => {
    before(() => {
      promise = P.getStatByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getTypeByName(Id: int)', () => {
    before(() => {
      promise = P.getTypeByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getLanguageByName(Id: int)', () => {
    before(() => {
      promise = P.getLanguageByName(id);
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.getBerryByName(Name: string)', () => {
    before(() => {
      promise = P.getBerryByName('sfgfsgsfggsfg');
    });
    it('should fail', () => chai.expect(promise).rejected);
  });
});
