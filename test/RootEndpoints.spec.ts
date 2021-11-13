import chai from 'chai';
import chaiThings from 'chai-things';
import chaiAsPromised from 'chai-as-promised';
import Pokedex from '../src/index.js';

// order matters: github.com/chaijs/chai-things/issues/4#issuecomment-87801365
chai.use(chaiThings);
chai.use(chaiAsPromised);

describe('Root Endpoints', function () {
  let promise;
  const P = new Pokedex({
    protocol: 'https',
    hostName: 'pokeapi.co',
    versionPath: '/api/v2/',
  });
  this.timeout(10000);

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

  describe('.getBerriesFirmnessList() secure (with ssl)', () => {
    before(() => {
      promise = P.getBerriesFirmnessList();
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

  describe('.getPokedexList() secure (with ssl)', () => {
    before(() => {
      promise = P.getPokedexList();
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
});
