import { values } from './default.js';

const configurator = {};

configurator.setPokedexConfiguration = (config) => {
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
        if (config.timeout) {
            values.setTimeout(config.timeout);
        }
        if (config.cacheLimit) {
            values.setCacheLimit(config.cacheLimit);
        }
    }
}

configurator.setRootEndpointConfiguration = (config) => {
	if (config) {
        if (config.offset) {
            values.setOffset(config.offset);
        }
        if (config.limit) {
            values.setLimit(config.limit);
        }
    }
}

export { configurator };
