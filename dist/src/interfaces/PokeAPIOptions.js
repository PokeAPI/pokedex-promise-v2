class PokeAPIOptions {
    /** The protocol to be used
     * @default 'https'
     */
    protocol;
    /** The hostname of the PokeAPI instance
     * @default 'pokeapi.co'
    */
    hostName;
    /** The version path of the API
     * @default '/api/v2/'
    */
    versionPath;
    /** The offset to be used in list requests
     * @default 0
    */
    offset;
    /** The limit to be used in list requests
     * @default 100000
    */
    limit;
    /** The timeout of a response in milliseconds
     * @default 10 * 1000 // (10 seconds)
     */
    timeout;
    /** The limit of the cache in milliseconds
     * @default 1000000 * 1000 // (11 days)
    */
    cacheLimit;
    /** The version path of the API (e.g. '/api/v2/') */
    cache;
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
