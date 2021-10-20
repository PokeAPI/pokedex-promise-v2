import axios from 'axios';

import handleError from './error.js';

async function getJSON(values, url, cb) {
  const options = {
    baseURL: `${values.protocol}${values.hostName}/`,
    timeout: values.timeout,
  };
  try {
    // retrive possible content from memory-cache
    const cachedResult = values.cache.get(url);
    if (cachedResult !== null) {
      if (cb) {
        // call callback without errors
        cb(cachedResult, false);
      }
      return cachedResult;
    }
    let response = await axios.get(url, options);
    // if there is an error
    if (response.statusCode !== undefined && response.statusCode !== 200) {
      handleError(response, cb);
    } else {
      // if everything was good
      // cache the object in memory-cache
      // only if cacheLimit > 0
      response = response.data;

      if (values.cacheLimit > 0) {
        values.cache.put(url, response, values.cacheLimit);
      }

      // if a callback is present
      if (cb) {
        // call it, without errors
        cb(response, false);
      } else {
        return response;
      }
    }
  } catch (error) {
    handleError(error, cb);
  }
}

export default getJSON;
