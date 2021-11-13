/* eslint-disable import/no-unresolved */
import axios, { AxiosResponse } from 'axios';

import handleError from './ErrorHandler.js';
import PokeAPIOptions from '../interfaces/PokeAPIOptions.js';

// eslint-disable-next-line consistent-return
async function getJSON<T>(values: PokeAPIOptions, url: string,
  // eslint-disable-next-line no-unused-vars
  callback?: (result: any, error?: any) => any): Promise<T> {
  const options = {
    baseURL: `${values.protocol}${values.hostName}/`,
    timeout: values.timeout,
  };
  try {
    // Retrieve possible content from memory-cache
    const cachedResult = values.cache.get<T>(url);

    if (cachedResult) {
      if (callback) {
        // Call callback without errors
        callback(cachedResult);
      }

      return cachedResult;
    }

    const response: AxiosResponse<T, any> = await axios.get<T>(url, options);
    // if there is an error
    if (response.status !== 200) {
      handleError(response, callback);
    } else {
      // If everything was good
      // cache the object in memory-cache
      // only if cacheLimit > 0
      const responseData = response.data;

      if (values.cacheLimit > 0) {
        values.cache.set<T>(url, responseData, values.cacheLimit);
      }

      // If a callback is present
      if (callback) {
        // Call it, without errors
        callback(responseData);
      } else {
        return responseData;
      }
    }
  } catch (error) {
    handleError(error, callback);
  }
}

export default getJSON;
