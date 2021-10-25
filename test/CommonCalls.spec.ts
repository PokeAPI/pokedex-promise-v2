import chai from 'chai';
import chaiThings from 'chai-things';
import chaiAsPromised from 'chai-as-promised';
import Pokedex from '../src/index.js';

// order matters: github.com/chaijs/chai-things/issues/4#issuecomment-87801365
chai.use(chaiThings);
chai.use(chaiAsPromised);

describe('Common Calls', function () {
  let promise;
  const id = 2;
  const P = new Pokedex({
    protocol: 'https',
    hostName: 'pokeapi.co',
    versionPath: '/api/v2/',
  });
  this.timeout(10000);

  describe('.getBerryByName(Array: string)', () => {
    before(() => {
      promise = P.getBerryByName(['cheri', 'chesto', 'pecha']);
    });
    it('should succeed', () => promise);
    it('should have length 3', () => chai.expect(promise).to.eventually.have.length(3));
    // @ts-ignore
    it('berries should have property growth_time', () => chai.expect(promise).to.eventually.all.have.property('growth_time'));
  });

  describe('.getBerryByName(Array: int)', () => {
    before(() => {
      promise = P.getBerryByName([1, 3, 5]);
    });
    it('should succeed', () => promise);
    it('should have length 3', () => chai.expect(promise).to.eventually.have.length(3));
    // @ts-ignore
    it('berries should have property growth_time', () => chai.expect(promise).to.eventually.all.have.property('growth_time'));
  });

  describe('.getPokemonByName(Array: int)', () => {
    before(() => {
      promise = P.getPokemonByName([15, 35, 433, 444]);
    });
    it('should succeed', () => promise);
    it('should have length 4', () => chai.expect(promise).to.eventually.have.length(4));
    // @ts-ignore
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
