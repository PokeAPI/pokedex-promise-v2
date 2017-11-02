import async from 'async';

import endpoints from './endpoints.json';
import rootEndpoints from './rootEndpoints.json';
import { getJSON } from './getter.js';
import { values } from './default.js';
import { configurator } from './configurator.js';

class Pokedex {
    constructor(config) {
        configurator.setPokedexConfiguration(config);
        
        // add to Pokedex.prototype all our endpoint functions
        endpoints.forEach(endpoint => {
            this[endpoint[0]] = (input, cb) => { 
                if (input) {

                    // if the user has submitted a Name or an Id, return the Json promise
                    if (typeof input === 'number' || typeof input === 'string') {
                        return getJSON(`${values.protocol}${values.hostName}${values.versionPath}${endpoint[1]}/${input}/`, cb); 
                    }

                    // if the user has submitted an Array
                    // return a new promise which will resolve when all getJSON calls are ended
                    else if (typeof input === 'object') {
                        let toReturn = [];
                        return new Promise((resolve, reject) => {

                            // fetch data asynchronously to be faster
                            async.forEachOf(input, name => {

                                //get current input data and then try to resolve
                                getJSON(`${values.protocol}${values.hostName}${values.versionPath}${endpoint[1]}/${name}/`, response => {
                                    toReturn.push(response);
                                    if(toReturn.length === input.length){
                                        if (cb) {
                                            cb(toReturn);
                                        }
                                        resolve(toReturn);
                                    }
                                });
                            });
                        });
                    }
                }
            }
        });

        rootEndpoints.forEach(rootEndpoint => {
            this[rootEndpoint[0]] = (config, cb) => {
                configurator.setRootEndpointConfiguration(config);
                return getJSON(`${values.protocol}${values.hostName}${values.versionPath}${rootEndpoint[1]}?limit=${values.limit}&offset=${values.offset}`, cb);
            }
        });
    }

    resource(path) {
        if (typeof path === 'string') {
            return getJSON(path)
        } else if (typeof path === 'object') {
            return Promise.all(path.map(p => getJSON(p)));
        } else {
            return 'String or Array is required'
        }
    }
};

module.exports = Pokedex;
