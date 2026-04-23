import fs from 'fs';
import path from 'path';
import { MethodDeclarationStructure, OptionalKind, Project } from 'ts-morph';

import endpoints from '../src/utils/Endpoints.js';
import rootEndpoints from '../src/utils/RootEndpoints.js';
import {
  apiMapFile, mainFile, mainLabel, typeFile,
} from './Utils.js';

// Shared concurrency for generated array-fetch helpers.
const PMAP_CONCURRENCY = 4;

// Body template for endpoints that take an id / nameOrId (single or array)
function buildItemMethodBody(opts: {
  inputParam: string;
  inputParamType: string;
  returnType: string;
  endpoint: string;
  paramTypeDescription: string;
}): string {
  const {
    inputParam, inputParamType, returnType, endpoint, paramTypeDescription,
  } = opts;
  return `try {
    // Fail if the param is not supplied
    if (!${inputParam}) {
      throw new Error('Param "${inputParam}" is required (Must be a ${paramTypeDescription} )');
    }

    // Fail if the input types aren't accepted
    if (!Array.isArray(${inputParam}) && typeof ${inputParam} !== 'number' && typeof ${inputParam} !== 'string') {
    throw new Error('Param "${inputParam}" must be a ${paramTypeDescription}');
    }

    // If the user has submitted a Name or an ID, return the JSON promise
    if (typeof ${inputParam} === 'number' || typeof ${inputParam} === 'string') {
      return getJSON<${returnType}>(this.options, \`\${this.options.protocol}\${this.options.hostName}\${this.options.versionPath}${endpoint}/\${${inputParam}}/\`, callback);
    }

    // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
    const mapper = (${inputParam}s: ${inputParamType}) => getJSON<${returnType}>(this.options, \`\${this.options.protocol}\${this.options.hostName}\${this.options.versionPath}${endpoint}/\${${inputParam}s}/\`);

    // Fetch data asynchronously to be faster
    const mappedResults = await pMap(${inputParam}, mapper, { concurrency: ${PMAP_CONCURRENCY} });

    // Invoke the callback if we have one
    if (callback) {
      callback(mappedResults);
    }

    return mappedResults;
} catch (error) {
    handleError(error, callback);
}`;
}

// Body template for paginated list endpoints. Empty rawEndpoint targets the API root listing.
function buildListMethodBody(rawEndpoint: string): string {
  return `try {
    let { limit, offset } = this.options;

    if (interval) {
      if ('limit' in interval) {
        limit = interval.limit;
      }

      if ('offset' in interval) {
        offset = interval.offset;
      }
    }

    return getJSON(this.options, \`\${this.options.protocol}\${this.options.hostName}\${this.options.versionPath}${rawEndpoint}?limit=\${limit}&offset=\${offset}\`, callback);
  } catch (error) {
    handleError(error, callback);
  }`;
}

console.time(mainLabel);
console.timeLog(mainLabel, '- Starting to main class...');

// Initialize the project
const project = new Project({
  tsConfigFilePath: path.resolve('./tsconfig.json'),
});

// Rebuild the runtime entrypoint from scratch on every generation pass.
const indexFile = project.createSourceFile(mainFile, `/* eslint-disable */
/*
* DO NOT MODIFY, THIS IS AUTO GENERATED
* Execute \`npm run generate\` to regenerate
*/`, { overwrite: true });

// Get the types file
const declarationFile = project.getSourceFile(typeFile);

// Get the types module
const existingDeclarationModule = declarationFile.getModuleOrThrow('\'pokedex-promise-v2\'');

// Remove the existing export assignment if present
const existingDeclarationExports = existingDeclarationModule.getExportAssignments();
if (existingDeclarationExports.length >= 1) {
  existingDeclarationExports[0].remove();
}

// Gets the default types class and remove it if it exists
const existingDeclarationClass = existingDeclarationModule.getClass('PokeAPI');
if (existingDeclarationClass) {
  existingDeclarationClass.remove();
}

// Create the updated class
const declarationClass = existingDeclarationModule.addClass({
  name: 'PokeAPI',
});

// TypesGenerator writes this map so method generation can stay schema-driven.
const apiMap = JSON.parse(fs.readFileSync(apiMapFile).toString());

// Import dependencies
const generatedImports: { defaultImport: string; moduleSpecifier: string }[] = [
  { defaultImport: 'pMap', moduleSpecifier: 'p-map' },
  { defaultImport: 'NodeCache', moduleSpecifier: 'node-cache' },
  { defaultImport: 'PokeAPITypes', moduleSpecifier: 'pokedex-promise-v2' },
  { defaultImport: 'ListEndpointOptions', moduleSpecifier: './interfaces/ListEndpointOptions.js' },
  { defaultImport: 'PokeAPIOptions', moduleSpecifier: './interfaces/PokeAPIOptions.js' },
  { defaultImport: 'handleError', moduleSpecifier: './utils/ErrorHandler.js' },
  { defaultImport: 'getJSON', moduleSpecifier: './utils/Getter.js' },
];

