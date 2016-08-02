(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("async"), require("request-promise"), require("memory-cache"));
	else if(typeof define === 'function' && define.amd)
		define(["async", "request-promise", "memory-cache"], factory);
	else if(typeof exports === 'object')
		exports["pokedex-promise-v2"] = factory(require("async"), require("request-promise"), require("memory-cache"));
	else
		root["pokedex-promise-v2"] = factory(root["async"], root["request-promise"], root["memory-cache"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _async = __webpack_require__(1);

	var _async2 = _interopRequireDefault(_async);

	var _endpoints = __webpack_require__(2);

	var _endpoints2 = _interopRequireDefault(_endpoints);

	var _default = __webpack_require__(3);

	var _getter = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Pokedex = function () {
	    function Pokedex(config) {
	        if (config) {
	            if (config.protocol) {
	                _default.values.setProtocol(config.protocol);
	            }
	            if (config.hostName) {
	                _default.values.setHostName(config.hostName);
	            }
	            if (config.versionPath) {
	                _default.values.setVersionPath(config.versionPath);
	            }
	        }
	    }

	    // add to Pokedex.prototype all our endpoint functions
	    _endpoints2.default.forEach(function (endpoint) {
	        Pokedex.prototype[endpoint[0]] = function (input, cb) {
	            if (input) {

	                // if the user has submitted a Name or an Id, return the Json promise
	                if (typeof input === 'number' || typeof input === 'string') {
	                    return (0, _getter.getJSON)(_default.values.protocol + _default.values.hostName + _default.values.versionPath + endpoint[1] + '/' + input + '/', cb);
	                }

	                // if the user has submitted an Array
	                // return a new promise which will resolve when all getJSON calls are ended
	                else if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object') {
	                        var _ret = function () {
	                            var toReturn = [];
	                            return {
	                                v: new Promise(function (resolve, reject) {

	                                    // fetch data asynchronously to be faster
	                                    _async2.default.forEachOf(input, function (name) {

	                                        //get current input data and then try to resolve
	                                        (0, _getter.getJSON)(_default.values.protocol + _default.values.hostName + _default.values.versionPath + endpoint[1] + '/' + name + '/', function (response) {
	                                            toReturn.push(response);
	                                            if (toReturn.length === input.length) {
	                                                if (cb) {
	                                                    cb(toReturn);
	                                                }
	                                                resolve(toReturn);
	                                            }
	                                        });
	                                    });
	                                })
	                            };
	                        }();

	                        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	                    }
	            }
	        };
	    });
	    return Pokedex;
	}();

	module.exports = Pokedex;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("async");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = [
		[
			"getBerryByName",
			"berry"
		],
		[
			"getBerryFirmnessByName",
			"berry-firmness"
		],
		[
			"getBerryFlavorByName",
			"berry-flavor"
		],
		[
			"getContestTypeByName",
			"contest-type"
		],
		[
			"getContestEffectById",
			"contest-effect"
		],
		[
			"getSuperContestEffectById",
			"super-contest-effect"
		],
		[
			"getEncounterMethodByName",
			"encounter-method"
		],
		[
			"getEncounterConditionByName",
			"encounter-condition"
		],
		[
			"getEncounterConditionValueByName",
			"encounter-condition-value"
		],
		[
			"getEvolutionChainById",
			"evolution-chain"
		],
		[
			"getEvolutionTriggerByName",
			"evolution-trigger"
		],
		[
			"getGenerationByName",
			"generation"
		],
		[
			"getPokedexByName",
			"pokedex"
		],
		[
			"getVersionByName",
			"version"
		],
		[
			"getVersionGroupByName",
			"version-group"
		],
		[
			"getItemByName",
			"item"
		],
		[
			"getItemAttributeByName",
			"item-attribute"
		],
		[
			"getItemCategoryByName",
			"item-category"
		],
		[
			"getItemFlingEffectByName",
			"item-fling-effect"
		],
		[
			"getItemPocketByName",
			"item-pocket"
		],
		[
			"getMoveByName",
			"move"
		],
		[
			"getMoveAilmentByName",
			"move-ailment"
		],
		[
			"getMoveBattleStyleByName",
			"move-battle-style"
		],
		[
			"getMoveCategoryByName",
			"move-category"
		],
		[
			"getMoveDamageClassByName",
			"move-damage-class"
		],
		[
			"getMoveLearnMethodByName",
			"move-learn-method"
		],
		[
			"getMoveTargetByName",
			"move-target"
		],
		[
			"getLocationByName",
			"location"
		],
		[
			"getLocationAreaByName",
			"location-area"
		],
		[
			"getPalParkAreaByName",
			"pal-park-area"
		],
		[
			"getRegionByName",
			"region"
		],
		[
			"getAbilityByName",
			"ability"
		],
		[
			"getCharacteristicById",
			"characteristic"
		],
		[
			"getEggGroupByName",
			"egg-group"
		],
		[
			"getGenderByName",
			"gender"
		],
		[
			"getGrowthRateByName",
			"growth-rate"
		],
		[
			"getNatureByName",
			"nature"
		],
		[
			"getPokeathlonStatByName",
			"pokeathlon-stat"
		],
		[
			"getPokemonByName",
			"pokemon"
		],
		[
			"getPokemonColorByName",
			"pokemon-color"
		],
		[
			"getPokemonFormByName",
			"pokemon-form"
		],
		[
			"getPokemonHabitatByName",
			"pokemon-habitat"
		],
		[
			"getPokemonShapeByName",
			"pokemon-shape"
		],
		[
			"getPokemonSpeciesByName",
			"pokemon-species"
		],
		[
			"getStatByName",
			"stat"
		],
		[
			"getTypeByName",
			"type"
		],
		[
			"getLanguageByName",
			"language"
		]
	];

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var values = {};

	values.protocol = 'http';
	values.hostName = '://pokeapi.co';
	values.versionPath = '/api/v2/';

	values.setProtocol = function (newProtocol) {
	    values.protocol = newProtocol;
	};
	values.setHostName = function (newHostName) {
	    values.hostName = '://' + newHostName;
	};
	values.setVersionPath = function (newVersionPath) {
	    values.versionPath = newVersionPath;
	};

	exports.values = values;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getJSON = undefined;

	var _requestPromise = __webpack_require__(5);

	var _requestPromise2 = _interopRequireDefault(_requestPromise);

	var _memoryCache = __webpack_require__(6);

	var _memoryCache2 = _interopRequireDefault(_memoryCache);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CACHE_LIMIT = 1000000 * 1000; // 11 days

	var getJSON = function getJSON(url, cb) {

	    // retrive possible content from volatile memory
	    var cachedResult = _memoryCache2.default.get(url);
	    if (cachedResult !== null) {
	        return new Promise(function (resolve, reject) {
	            if (cb) {
	                // call callback without errors
	                cb(cachedResult, false);
	            }
	            resolve(cachedResult);
	        });
	    } else {
	        // retrive data from the web
	        var options = {
	            url: url,
	            json: true
	        };
	        return _requestPromise2.default.get(options).catch(function (error) {
	            if (!cb) {
	                // throw if a Promise
	                throw error;
	            } else {
	                // call the callback with error as second parameter
	                cb('error', error);
	            }
	        }).then(function (response) {
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
	                    _memoryCache2.default.put(url, response, CACHE_LIMIT);

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

	exports.getJSON = getJSON;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("request-promise");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("memory-cache");

/***/ }
/******/ ])
});
;