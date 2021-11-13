import chai from 'chai';
import chaiThings from 'chai-things';
import chaiAsPromised from 'chai-as-promised';
import Pokedex from '../src/index.js';

// order matters: github.com/chaijs/chai-things/issues/4#issuecomment-87801365
chai.use(chaiThings);
chai.use(chaiAsPromised);

describe('Create Pokedex Instance', function () {
  const P = new Pokedex({
    protocol: 'https',
    hostName: 'pokeapi.co',
    versionPath: '/api/v2/',
  });
  this.timeout(10000);

  describe('P', () => {
    it('should be an object', () => chai.expect(P).to.be.an('object'));
    it('should have getPokemonByName function', () => chai.expect(P).to.have.property('getPokemonByName'));
    it('should have getPokemonsList function', () => chai.expect(P).to.have.property('getPokemonsList'));
  });
});
