import async from 'async';

import endpoints from './endpoints.json';
import rootEndpoints from './rootEndpoints.json';
import { values } from './default.js';
import { getJSON } from './getter.js';

const Pokedex = (() => {
    function Pokedex(config){
        if (config) {
            if (config.protocol) {
                values.setProtocol(config.protocol);
            }
            if (config.hostName) {
                values.setHostName(config.hostName);
            }
            if (config.versionPath) {
                values.setVersionPath(config.versionPath);
            }
        }
    }

    // add to Pokedex.prototype all our endpoint functions
    endpoints.forEach((endpoint) => {
        Pokedex.prototype[endpoint[0]] = (input, cb) => { 
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
                        async.forEachOf(input, (name) => {

                            //get current input data and then try to resolve
                            getJSON(`${values.protocol}${values.hostName}${values.versionPath}${endpoint[1]}/${name}/`, (response) => {
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

    rootEndpoints.forEach((rootEndpoint) => {
        Pokedex.prototype[rootEndpoint[0]] = (config, cb) => {
            if (config) {
                if (config.offset) {
                    values.setOffset(config.offset);
                }
                if (config.limit) {
                    values.setLimit(config.limit);
                }
            }
            return getJSON(`${values.protocol}${values.hostName}${values.versionPath}${rootEndpoint[1]}?limit=${values.limit}&offset=${values.offset}`, cb);
        }
    });

    return Pokedex;
})();

module.exports = Pokedex;
