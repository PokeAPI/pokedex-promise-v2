import chai from 'chai';
import chaiThings from 'chai-things';
import chaiAsPromised from 'chai-as-promised';
import Pokedex from '../src/index.js';

// order matters: github.com/chaijs/chai-things/issues/4#issuecomment-87801365
chai.use(chaiThings);
chai.use(chaiAsPromised);

describe('Custom Uncommon Calls', function () {
  let promise;
  const id = 2;
  const P = new Pokedex({
    protocol: 'https',
    hostName: 'pokeapi.co',
    versionPath: '/api/v2/',
  });
  this.timeout(10000);

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
    // @ts-ignore
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
    // @ts-ignore
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
});
