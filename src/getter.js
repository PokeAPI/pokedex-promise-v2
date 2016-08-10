import rp from 'request-promise';
import cache from 'memory-cache';

const CACHE_LIMIT = 1000000 * 1000; // 11 days

const getJSON = (url, cb) => {
    
    // retrive possible content from volatile memory
    const cachedResult = cache.get(url);
    if (cachedResult !== null) {
        return new Promise((resolve, reject) => {
            if (cb) {
                // call callback without errors
                cb(cachedResult, false);
            }
            resolve(cachedResult);
        });
    } else {
        // retrive data from the web
        const options = {
            url: url,
            json: true
        };
        return rp.get(options)
            .catch((error) => {
                if (!cb) {
                    // throw if a Promise
                    throw error;
                } else {
                    // call the callback with error as second parameter
                    cb('error', error);
                }
            })
            .then((response) => {
                if (response) {

                    // if there was an error
                    if (response.statusCode !== undefined && response.statusCode !== 200) {
                        if (!cb) {
                            // throw if a Promise
                            throw response;
                        } else {
                            // call the callback with error as second parameter
                            cb('error', response);
                        }
                    } else {
                        // if everithing was good
                        // cache the object in volatile memory
                        cache.put(url, response, CACHE_LIMIT);

                        // if a callback is present
                        if (cb) {
                            // call it, without errors
                            cb(response, false);
                        } else {
                            // return the Promise
                            return response;
                        }
                    }
                }
            }); 
    }
};

export { getJSON };