generatedImports.forEach((decl) => indexFile.addImportDeclaration(decl));

// Add the main PokeAPI class
const pokeApiClass = indexFile.addClass({
  name: 'Pokedex',
}).setIsDefaultExport(true);

// Add options
pokeApiClass.addProperty({
  name: 'options',
  type: 'PokeAPIOptions',
});

// Create constructor
const classConstructor = {
  parameters: [{
    name: 'options',
    type: 'PokeAPIOptions',
    hasQuestionToken: true,
  }],
};

// Add the constructor typing to the class
pokeApiClass.addConstructor(classConstructor)
  .setBodyText('this.options = new PokeAPIOptions(options, new NodeCache());');
declarationClass.addConstructor(classConstructor);

// Timestamp
console.timeLog(mainLabel, ' - Base generated, generating methods...');

// This generic fetch helper is handwritten because it is not tied to one schema endpoint.
const getResourceCode = `try {
  // Fail if the endpoint is not supplied
  if (!endpoint) {
    throw new Error('Param "endpoint" is required and must be a string or array of strings');
  }

  // Fail if the input types aren't accepted
  if (!Array.isArray(endpoint) && typeof endpoint !== 'string') {
    throw new Error('Param "endpoint" needs to be a string or array of strings');
  }

  // If the user has submitted a string, return the JSON promise
  if (typeof endpoint === 'string') {
    return getJSON<any>(this.options, endpoint, callback);
  }

  // If the user has submitted an Array return a new promise which will resolve when all getJSON calls are ended
  const mapper = (endpoints: string) => getJSON<any>(this.options, endpoints);

  // Fetch data asynchronously to be faster
  const mappedResults = await pMap(endpoint, mapper, { concurrency: ${PMAP_CONCURRENCY} });

  if (callback) {
    callback(mappedResults);
  }

  return mappedResults;
} catch (error) {
  handleError(error, callback);
}`;

let methodStructure: OptionalKind<MethodDeclarationStructure> = {
  name: 'getResource',
  isAsync: true,
  parameters: [{
    name: 'endpoint',
    type: 'string | string[]',
  },
  {
    name: 'callback',
    type: '(result: any | any[], error?: any) => any',
    hasQuestionToken: true,
  }],
  returnType: 'Promise<any | any[]>',
  overloads: [
    {
      parameters: [
        {
          name: 'endpoint',
          type: 'string',
        },
        {
          name: 'callback',
          type: '(result: any, error?: any) => any',
          hasQuestionToken: true,
        },
      ],
      returnType: 'Promise<any>',
    },
    {
      parameters: [
        {
          name: 'endpoint',
          type: 'string[]',
        },
        {
          name: 'callback',
          type: '(result: any[], error?: any) => any',
          hasQuestionToken: true,
        },
      ],
      returnType: 'Promise<any[]>',
    },
  ],
};

// Seed the class with the shared resource helper before endpoint-specific methods.
pokeApiClass.addMethod(methodStructure).setBodyText(getResourceCode);
// Add the declaration to the types file
// Removing the async keyword
methodStructure.isAsync = false;
declarationClass.addMethod(methodStructure);

// Add the deprecated get generic resource method for backwards compatibility
methodStructure.name = 'resource';

methodStructure.isAsync = true;
pokeApiClass.addMethod(methodStructure).setBodyText(getResourceCode)
  .addJsDoc('@deprecated - will be removed on the next version. Use {@link getResource} instead');

// Add the declaration to the types file
// Removing the async keyword
methodStructure.isAsync = false;
declarationClass.addMethod(methodStructure)
  .addJsDoc('@deprecated - will be removed on the next version. Use {@link getResource} instead');

