const pMap = require('p-map');

const { endpoints } = require('./endpoints.js')
const { rootEndpoints } = require('./rootEndpoints.js')
const { getJSON } = require('./getter.js')
const { values } = require('./default.js')
const configurator = require('./configurator.js')

class Pokedex {
    constructor(config) {
        configurator.setPokedexConfiguration(config);
        
        // add to Pokedex.prototype all our endpoint functions
        endpoints.forEach(endpoint => {
            this[endpoint[0]] = (input, cb) => {
                const mapper = async name => {
                    const queryRes = await getJSON(`${values.protocol}${values.hostName}${values.versionPath}${endpoint[1]}/${name}/`)
                    return queryRes;
                };

                if (input) {

                    // if the user has submitted a Name or an Id, return the Json promise
                    if (typeof input === 'number' || typeof input === 'string') {
                        return getJSON(`${values.protocol}${values.hostName}${values.versionPath}${endpoint[1]}/${input}/`, cb); 
                    }

                    // if the user has submitted an Array
                    // return a new promise which will resolve when all getJSON calls are ended
                    else if (typeof input === 'object') {
                        return new Promise((resolve, reject) => {

                            

                            // fetch data asynchronously to be faster
                            pMap(input, mapper, {concurrency: 4}).then(toReturn => {
                                if (cb) {
                                    cb(toReturn);
                                }
                                resolve(toReturn);
                            })
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

module.exports = Pokedex