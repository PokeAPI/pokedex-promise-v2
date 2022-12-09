/* eslint-disable */
/*
* DO NOT MODIFY, THIS IS AUTO GENERATED
* Execute `npm run generate` to regenerate
*/
import pMap from "p-map";
import NodeCache from "node-cache";
import PokeAPITypes from "pokedex-promise-v2";
import ListEndpointOptions from "./interfaces/ListEndpointOptions.js";
import PokeAPIOptions from "./interfaces/PokeAPIOptions.js";
import handleError from "./utils/ErrorHandler.js";
import getJSON from "./utils/Getter.js";

export default class Pokedex {
    options: PokeAPIOptions;

    constructor(options?: PokeAPIOptions) {
        this.options = new PokeAPIOptions(options, new NodeCache());
    }

    async getResource(endpoint: string | string[], callback?: (result: any | any[], error?: any) => any): Promise<any | any[]> {
        try {
          if (!endpoint) {
            throw new Error('Param "endpoint" is required needs to be a string or array of strings');
          }

          if (typeof endpoint === 'string') {
            return getJSON<any>(this.options, endpoint, callback);
          } else if (typeof endpoint === 'object') {
            const mapper = async (endpoints: string) => {
              const queryRes = await getJSON<any>(this.options, endpoints);
              return queryRes;
            };

            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(endpoint, mapper, { concurrency: 4 });

            if (callback) {
              callback(mappedResults);
            }

            return mappedResults;
          } else {
            throw new Error('Param "endpoint" needs to be a string or array of strings');
          }
        } catch (error) {
          handleError(error, callback);
        }
    }

    /** @deprecated - will be removed on the next version. Use {@link getResource} instead */
    async resource(endpoint: string | string[], callback?: (result: any | any[], error?: any) => any): Promise<any | any[]> {
        try {
          if (!endpoint) {
            throw new Error('Param "endpoint" is required needs to be a string or array of strings');
          }

          if (typeof endpoint === 'string') {
            return getJSON<any>(this.options, endpoint, callback);
          } else if (typeof endpoint === 'object') {
            const mapper = async (endpoints: string) => {
              const queryRes = await getJSON<any>(this.options, endpoints);
              return queryRes;
            };

            // Fetch data asynchronously to be faster
            const mappedResults = await pMap(endpoint, mapper, { concurrency: 4 });

            if (callback) {
              callback(mappedResults);
            }

            return mappedResults;
          } else {
            throw new Error('Param "endpoint" needs to be a string or array of strings');
          }
        } catch (error) {
          handleError(error, callback);
        }
    }

