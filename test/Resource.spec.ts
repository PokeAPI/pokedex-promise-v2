import chai from 'chai';
import chaiThings from 'chai-things';
import chaiAsPromised from 'chai-as-promised';
import Pokedex from '../src/index.js';

// order matters: github.com/chaijs/chai-things/issues/4#issuecomment-87801365
chai.use(chaiThings);
chai.use(chaiAsPromised);

describe('getResource', function () {
  let promise;
  const P = new Pokedex({
    protocol: 'https',
    hostName: 'pokeapi.co',
    versionPath: '/api/v2/',
  });
  this.timeout(10000);

  describe('.resource(Mixed: Array) with callback', () => {
    let resultAsCallback;
    before((done) => {
      promise = P.getResource(['https://pokeapi.co/api/v2/berry/12', 'https://pokeapi.co/api/v2/berry/11', 'https://pokeapi.co/api/v2/pokemon/12'], (data) => {
        resultAsCallback = data;
        done();
      });
    });
    it('result in callback should have length 3', () => chai.expect(resultAsCallback).to.have.length(3));
    // @ts-ignore
    it('should all have property name', () => chai.expect(resultAsCallback).to.all.have.property('name'));
  });

  describe('.resource(Url: String) secure (with ssl)', () => {
    before(() => {
      promise = P.getResource('https://pokeapi.co/api/v2/berry/12');
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.resource(Path: String) secure (with ssl)', () => {
    before(() => {
      promise = P.getResource('/api/v2/berry/13');
    });
    it('should succeed', () => promise);
    it('should have property name', () => chai.expect(promise).to.eventually.have.property('name'));
  });

  describe('.resource(Mixed: Array) secure (with ssl)', () => {
    before(() => {
      promise = P.getResource(['/api/v2/berry/15', 'https://pokeapi.co/api/v2/berry/14']);
    });
    it('should succeed', () => promise);
    it('should have length 2', () => chai.expect(promise).to.eventually.have.length(2));
    // @ts-ignore
    it('should have property name', () => chai.expect(promise).to.eventually.all.have.property('name'));
  });
});