// Add all the methods from the endpoints list,
// setting the parameters typing and binding to the correct interface and endpoint
for (const [methodName, endpoint, jsdocs] of endpoints) {
  const isByName = methodName.endsWith('ByName');
  const inputParam = isByName ? 'nameOrId' : 'id';
  const inputParamType = isByName ? 'string | number | Array<string | number>' : 'number | number[]';
  const singleParamType = isByName ? 'string | number' : 'number';
  const multipleParamType = isByName ? 'Array<string | number>' : 'number[]';
  const paramTypeDescription = isByName ? 'string, array of strings or array of string and/or numbers' : 'number or array of numbers';

  const returnType = `PokeAPITypes.${apiMap[endpoint]}`;

  methodStructure = {
    name: methodName,
    isAsync: true,
    parameters: [{
      name: inputParam,
      type: inputParamType,
    },
    {
      name: 'callback',
      type: `((result: ${returnType}, error?: any) => any) & ((result: ${returnType}[], error?: any) => any)`,
      hasQuestionToken: true,
    }],
    returnType: `Promise<${returnType} | ${returnType}[]>`,
    overloads: [
      {
        parameters: [
          {
            name: inputParam,
            type: singleParamType,
          },
          {
            name: 'callback',
            type: `(result: ${returnType}, error?: any) => any`,
            hasQuestionToken: true,
          },
        ],
        returnType: `Promise<${returnType}>`,
      },
      {
        parameters: [
          {
            name: inputParam,
            type: multipleParamType,
          },
          {
            name: 'callback',
            type: `(result: ${returnType}[], error?: any) => any`,
            hasQuestionToken: true,
          },
        ],
        returnType: `Promise<${returnType}[]>`,
      },
    ],
  };

  const generatedMethod = pokeApiClass.addMethod(methodStructure).setBodyText(buildItemMethodBody({
    inputParam, inputParamType, returnType, endpoint, paramTypeDescription,
  }));

  // Add the declaration to the types file
  // Removing the async keyword
  methodStructure.isAsync = false;
  const declaredMethod = declarationClass.addMethod(methodStructure);

  // If the method has a JSDoc, add it
  if (jsdocs) {
    generatedMethod.addJsDoc(jsdocs);
    declaredMethod.addJsDoc(jsdocs);
  }
}

// Timestamp
console.timeLog(mainLabel, ' - Normal methods completed, generating methods for root endpoints...');

// Add all the get list methods from the root endpoints list,
// setting the parameters typing and binding to the correct interface and endpoint
// Also sets correctly to a named or normal list
for (const [method, rawEndpoint, jsdocs] of rootEndpoints) {
  // Remove the last slash and add '-list' to the end
  const endpoint = `${rawEndpoint.replace(/\/$/, '')}-list`;

  // If the method doesn't have a interface, skip it
  if (!apiMap[endpoint]) {
    if (method !== 'getEndpointsList') {
      console.log('Could not find interface for:', method);
    }
    continue;
  }

  // Infer the return type from the name
  const returnType = `PokeAPITypes.${apiMap[endpoint].includes('NamedList') ? 'NamedAPIResourceList' : 'APIResourceList'}`;

  const methodStructure = {
    name: method,
    isAsync: true,
    parameters: [{
      name: 'interval',
      type: 'ListEndpointOptions',
      hasQuestionToken: true,
    },
    {
      name: 'callback',
      type: `(result: ${returnType}, error?: any) => any`,
      hasQuestionToken: true,
    }],
    returnType: `Promise<${returnType}>`,
  };

  const generatedMethod = pokeApiClass.addMethod(methodStructure).setBodyText(buildListMethodBody(rawEndpoint));

  // Add the declaration to the types file
  // Removing the async keyword
  methodStructure.isAsync = false;
  const declaredMethod = declarationClass.addMethod(methodStructure);

  // If the method has a JSDoc, add it
  if (jsdocs) {
    generatedMethod.addJsDoc(jsdocs);
    declaredMethod.addJsDoc(jsdocs);
  }
}

// Add method to get the list of endpoints
methodStructure = {
  name: 'getEndpointsList',
  isAsync: true,
  parameters: [{
    name: 'interval',
    type: 'ListEndpointOptions',
    hasQuestionToken: true,
  },
  {
    name: 'callback',
    type: '(result: any, error?: any) => any',
    hasQuestionToken: true,
  }],
  returnType: 'Promise<PokeAPITypes.EndpointsList>',
};

pokeApiClass.addMethod(methodStructure).setBodyText(buildListMethodBody(''));

// Add the declaration to the types file
// Removing the async keyword
methodStructure.isAsync = false;
declarationClass.addMethod(methodStructure);

// Add method to get the config
pokeApiClass.addMethod({
  name: 'getConfig',
}).setBodyText('return this.options;').addJsDoc('Retrieve the configs used');

// Add method to get the cache size
pokeApiClass.addMethod({
  name: 'getCachedItemsCount',
}).setBodyText('return this.options.cache.stats.keys;').addJsDoc('Returns the current number of entries in the cache');

pokeApiClass.addMethod({
  name: 'cacheSize',
}).setBodyText('return this.options.cache.stats.keys;').addJsDoc('@deprecated use {@link getCachedItemsCount}');

// Add method to clear the cache
pokeApiClass.addMethod({
  name: 'clearCache',
}).setBodyText('this.options.cache.flushAll();').addJsDoc('Deletes all keys in cache');

// Export the typing
declarationClass.getParentModule().addExportAssignment({
  expression: 'PokeAPI',
});

// Sanitize the namespaces of the declaration file and format it again
declarationClass.replaceWithText(declarationClass.getFullText().replace(/PokeAPITypes/g, 'PokeAPI'));
declarationClass.formatText();

(async () => {
  try {
    await indexFile.save();
    await declarationFile.save();
    await project.emit();
    console.timeEnd(mainLabel);
    console.log('Main class generated!');
  } catch (error) {
    console.error('Main generation failed:', error);
    process.exit(1);
  }
})();
