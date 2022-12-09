/* eslint-disable */
/*
* DO NOT MODIFY, THIS IS AUTO GENERATED
* Execute `npm run generate` to regenerate
*/
import pMap from "p-map";
import NodeCache from "node-cache";
import PokeAPIOptions from "./interfaces/PokeAPIOptions.js";
import handleError from "./utils/ErrorHandler.js";
import getJSON from "./utils/Getter.js";
export default class Pokedex {
    constructor(options) {
        this.options = new PokeAPIOptions(options, new NodeCache());
    }
    async getResource(endpoint, callback) {
        try {
            // Fail if the endpoint is not supplied
            if (!endpoint) {
                throw new Error('Param "endpoint" is required needs to be a string or array of strings');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(endpoint) && typeof endpoint !== 'string') {
                throw new Error('Param "endpoint" needs to be a string or array of strings');
            }
            /// If the user has submitted a string, return the JSON promise
            if (typeof endpoint === 'string') {
                return getJSON(this.options, endpoint, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (endpoints) => {
                const queryRes = await getJSON(this.options, endpoints);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(endpoint, mapper, { concurrency: 4 });
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    /** @deprecated - will be removed on the next version. Use {@link getResource} instead */
    async resource(endpoint, callback) {
        try {
            // Fail if the endpoint is not supplied
            if (!endpoint) {
                throw new Error('Param "endpoint" is required needs to be a string or array of strings');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(endpoint) && typeof endpoint !== 'string') {
                throw new Error('Param "endpoint" needs to be a string or array of strings');
            }
            /// If the user has submitted a string, return the JSON promise
            if (typeof endpoint === 'string') {
                return getJSON(this.options, endpoint, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (endpoints) => {
                const queryRes = await getJSON(this.options, endpoints);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(endpoint, mapper, { concurrency: 4 });
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getBerryByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}berry/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}berry/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getBerryFirmnessByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}berry-firmness/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}berry-firmness/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getBerryFlavorByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}berry-flavor/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}berry-flavor/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getContestTypeByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}contest-type/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}contest-type/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getContestEffectById(id, callback) {
        try {
            // Fail if the param is not supplied
            if (!id) {
                throw new Error('Param "id" is required (Must be a number or array of numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(id) && typeof id !== 'number' && typeof id !== 'string') {
                throw new Error('Param "id" must be a number or array of numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof id === 'number' || typeof id === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}contest-effect/${id}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (ids) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}contest-effect/${ids}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(id, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getSuperContestEffectById(id, callback) {
        try {
            // Fail if the param is not supplied
            if (!id) {
                throw new Error('Param "id" is required (Must be a number or array of numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(id) && typeof id !== 'number' && typeof id !== 'string') {
                throw new Error('Param "id" must be a number or array of numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof id === 'number' || typeof id === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}super-contest-effect/${id}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (ids) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}super-contest-effect/${ids}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(id, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getEncounterMethodByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}encounter-method/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}encounter-method/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getEncounterConditionByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}encounter-condition/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}encounter-condition/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getEncounterConditionValueByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}encounter-condition-value/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}encounter-condition-value/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getEvolutionChainById(id, callback) {
        try {
            // Fail if the param is not supplied
            if (!id) {
                throw new Error('Param "id" is required (Must be a number or array of numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(id) && typeof id !== 'number' && typeof id !== 'string') {
                throw new Error('Param "id" must be a number or array of numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof id === 'number' || typeof id === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}evolution-chain/${id}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (ids) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}evolution-chain/${ids}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(id, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getEvolutionTriggerByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}evolution-trigger/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}evolution-trigger/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getGenerationByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}generation/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}generation/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getPokedexByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokedex/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokedex/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getVersionByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}version/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}version/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getVersionGroupByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}version-group/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}version-group/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getItemByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}item/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}item/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getItemAttributeByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}item-attribute/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}item-attribute/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getItemCategoryByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}item-category/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}item-category/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getItemFlingEffectByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}item-fling-effect/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}item-fling-effect/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getItemPocketByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}item-pocket/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}item-pocket/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getMachineById(id, callback) {
        try {
            // Fail if the param is not supplied
            if (!id) {
                throw new Error('Param "id" is required (Must be a number or array of numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(id) && typeof id !== 'number' && typeof id !== 'string') {
                throw new Error('Param "id" must be a number or array of numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof id === 'number' || typeof id === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}machine/${id}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (ids) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}machine/${ids}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(id, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getMoveByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getMoveAilmentByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move-ailment/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move-ailment/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getMoveBattleStyleByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move-battle-style/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move-battle-style/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getMoveCategoryByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move-category/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move-category/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getMoveDamageClassByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move-damage-class/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move-damage-class/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getMoveLearnMethodByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move-learn-method/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move-learn-method/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getMoveTargetByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move-target/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move-target/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getLocationByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}location/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}location/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getLocationAreaByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}location-area/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}location-area/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getPalParkAreaByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pal-park-area/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pal-park-area/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getRegionByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}region/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}region/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getAbilityByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}ability/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}ability/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getCharacteristicById(id, callback) {
        try {
            // Fail if the param is not supplied
            if (!id) {
                throw new Error('Param "id" is required (Must be a number or array of numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(id) && typeof id !== 'number' && typeof id !== 'string') {
                throw new Error('Param "id" must be a number or array of numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof id === 'number' || typeof id === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}characteristic/${id}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (ids) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}characteristic/${ids}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(id, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getEggGroupByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}egg-group/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}egg-group/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getGenderByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}gender/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}gender/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getGrowthRateByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}growth-rate/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}growth-rate/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getNatureByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}nature/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}nature/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getPokeathlonStatByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokeathlon-stat/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokeathlon-stat/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getPokemonByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokemon/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokemon/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getPokemonColorByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokemon-color/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokemon-color/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getPokemonFormByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokemon-form/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokemon-form/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getPokemonHabitatByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokemon-habitat/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokemon-habitat/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getPokemonShapeByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokemon-shape/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokemon-shape/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getPokemonSpeciesByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokemon-species/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokemon-species/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getStatByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}stat/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}stat/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getTypeByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}type/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}type/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getLanguageByName(nameOrId, callback) {
        try {
            // Fail if the param is not supplied
            if (!nameOrId) {
                throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
            // Fail if the input types aren't accepted
            if (!Array.isArray(nameOrId) && typeof nameOrId !== 'number' && typeof nameOrId !== 'string') {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
            }
            // If the user has submitted a Name or an ID, return the JSON promise
            if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}language/${nameOrId}/`, callback);
            }
            // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
            const mapper = async (nameOrIds) => {
                const queryRes = await getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}language/${nameOrIds}/`);
                return queryRes;
            };
            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });
            // Invoke the callback if we have one
            if (callback) {
                callback(mappedResults);
            }
            return mappedResults;
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getBerriesList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}berry/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getBerriesFirmnessList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}berry-firmness/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    /** @deprecated will be removed on a future version. Use {@link getBerriesFirmnessList} instead */
    async getBerriesFirmnesssList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}berry-firmness/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getBerriesFlavorsList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}berry-flavor/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getContestTypesList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}contest-type/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getContestEffectsList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}contest-effect/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getSuperContestEffectsList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}super-contest-effect/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getEncounterMethodsList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}encounter-method/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getEncounterConditionsList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}encounter-condition/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getEncounterConditionValuesList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}encounter-condition-value/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getEvolutionChainsList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}evolution-chain/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getEvolutionTriggersList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}evolution-trigger/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getGenerationsList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}generation/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    /** @deprecated will be removed on a future version. Use {@link getPokedexList} instead */
    async getPokedexsList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokedex/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getPokedexList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokedex/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getVersionsList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}version/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getVersionGroupsList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}version-group/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getItemsList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}item/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getItemAttributesList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}item-attribute/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getItemCategoriesList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}item-category/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getItemFlingEffectsList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}item-fling-effect/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getItemPocketsList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}item-pocket/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getMachinesList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}machine/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getMovesList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getMoveAilmentsList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move-ailment/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getMoveBattleStylesList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move-battle-style/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getMoveCategoriesList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move-category/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getMoveDamageClassesList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move-damage-class/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getMoveLearnMethodsList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move-learn-method/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getMoveTargetsList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move-target/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getLocationsList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}location/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getLocationAreasList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}location-area/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getPalParkAreasList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pal-park-area/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getRegionsList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}region/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getAbilitiesList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}ability/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getCharacteristicsList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}characteristic/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getEggGroupsList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}egg-group/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getGendersList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}gender/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getGrowthRatesList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}growth-rate/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getNaturesList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}nature/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getPokeathlonStatsList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokeathlon-stat/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getPokemonsList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokemon/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getPokemonColorsList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokemon-color/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getPokemonFormsList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokemon-form/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getPokemonHabitatsList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokemon-habitat/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getPokemonShapesList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokemon-shape/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getPokemonSpeciesList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokemon-species/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getStatsList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}stat/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getTypesList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}type/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getLanguagesList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}language/?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    async getEndpointsList(interval, callback) {
        try {
            let { limit, offset } = this.options;
            if (interval) {
                if (interval.hasOwnProperty('limit')) {
                    limit = interval.limit;
                }
                if (interval.hasOwnProperty('offset')) {
                    offset = interval.offset;
                }
            }
            return getJSON(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}?limit=${limit}&offset=${offset}`, callback);
        }
        catch (error) {
            handleError(error, callback);
        }
    }
    /** Retrieve the configs used */
    getConfig() {
        return this.options;
    }
    /** Retuns the current number of entries in the cache */
    getCachedItemsCount() {
        return this.options.cache.stats.keys;
    }
    /** @deprecated use {@link getCachedItemsCount} */
    cacheSize() {
        return this.options.cache.stats.keys;
    }
    /** Deletes all keys in cache */
    clearCache() {
        this.options.cache.flushAll();
    }
}
