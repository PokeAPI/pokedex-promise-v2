const pMap = require('p-map')
const cache = require('memory-cache')

const { endpoints } = require('./endpoints.js')
const { rootEndpoints } = require('./rootEndpoints.js')
const { getJSON } = require('./getter.js')
const { Values } = require('./values.js')
const { handleError } = require('./error.js')


class Pokedex {
    constructor(config) {
        this.values = new Values(config, new cache.Cache())
        
        // add to Pokedex.prototype all our endpoint functions
        endpoints.forEach(endpoint => {
            this[endpoint[0]] = async (input, cb) => {
                try {
                    const mapper = async name => {
                        const queryRes = await getJSON(this.values, `${this.values.protocol}${this.values.hostName}${this.values.versionPath}${endpoint[1]}/${name}/`)
                        return queryRes
                    }
    
                    if (input) {
    
                        // if the user has submitted a Name or an Id, return the Json promise
                        if (typeof input === 'number' || typeof input === 'string') {
                            return getJSON(this.values, `${this.values.protocol}${this.values.hostName}${this.values.versionPath}${endpoint[1]}/${input}/`, cb) 
                        }
    
                        // if the user has submitted an Array
                        // return a new promise which will resolve when all getJSON calls are ended
                        else if (typeof input === 'object') {
                            // fetch data asynchronously to be faster
                            const mappedResults = await pMap(input, mapper, {concurrency: 4})
                            if (cb) {
                                cb(mappedResults)
                            }
                            return mappedResults
                        }
                    }
                } catch (error) {
                    handleError(error, cb)
                }
            }
        })

        rootEndpoints.forEach(rootEndpoint => {
            this[rootEndpoint[0]] = async (config, cb) => {
                try {
                    let limit = this.values.limit
                    let offset = this.values.offset
                    if (config) {
                        if (config.hasOwnProperty('limit')) {
                            limit = config.limit
                        }
                        if (config.hasOwnProperty('offset')) {
                            offset = config.offset
                        }
                    }
                    return getJSON(this.values, `${this.values.protocol}${this.values.hostName}${this.values.versionPath}${rootEndpoint[1]}?limit=${limit}&offset=${offset}`, cb)
                } catch (error) {
                    handleError(error, cb)
                }
            }
        })
    }

    async resource(path, cb) {
        let result
        try {
            if (typeof path === 'string') {
                result = getJSON(this.values, path)
            } else if (typeof path === 'object') {
                result = Promise.all(path.map(p => getJSON(this.values, p)))
            } else {
                throw 'String or Array required'
            }
            if (cb) {
                cb(result) // TODO: check if this callback is called with a pending Promise or an actual result
            }
            return result
        } catch (error) {
            throw new Error(error)
        }
    }

    getConfig() {
        return this.values
    }

    cacheSize() {
        // Retuns the current number of entries in the cache
        return this.values.cache.size()
    }

    clearCache() {
        // Deletes all keys in cache
        this.values.cache.clear()
    }
}

module.exports = Pokedex
