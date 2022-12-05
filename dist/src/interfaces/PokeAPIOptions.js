class PokeAPIOptions {
    /* eslint-disable default-param-last */
    constructor(config = {}, cache) {
        this.protocol = 'https';
        this.hostName = '://pokeapi.co';
        this.versionPath = '/api/v2/';
        this.offset = 0;
        this.limit = 100000;
        this.timeout = 10 * 1000; // 10 seconds
        this.cacheLimit = 1000000 * 1000; // 11 days
        this.cache = cache;
        if (config.protocol) {
            this.protocol = config.protocol;
        }
        if (config.hostName) {
            this.hostName = `://${config.hostName}`;
        }
        if (config.versionPath) {
            this.versionPath = config.versionPath;
        }
        if (config.offset) {
            this.offset = config.offset - 1;
        }
        if (config.limit) {
            this.limit = config.limit;
        }
        if (config.timeout) {
            this.timeout = config.timeout;
        }
        if (config.cacheLimit) {
            this.cacheLimit = config.cacheLimit;
        }
    }
}
export default PokeAPIOptions;
