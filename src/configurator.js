const { values } = require('./default.js')

exports.setPokedexConfiguration = config => {
    if (config) {
        if (config.hasOwnProperty('protocol')) {
            values.setProtocol(config.protocol)
        }
        if (config.hasOwnProperty('hostName')) {
            values.setHostName(config.hostName)
        }
        if (config.hasOwnProperty('versionPath')) {
            values.setVersionPath(config.versionPath)
        }
        if (config.hasOwnProperty('timeout')) {
            values.setTimeout(config.timeout)
        }
        if (config.hasOwnProperty('cacheLimit')) {
            values.setCacheLimit(config.cacheLimit)
        }
    }
}

exports.setRootEndpointConfiguration = config => {
	if (config) {
        if (config.offset) {
            values.setOffset(config.offset)
        }
        if (config.limit) {
            values.setLimit(config.limit)
        }
    }
}