    async getBerryByName(nameOrId: string | number, callback?: (result: PokeAPITypes.Berry | PokeAPITypes.Berry[], error?: any) => any): Promise<PokeAPITypes.Berry>;
    async getBerryByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.Berry[], error?: any) => any): Promise<PokeAPITypes.Berry[]>;
    async getBerryByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.Berry, error?: any) => any) & ((result: PokeAPITypes.Berry[], error?: any) => any)): Promise<PokeAPITypes.Berry | PokeAPITypes.Berry[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.Berry>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}berry/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.Berry>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}berry/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getBerryFirmnessByName(nameOrId: string | number, callback?: (result: PokeAPITypes.BerryFirmness | PokeAPITypes.BerryFirmness[], error?: any) => any): Promise<PokeAPITypes.BerryFirmness>;
    async getBerryFirmnessByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.BerryFirmness[], error?: any) => any): Promise<PokeAPITypes.BerryFirmness[]>;
    async getBerryFirmnessByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.BerryFirmness, error?: any) => any) & ((result: PokeAPITypes.BerryFirmness[], error?: any) => any)): Promise<PokeAPITypes.BerryFirmness | PokeAPITypes.BerryFirmness[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.BerryFirmness>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}berry-firmness/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.BerryFirmness>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}berry-firmness/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getBerryFlavorByName(nameOrId: string | number, callback?: (result: PokeAPITypes.BerryFlavor | PokeAPITypes.BerryFlavor[], error?: any) => any): Promise<PokeAPITypes.BerryFlavor>;
    async getBerryFlavorByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.BerryFlavor[], error?: any) => any): Promise<PokeAPITypes.BerryFlavor[]>;
    async getBerryFlavorByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.BerryFlavor, error?: any) => any) & ((result: PokeAPITypes.BerryFlavor[], error?: any) => any)): Promise<PokeAPITypes.BerryFlavor | PokeAPITypes.BerryFlavor[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.BerryFlavor>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}berry-flavor/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.BerryFlavor>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}berry-flavor/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getContestTypeByName(nameOrId: string | number, callback?: (result: PokeAPITypes.ContestType | PokeAPITypes.ContestType[], error?: any) => any): Promise<PokeAPITypes.ContestType>;
    async getContestTypeByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.ContestType[], error?: any) => any): Promise<PokeAPITypes.ContestType[]>;
    async getContestTypeByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.ContestType, error?: any) => any) & ((result: PokeAPITypes.ContestType[], error?: any) => any)): Promise<PokeAPITypes.ContestType | PokeAPITypes.ContestType[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.ContestType>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}contest-type/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.ContestType>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}contest-type/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getContestEffectById(id: number, callback?: (result: PokeAPITypes.ContestEffect | PokeAPITypes.ContestEffect[], error?: any) => any): Promise<PokeAPITypes.ContestEffect>;
    async getContestEffectById(id: number[], callback?: (result: PokeAPITypes.ContestEffect[], error?: any) => any): Promise<PokeAPITypes.ContestEffect[]>;
    async getContestEffectById(id: number | number[], callback?: ((result: PokeAPITypes.ContestEffect, error?: any) => any) & ((result: PokeAPITypes.ContestEffect[], error?: any) => any)): Promise<PokeAPITypes.ContestEffect | PokeAPITypes.ContestEffect[]> {
        try {
            if (id) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof id === 'number' || typeof id === 'string') {
                return getJSON<PokeAPITypes.ContestEffect>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}contest-effect/${id}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof id === 'object') {
                const mapper = async (ids: number | number[]) => {
                  const queryRes = await getJSON<PokeAPITypes.ContestEffect>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}contest-effect/${ids}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(id, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "id" must be a number or array of numbers');
              }
            } else {
              throw new Error('Param "id" is required (Must be a number or array of numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getSuperContestEffectById(id: number, callback?: (result: PokeAPITypes.SuperContestEffect | PokeAPITypes.SuperContestEffect[], error?: any) => any): Promise<PokeAPITypes.SuperContestEffect>;
    async getSuperContestEffectById(id: number[], callback?: (result: PokeAPITypes.SuperContestEffect[], error?: any) => any): Promise<PokeAPITypes.SuperContestEffect[]>;
    async getSuperContestEffectById(id: number | number[], callback?: ((result: PokeAPITypes.SuperContestEffect, error?: any) => any) & ((result: PokeAPITypes.SuperContestEffect[], error?: any) => any)): Promise<PokeAPITypes.SuperContestEffect | PokeAPITypes.SuperContestEffect[]> {
        try {
            if (id) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof id === 'number' || typeof id === 'string') {
                return getJSON<PokeAPITypes.SuperContestEffect>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}super-contest-effect/${id}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof id === 'object') {
                const mapper = async (ids: number | number[]) => {
                  const queryRes = await getJSON<PokeAPITypes.SuperContestEffect>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}super-contest-effect/${ids}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(id, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "id" must be a number or array of numbers');
              }
            } else {
              throw new Error('Param "id" is required (Must be a number or array of numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getEncounterMethodByName(nameOrId: string | number, callback?: (result: PokeAPITypes.EncounterMethod | PokeAPITypes.EncounterMethod[], error?: any) => any): Promise<PokeAPITypes.EncounterMethod>;
    async getEncounterMethodByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.EncounterMethod[], error?: any) => any): Promise<PokeAPITypes.EncounterMethod[]>;
    async getEncounterMethodByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.EncounterMethod, error?: any) => any) & ((result: PokeAPITypes.EncounterMethod[], error?: any) => any)): Promise<PokeAPITypes.EncounterMethod | PokeAPITypes.EncounterMethod[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.EncounterMethod>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}encounter-method/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.EncounterMethod>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}encounter-method/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getEncounterConditionByName(nameOrId: string | number, callback?: (result: PokeAPITypes.EncounterCondition | PokeAPITypes.EncounterCondition[], error?: any) => any): Promise<PokeAPITypes.EncounterCondition>;
    async getEncounterConditionByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.EncounterCondition[], error?: any) => any): Promise<PokeAPITypes.EncounterCondition[]>;
    async getEncounterConditionByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.EncounterCondition, error?: any) => any) & ((result: PokeAPITypes.EncounterCondition[], error?: any) => any)): Promise<PokeAPITypes.EncounterCondition | PokeAPITypes.EncounterCondition[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.EncounterCondition>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}encounter-condition/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.EncounterCondition>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}encounter-condition/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getEncounterConditionValueByName(nameOrId: string | number, callback?: (result: PokeAPITypes.EncounterConditionValue | PokeAPITypes.EncounterConditionValue[], error?: any) => any): Promise<PokeAPITypes.EncounterConditionValue>;
    async getEncounterConditionValueByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.EncounterConditionValue[], error?: any) => any): Promise<PokeAPITypes.EncounterConditionValue[]>;
    async getEncounterConditionValueByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.EncounterConditionValue, error?: any) => any) & ((result: PokeAPITypes.EncounterConditionValue[], error?: any) => any)): Promise<PokeAPITypes.EncounterConditionValue | PokeAPITypes.EncounterConditionValue[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.EncounterConditionValue>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}encounter-condition-value/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.EncounterConditionValue>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}encounter-condition-value/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getEvolutionChainById(id: number, callback?: (result: PokeAPITypes.EvolutionChain | PokeAPITypes.EvolutionChain[], error?: any) => any): Promise<PokeAPITypes.EvolutionChain>;
    async getEvolutionChainById(id: number[], callback?: (result: PokeAPITypes.EvolutionChain[], error?: any) => any): Promise<PokeAPITypes.EvolutionChain[]>;
    async getEvolutionChainById(id: number | number[], callback?: ((result: PokeAPITypes.EvolutionChain, error?: any) => any) & ((result: PokeAPITypes.EvolutionChain[], error?: any) => any)): Promise<PokeAPITypes.EvolutionChain | PokeAPITypes.EvolutionChain[]> {
        try {
            if (id) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof id === 'number' || typeof id === 'string') {
                return getJSON<PokeAPITypes.EvolutionChain>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}evolution-chain/${id}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof id === 'object') {
                const mapper = async (ids: number | number[]) => {
                  const queryRes = await getJSON<PokeAPITypes.EvolutionChain>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}evolution-chain/${ids}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(id, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "id" must be a number or array of numbers');
              }
            } else {
              throw new Error('Param "id" is required (Must be a number or array of numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getEvolutionTriggerByName(nameOrId: string | number, callback?: (result: PokeAPITypes.EvolutionTrigger | PokeAPITypes.EvolutionTrigger[], error?: any) => any): Promise<PokeAPITypes.EvolutionTrigger>;
    async getEvolutionTriggerByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.EvolutionTrigger[], error?: any) => any): Promise<PokeAPITypes.EvolutionTrigger[]>;
    async getEvolutionTriggerByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.EvolutionTrigger, error?: any) => any) & ((result: PokeAPITypes.EvolutionTrigger[], error?: any) => any)): Promise<PokeAPITypes.EvolutionTrigger | PokeAPITypes.EvolutionTrigger[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.EvolutionTrigger>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}evolution-trigger/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.EvolutionTrigger>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}evolution-trigger/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getGenerationByName(nameOrId: string | number, callback?: (result: PokeAPITypes.Generation | PokeAPITypes.Generation[], error?: any) => any): Promise<PokeAPITypes.Generation>;
    async getGenerationByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.Generation[], error?: any) => any): Promise<PokeAPITypes.Generation[]>;
    async getGenerationByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.Generation, error?: any) => any) & ((result: PokeAPITypes.Generation[], error?: any) => any)): Promise<PokeAPITypes.Generation | PokeAPITypes.Generation[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.Generation>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}generation/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.Generation>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}generation/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getPokedexByName(nameOrId: string | number, callback?: (result: PokeAPITypes.Pokedex | PokeAPITypes.Pokedex[], error?: any) => any): Promise<PokeAPITypes.Pokedex>;
    async getPokedexByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.Pokedex[], error?: any) => any): Promise<PokeAPITypes.Pokedex[]>;
    async getPokedexByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.Pokedex, error?: any) => any) & ((result: PokeAPITypes.Pokedex[], error?: any) => any)): Promise<PokeAPITypes.Pokedex | PokeAPITypes.Pokedex[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.Pokedex>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokedex/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.Pokedex>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokedex/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getVersionByName(nameOrId: string | number, callback?: (result: PokeAPITypes.Version | PokeAPITypes.Version[], error?: any) => any): Promise<PokeAPITypes.Version>;
    async getVersionByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.Version[], error?: any) => any): Promise<PokeAPITypes.Version[]>;
    async getVersionByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.Version, error?: any) => any) & ((result: PokeAPITypes.Version[], error?: any) => any)): Promise<PokeAPITypes.Version | PokeAPITypes.Version[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.Version>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}version/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.Version>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}version/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getVersionGroupByName(nameOrId: string | number, callback?: (result: PokeAPITypes.VersionGroup | PokeAPITypes.VersionGroup[], error?: any) => any): Promise<PokeAPITypes.VersionGroup>;
    async getVersionGroupByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.VersionGroup[], error?: any) => any): Promise<PokeAPITypes.VersionGroup[]>;
    async getVersionGroupByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.VersionGroup, error?: any) => any) & ((result: PokeAPITypes.VersionGroup[], error?: any) => any)): Promise<PokeAPITypes.VersionGroup | PokeAPITypes.VersionGroup[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.VersionGroup>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}version-group/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.VersionGroup>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}version-group/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getItemByName(nameOrId: string | number, callback?: (result: PokeAPITypes.Item | PokeAPITypes.Item[], error?: any) => any): Promise<PokeAPITypes.Item>;
    async getItemByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.Item[], error?: any) => any): Promise<PokeAPITypes.Item[]>;
    async getItemByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.Item, error?: any) => any) & ((result: PokeAPITypes.Item[], error?: any) => any)): Promise<PokeAPITypes.Item | PokeAPITypes.Item[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.Item>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}item/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.Item>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}item/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getItemAttributeByName(nameOrId: string | number, callback?: (result: PokeAPITypes.ItemAttribute | PokeAPITypes.ItemAttribute[], error?: any) => any): Promise<PokeAPITypes.ItemAttribute>;
    async getItemAttributeByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.ItemAttribute[], error?: any) => any): Promise<PokeAPITypes.ItemAttribute[]>;
    async getItemAttributeByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.ItemAttribute, error?: any) => any) & ((result: PokeAPITypes.ItemAttribute[], error?: any) => any)): Promise<PokeAPITypes.ItemAttribute | PokeAPITypes.ItemAttribute[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.ItemAttribute>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}item-attribute/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.ItemAttribute>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}item-attribute/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getItemCategoryByName(nameOrId: string | number, callback?: (result: PokeAPITypes.ItemCategory | PokeAPITypes.ItemCategory[], error?: any) => any): Promise<PokeAPITypes.ItemCategory>;
    async getItemCategoryByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.ItemCategory[], error?: any) => any): Promise<PokeAPITypes.ItemCategory[]>;
    async getItemCategoryByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.ItemCategory, error?: any) => any) & ((result: PokeAPITypes.ItemCategory[], error?: any) => any)): Promise<PokeAPITypes.ItemCategory | PokeAPITypes.ItemCategory[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.ItemCategory>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}item-category/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.ItemCategory>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}item-category/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getItemFlingEffectByName(nameOrId: string | number, callback?: (result: PokeAPITypes.ItemFlingEffect | PokeAPITypes.ItemFlingEffect[], error?: any) => any): Promise<PokeAPITypes.ItemFlingEffect>;
    async getItemFlingEffectByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.ItemFlingEffect[], error?: any) => any): Promise<PokeAPITypes.ItemFlingEffect[]>;
    async getItemFlingEffectByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.ItemFlingEffect, error?: any) => any) & ((result: PokeAPITypes.ItemFlingEffect[], error?: any) => any)): Promise<PokeAPITypes.ItemFlingEffect | PokeAPITypes.ItemFlingEffect[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.ItemFlingEffect>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}item-fling-effect/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.ItemFlingEffect>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}item-fling-effect/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getItemPocketByName(nameOrId: string | number, callback?: (result: PokeAPITypes.ItemPocket | PokeAPITypes.ItemPocket[], error?: any) => any): Promise<PokeAPITypes.ItemPocket>;
    async getItemPocketByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.ItemPocket[], error?: any) => any): Promise<PokeAPITypes.ItemPocket[]>;
    async getItemPocketByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.ItemPocket, error?: any) => any) & ((result: PokeAPITypes.ItemPocket[], error?: any) => any)): Promise<PokeAPITypes.ItemPocket | PokeAPITypes.ItemPocket[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.ItemPocket>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}item-pocket/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.ItemPocket>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}item-pocket/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getMachineById(id: number, callback?: (result: PokeAPITypes.Machine | PokeAPITypes.Machine[], error?: any) => any): Promise<PokeAPITypes.Machine>;
    async getMachineById(id: number[], callback?: (result: PokeAPITypes.Machine[], error?: any) => any): Promise<PokeAPITypes.Machine[]>;
    async getMachineById(id: number | number[], callback?: ((result: PokeAPITypes.Machine, error?: any) => any) & ((result: PokeAPITypes.Machine[], error?: any) => any)): Promise<PokeAPITypes.Machine | PokeAPITypes.Machine[]> {
        try {
            if (id) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof id === 'number' || typeof id === 'string') {
                return getJSON<PokeAPITypes.Machine>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}machine/${id}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof id === 'object') {
                const mapper = async (ids: number | number[]) => {
                  const queryRes = await getJSON<PokeAPITypes.Machine>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}machine/${ids}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(id, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "id" must be a number or array of numbers');
              }
            } else {
              throw new Error('Param "id" is required (Must be a number or array of numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getMoveByName(nameOrId: string | number, callback?: (result: PokeAPITypes.Move | PokeAPITypes.Move[], error?: any) => any): Promise<PokeAPITypes.Move>;
    async getMoveByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.Move[], error?: any) => any): Promise<PokeAPITypes.Move[]>;
    async getMoveByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.Move, error?: any) => any) & ((result: PokeAPITypes.Move[], error?: any) => any)): Promise<PokeAPITypes.Move | PokeAPITypes.Move[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.Move>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.Move>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getMoveAilmentByName(nameOrId: string | number, callback?: (result: PokeAPITypes.MoveAilment | PokeAPITypes.MoveAilment[], error?: any) => any): Promise<PokeAPITypes.MoveAilment>;
    async getMoveAilmentByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.MoveAilment[], error?: any) => any): Promise<PokeAPITypes.MoveAilment[]>;
    async getMoveAilmentByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.MoveAilment, error?: any) => any) & ((result: PokeAPITypes.MoveAilment[], error?: any) => any)): Promise<PokeAPITypes.MoveAilment | PokeAPITypes.MoveAilment[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.MoveAilment>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move-ailment/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.MoveAilment>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move-ailment/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getMoveBattleStyleByName(nameOrId: string | number, callback?: (result: PokeAPITypes.MoveBattleStyle | PokeAPITypes.MoveBattleStyle[], error?: any) => any): Promise<PokeAPITypes.MoveBattleStyle>;
    async getMoveBattleStyleByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.MoveBattleStyle[], error?: any) => any): Promise<PokeAPITypes.MoveBattleStyle[]>;
    async getMoveBattleStyleByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.MoveBattleStyle, error?: any) => any) & ((result: PokeAPITypes.MoveBattleStyle[], error?: any) => any)): Promise<PokeAPITypes.MoveBattleStyle | PokeAPITypes.MoveBattleStyle[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.MoveBattleStyle>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move-battle-style/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.MoveBattleStyle>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move-battle-style/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getMoveCategoryByName(nameOrId: string | number, callback?: (result: PokeAPITypes.MoveCategory | PokeAPITypes.MoveCategory[], error?: any) => any): Promise<PokeAPITypes.MoveCategory>;
    async getMoveCategoryByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.MoveCategory[], error?: any) => any): Promise<PokeAPITypes.MoveCategory[]>;
    async getMoveCategoryByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.MoveCategory, error?: any) => any) & ((result: PokeAPITypes.MoveCategory[], error?: any) => any)): Promise<PokeAPITypes.MoveCategory | PokeAPITypes.MoveCategory[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.MoveCategory>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move-category/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.MoveCategory>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move-category/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getMoveDamageClassByName(nameOrId: string | number, callback?: (result: PokeAPITypes.MoveDamageClass | PokeAPITypes.MoveDamageClass[], error?: any) => any): Promise<PokeAPITypes.MoveDamageClass>;
    async getMoveDamageClassByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.MoveDamageClass[], error?: any) => any): Promise<PokeAPITypes.MoveDamageClass[]>;
    async getMoveDamageClassByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.MoveDamageClass, error?: any) => any) & ((result: PokeAPITypes.MoveDamageClass[], error?: any) => any)): Promise<PokeAPITypes.MoveDamageClass | PokeAPITypes.MoveDamageClass[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.MoveDamageClass>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move-damage-class/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.MoveDamageClass>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move-damage-class/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getMoveLearnMethodByName(nameOrId: string | number, callback?: (result: PokeAPITypes.MoveLearnMethod | PokeAPITypes.MoveLearnMethod[], error?: any) => any): Promise<PokeAPITypes.MoveLearnMethod>;
    async getMoveLearnMethodByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.MoveLearnMethod[], error?: any) => any): Promise<PokeAPITypes.MoveLearnMethod[]>;
    async getMoveLearnMethodByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.MoveLearnMethod, error?: any) => any) & ((result: PokeAPITypes.MoveLearnMethod[], error?: any) => any)): Promise<PokeAPITypes.MoveLearnMethod | PokeAPITypes.MoveLearnMethod[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.MoveLearnMethod>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move-learn-method/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.MoveLearnMethod>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move-learn-method/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getMoveTargetByName(nameOrId: string | number, callback?: (result: PokeAPITypes.MoveTarget | PokeAPITypes.MoveTarget[], error?: any) => any): Promise<PokeAPITypes.MoveTarget>;
    async getMoveTargetByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.MoveTarget[], error?: any) => any): Promise<PokeAPITypes.MoveTarget[]>;
    async getMoveTargetByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.MoveTarget, error?: any) => any) & ((result: PokeAPITypes.MoveTarget[], error?: any) => any)): Promise<PokeAPITypes.MoveTarget | PokeAPITypes.MoveTarget[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.MoveTarget>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move-target/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.MoveTarget>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}move-target/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getLocationByName(nameOrId: string | number, callback?: (result: PokeAPITypes.Location | PokeAPITypes.Location[], error?: any) => any): Promise<PokeAPITypes.Location>;
    async getLocationByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.Location[], error?: any) => any): Promise<PokeAPITypes.Location[]>;
    async getLocationByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.Location, error?: any) => any) & ((result: PokeAPITypes.Location[], error?: any) => any)): Promise<PokeAPITypes.Location | PokeAPITypes.Location[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.Location>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}location/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.Location>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}location/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getLocationAreaByName(nameOrId: string | number, callback?: (result: PokeAPITypes.LocationArea | PokeAPITypes.LocationArea[], error?: any) => any): Promise<PokeAPITypes.LocationArea>;
    async getLocationAreaByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.LocationArea[], error?: any) => any): Promise<PokeAPITypes.LocationArea[]>;
    async getLocationAreaByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.LocationArea, error?: any) => any) & ((result: PokeAPITypes.LocationArea[], error?: any) => any)): Promise<PokeAPITypes.LocationArea | PokeAPITypes.LocationArea[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.LocationArea>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}location-area/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.LocationArea>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}location-area/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getPalParkAreaByName(nameOrId: string | number, callback?: (result: PokeAPITypes.PalParkArea | PokeAPITypes.PalParkArea[], error?: any) => any): Promise<PokeAPITypes.PalParkArea>;
    async getPalParkAreaByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.PalParkArea[], error?: any) => any): Promise<PokeAPITypes.PalParkArea[]>;
    async getPalParkAreaByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.PalParkArea, error?: any) => any) & ((result: PokeAPITypes.PalParkArea[], error?: any) => any)): Promise<PokeAPITypes.PalParkArea | PokeAPITypes.PalParkArea[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.PalParkArea>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pal-park-area/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.PalParkArea>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pal-park-area/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getRegionByName(nameOrId: string | number, callback?: (result: PokeAPITypes.Region | PokeAPITypes.Region[], error?: any) => any): Promise<PokeAPITypes.Region>;
    async getRegionByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.Region[], error?: any) => any): Promise<PokeAPITypes.Region[]>;
    async getRegionByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.Region, error?: any) => any) & ((result: PokeAPITypes.Region[], error?: any) => any)): Promise<PokeAPITypes.Region | PokeAPITypes.Region[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.Region>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}region/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.Region>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}region/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getAbilityByName(nameOrId: string | number, callback?: (result: PokeAPITypes.Ability | PokeAPITypes.Ability[], error?: any) => any): Promise<PokeAPITypes.Ability>;
    async getAbilityByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.Ability[], error?: any) => any): Promise<PokeAPITypes.Ability[]>;
    async getAbilityByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.Ability, error?: any) => any) & ((result: PokeAPITypes.Ability[], error?: any) => any)): Promise<PokeAPITypes.Ability | PokeAPITypes.Ability[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.Ability>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}ability/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.Ability>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}ability/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getCharacteristicById(id: number, callback?: (result: PokeAPITypes.Characteristic | PokeAPITypes.Characteristic[], error?: any) => any): Promise<PokeAPITypes.Characteristic>;
    async getCharacteristicById(id: number[], callback?: (result: PokeAPITypes.Characteristic[], error?: any) => any): Promise<PokeAPITypes.Characteristic[]>;
    async getCharacteristicById(id: number | number[], callback?: ((result: PokeAPITypes.Characteristic, error?: any) => any) & ((result: PokeAPITypes.Characteristic[], error?: any) => any)): Promise<PokeAPITypes.Characteristic | PokeAPITypes.Characteristic[]> {
        try {
            if (id) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof id === 'number' || typeof id === 'string') {
                return getJSON<PokeAPITypes.Characteristic>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}characteristic/${id}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof id === 'object') {
                const mapper = async (ids: number | number[]) => {
                  const queryRes = await getJSON<PokeAPITypes.Characteristic>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}characteristic/${ids}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(id, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "id" must be a number or array of numbers');
              }
            } else {
              throw new Error('Param "id" is required (Must be a number or array of numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getEggGroupByName(nameOrId: string | number, callback?: (result: PokeAPITypes.EggGroup | PokeAPITypes.EggGroup[], error?: any) => any): Promise<PokeAPITypes.EggGroup>;
    async getEggGroupByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.EggGroup[], error?: any) => any): Promise<PokeAPITypes.EggGroup[]>;
    async getEggGroupByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.EggGroup, error?: any) => any) & ((result: PokeAPITypes.EggGroup[], error?: any) => any)): Promise<PokeAPITypes.EggGroup | PokeAPITypes.EggGroup[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.EggGroup>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}egg-group/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.EggGroup>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}egg-group/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getGenderByName(nameOrId: string | number, callback?: (result: PokeAPITypes.Gender | PokeAPITypes.Gender[], error?: any) => any): Promise<PokeAPITypes.Gender>;
    async getGenderByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.Gender[], error?: any) => any): Promise<PokeAPITypes.Gender[]>;
    async getGenderByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.Gender, error?: any) => any) & ((result: PokeAPITypes.Gender[], error?: any) => any)): Promise<PokeAPITypes.Gender | PokeAPITypes.Gender[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.Gender>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}gender/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.Gender>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}gender/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getGrowthRateByName(nameOrId: string | number, callback?: (result: PokeAPITypes.GrowthRate | PokeAPITypes.GrowthRate[], error?: any) => any): Promise<PokeAPITypes.GrowthRate>;
    async getGrowthRateByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.GrowthRate[], error?: any) => any): Promise<PokeAPITypes.GrowthRate[]>;
    async getGrowthRateByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.GrowthRate, error?: any) => any) & ((result: PokeAPITypes.GrowthRate[], error?: any) => any)): Promise<PokeAPITypes.GrowthRate | PokeAPITypes.GrowthRate[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.GrowthRate>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}growth-rate/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.GrowthRate>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}growth-rate/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getNatureByName(nameOrId: string | number, callback?: (result: PokeAPITypes.Nature | PokeAPITypes.Nature[], error?: any) => any): Promise<PokeAPITypes.Nature>;
    async getNatureByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.Nature[], error?: any) => any): Promise<PokeAPITypes.Nature[]>;
    async getNatureByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.Nature, error?: any) => any) & ((result: PokeAPITypes.Nature[], error?: any) => any)): Promise<PokeAPITypes.Nature | PokeAPITypes.Nature[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.Nature>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}nature/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.Nature>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}nature/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getPokeathlonStatByName(nameOrId: string | number, callback?: (result: PokeAPITypes.PokeathlonStat | PokeAPITypes.PokeathlonStat[], error?: any) => any): Promise<PokeAPITypes.PokeathlonStat>;
    async getPokeathlonStatByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.PokeathlonStat[], error?: any) => any): Promise<PokeAPITypes.PokeathlonStat[]>;
    async getPokeathlonStatByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.PokeathlonStat, error?: any) => any) & ((result: PokeAPITypes.PokeathlonStat[], error?: any) => any)): Promise<PokeAPITypes.PokeathlonStat | PokeAPITypes.PokeathlonStat[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.PokeathlonStat>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokeathlon-stat/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.PokeathlonStat>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokeathlon-stat/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getPokemonByName(nameOrId: string | number, callback?: (result: PokeAPITypes.Pokemon | PokeAPITypes.Pokemon[], error?: any) => any): Promise<PokeAPITypes.Pokemon>;
    async getPokemonByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.Pokemon[], error?: any) => any): Promise<PokeAPITypes.Pokemon[]>;
    async getPokemonByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.Pokemon, error?: any) => any) & ((result: PokeAPITypes.Pokemon[], error?: any) => any)): Promise<PokeAPITypes.Pokemon | PokeAPITypes.Pokemon[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.Pokemon>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokemon/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.Pokemon>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokemon/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getPokemonColorByName(nameOrId: string | number, callback?: (result: PokeAPITypes.PokemonColor | PokeAPITypes.PokemonColor[], error?: any) => any): Promise<PokeAPITypes.PokemonColor>;
    async getPokemonColorByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.PokemonColor[], error?: any) => any): Promise<PokeAPITypes.PokemonColor[]>;
    async getPokemonColorByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.PokemonColor, error?: any) => any) & ((result: PokeAPITypes.PokemonColor[], error?: any) => any)): Promise<PokeAPITypes.PokemonColor | PokeAPITypes.PokemonColor[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.PokemonColor>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokemon-color/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.PokemonColor>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokemon-color/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getPokemonFormByName(nameOrId: string | number, callback?: (result: PokeAPITypes.PokemonForm | PokeAPITypes.PokemonForm[], error?: any) => any): Promise<PokeAPITypes.PokemonForm>;
    async getPokemonFormByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.PokemonForm[], error?: any) => any): Promise<PokeAPITypes.PokemonForm[]>;
    async getPokemonFormByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.PokemonForm, error?: any) => any) & ((result: PokeAPITypes.PokemonForm[], error?: any) => any)): Promise<PokeAPITypes.PokemonForm | PokeAPITypes.PokemonForm[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.PokemonForm>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokemon-form/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.PokemonForm>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokemon-form/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getPokemonHabitatByName(nameOrId: string | number, callback?: (result: PokeAPITypes.PokemonHabitat | PokeAPITypes.PokemonHabitat[], error?: any) => any): Promise<PokeAPITypes.PokemonHabitat>;
    async getPokemonHabitatByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.PokemonHabitat[], error?: any) => any): Promise<PokeAPITypes.PokemonHabitat[]>;
    async getPokemonHabitatByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.PokemonHabitat, error?: any) => any) & ((result: PokeAPITypes.PokemonHabitat[], error?: any) => any)): Promise<PokeAPITypes.PokemonHabitat | PokeAPITypes.PokemonHabitat[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.PokemonHabitat>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokemon-habitat/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.PokemonHabitat>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokemon-habitat/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getPokemonShapeByName(nameOrId: string | number, callback?: (result: PokeAPITypes.PokemonShape | PokeAPITypes.PokemonShape[], error?: any) => any): Promise<PokeAPITypes.PokemonShape>;
    async getPokemonShapeByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.PokemonShape[], error?: any) => any): Promise<PokeAPITypes.PokemonShape[]>;
    async getPokemonShapeByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.PokemonShape, error?: any) => any) & ((result: PokeAPITypes.PokemonShape[], error?: any) => any)): Promise<PokeAPITypes.PokemonShape | PokeAPITypes.PokemonShape[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.PokemonShape>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokemon-shape/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.PokemonShape>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokemon-shape/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getPokemonSpeciesByName(nameOrId: string | number, callback?: (result: PokeAPITypes.PokemonSpecies | PokeAPITypes.PokemonSpecies[], error?: any) => any): Promise<PokeAPITypes.PokemonSpecies>;
    async getPokemonSpeciesByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.PokemonSpecies[], error?: any) => any): Promise<PokeAPITypes.PokemonSpecies[]>;
    async getPokemonSpeciesByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.PokemonSpecies, error?: any) => any) & ((result: PokeAPITypes.PokemonSpecies[], error?: any) => any)): Promise<PokeAPITypes.PokemonSpecies | PokeAPITypes.PokemonSpecies[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.PokemonSpecies>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokemon-species/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.PokemonSpecies>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}pokemon-species/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getStatByName(nameOrId: string | number, callback?: (result: PokeAPITypes.Stat | PokeAPITypes.Stat[], error?: any) => any): Promise<PokeAPITypes.Stat>;
    async getStatByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.Stat[], error?: any) => any): Promise<PokeAPITypes.Stat[]>;
    async getStatByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.Stat, error?: any) => any) & ((result: PokeAPITypes.Stat[], error?: any) => any)): Promise<PokeAPITypes.Stat | PokeAPITypes.Stat[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.Stat>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}stat/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.Stat>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}stat/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getTypeByName(nameOrId: string | number, callback?: (result: PokeAPITypes.Type | PokeAPITypes.Type[], error?: any) => any): Promise<PokeAPITypes.Type>;
    async getTypeByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.Type[], error?: any) => any): Promise<PokeAPITypes.Type[]>;
    async getTypeByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.Type, error?: any) => any) & ((result: PokeAPITypes.Type[], error?: any) => any)): Promise<PokeAPITypes.Type | PokeAPITypes.Type[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.Type>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}type/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.Type>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}type/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getLanguageByName(nameOrId: string | number, callback?: (result: PokeAPITypes.Language | PokeAPITypes.Language[], error?: any) => any): Promise<PokeAPITypes.Language>;
    async getLanguageByName(nameOrId: Array<string | number>, callback?: (result: PokeAPITypes.Language[], error?: any) => any): Promise<PokeAPITypes.Language[]>;
    async getLanguageByName(nameOrId: string | number | Array<string | number>, callback?: ((result: PokeAPITypes.Language, error?: any) => any) & ((result: PokeAPITypes.Language[], error?: any) => any)): Promise<PokeAPITypes.Language | PokeAPITypes.Language[]> {
        try {
            if (nameOrId) {
              // If the user has submitted a Name or an ID, return the JSON promise
              if (typeof nameOrId === 'number' || typeof nameOrId === 'string') {
                return getJSON<PokeAPITypes.Language>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}language/${nameOrId}/`, callback);
              }

              // If the user has submitted an Array return a new promise which will
              // resolve when all getJSON calls are ended
              else if (typeof nameOrId === 'object') {
                const mapper = async (nameOrIds: string | number | Array<string | number>) => {
                  const queryRes = await getJSON<PokeAPITypes.Language>(this.options, `${this.options.protocol}${this.options.hostName}${this.options.versionPath}language/${nameOrIds}/`);
                  return queryRes;
                };

                // Fetch data asynchronously to be faster
                const mappedResults = await pMap(nameOrId, mapper, { concurrency: 4 });

                if (callback) {
                  callback(mappedResults);
                }

                return mappedResults;
              } else {
                throw new Error('Param "nameOrId" must be a string, array of strings or array of string and/or numbers');
              }
            } else {
              throw new Error('Param "nameOrId" is required (Must be a string, array of strings or array of string and/or numbers )');
            }
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getBerriesList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getBerriesFirmnessList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    /** @deprecated will be removed on a future version. Use {@link getBerriesFirmnessList} instead */
    async getBerriesFirmnesssList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getBerriesFlavorsList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getContestTypesList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getContestEffectsList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.APIResourceList, error?: any) => any): Promise<PokeAPITypes.APIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getSuperContestEffectsList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.APIResourceList, error?: any) => any): Promise<PokeAPITypes.APIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getEncounterMethodsList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getEncounterConditionsList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getEncounterConditionValuesList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getEvolutionChainsList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.APIResourceList, error?: any) => any): Promise<PokeAPITypes.APIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getEvolutionTriggersList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getGenerationsList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    /** @deprecated will be removed on a future version. Use {@link getPokedexList} instead */
    async getPokedexsList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getPokedexList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getVersionsList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getVersionGroupsList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getItemsList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getItemAttributesList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getItemCategoriesList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getItemFlingEffectsList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getItemPocketsList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getMachinesList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.APIResourceList, error?: any) => any): Promise<PokeAPITypes.APIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getMovesList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getMoveAilmentsList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getMoveBattleStylesList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getMoveCategoriesList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getMoveDamageClassesList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getMoveLearnMethodsList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getMoveTargetsList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getLocationsList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getLocationAreasList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getPalParkAreasList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getRegionsList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getAbilitiesList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getCharacteristicsList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.APIResourceList, error?: any) => any): Promise<PokeAPITypes.APIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getEggGroupsList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getGendersList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getGrowthRatesList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getNaturesList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getPokeathlonStatsList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getPokemonsList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getPokemonColorsList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getPokemonFormsList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getPokemonHabitatsList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getPokemonShapesList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getPokemonSpeciesList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getStatsList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getTypesList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getLanguagesList(interval?: ListEndpointOptions, callback?: (result: PokeAPITypes.NamedAPIResourceList, error?: any) => any): Promise<PokeAPITypes.NamedAPIResourceList> {
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
          } catch (error) {
            handleError(error, callback);
          }
    }

    async getEndpointsList(interval?: ListEndpointOptions, callback?: (result: any, error?: any) => any): Promise<PokeAPITypes.EndpointsList> {

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
        } catch (error) {
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
