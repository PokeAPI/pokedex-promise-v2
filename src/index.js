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
            this[endpoint[0]] = async (input, cb) => {
                try {
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
                            // fetch data asynchronously to be faster
                            const toReturn = await pMap(input, mapper, {concurrency: 4})
                            if (cb) {
                                cb(toReturn);
                            }
                            return toReturn;
                        }
                    }
                } catch (error) {
                    throw error
                }
            }
        });

        rootEndpoints.forEach(rootEndpoint => {
            this[rootEndpoint[0]] = async (config, cb) => {
                try {
                    configurator.setRootEndpointConfiguration(config);
                    return getJSON(`${values.protocol}${values.hostName}${values.versionPath}${rootEndpoint[1]}?limit=${values.limit}&offset=${values.offset}`, cb)
                } catch (error) {
                    throw error
                }
            }
        });
    }

    async resource(path) {
        try{
            if (typeof path === 'string') {
                return getJSON(path)
            } else if (typeof path === 'object') {
                return Promise.all(path.map(p => getJSON(p)));
            } else {
                throw 'String or Array required'
            }
        } catch (error) {
            throw error
        }
    }
};

module.exports = Pokedex