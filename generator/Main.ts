import fs from 'fs';
import path from 'path';
import { MethodDeclarationStructure, OptionalKind, Project } from 'ts-morph';

import endpoints from '../src/utils/Endpoints.js';
import rootEndpoints from '../src/utils/RootEndpoints.js';
import {
  apiMapFile, mainFile, mainLabel, typeFile,
} from './Utils.js';

console.time(mainLabel);
console.timeLog(mainLabel, '- Starting to main class...');

// Initialize the project
const project = new Project({
  tsConfigFilePath: path.resolve('./tsconfig.json'),
});

// Create the main index.ts
const indexFile = project.createSourceFile(mainFile, `/* eslint-disable */
/*
* DO NOT MODIFY, THIS IS AUTO GENERATED
* Execute \`npm run generate\` to regenerate
*/`, { overwrite: true });

// Get the types file
const declarationFile = project.getSourceFile(typeFile);

// Get the types module
const existingDeclarationModule = declarationFile.getModule('\'pokedex-promise-v2\'');

// Get the export existing export and remove them if it exists
const existingDeclarationExports = existingDeclarationModule.getExportAssignments();
if (existingDeclarationExports && existingDeclarationExports.length >= 1) {
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

// Read the API Map
const apiMap = JSON.parse(fs.readFileSync(apiMapFile).toString());

// Import dependencies
indexFile.addImportDeclaration({
  defaultImport: 'pMap',
  moduleSpecifier: 'p-map',
});

indexFile.addImportDeclaration({
  defaultImport: 'NodeCache',
  moduleSpecifier: 'node-cache',
});

indexFile.addImportDeclaration({
  defaultImport: 'PokeAPITypes',
  moduleSpecifier: 'pokedex-promise-v2',
});

indexFile.addImportDeclaration({
  defaultImport: 'ListEndpointOptions',
  moduleSpecifier: './interfaces/ListEndpointOptions.js',
});

indexFile.addImportDeclaration({
  defaultImport: 'PokeAPIOptions',
  moduleSpecifier: './interfaces/PokeAPIOptions.js',
});

indexFile.addImportDeclaration({
  defaultImport: 'handleError',
  moduleSpecifier: './utils/ErrorHandler.js',
});

indexFile.addImportDeclaration({
  defaultImport: 'getJSON',
  moduleSpecifier: './utils/Getter.js',
});

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

// Add the get generic resource array method
const getResourceCode = `try {
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
};

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
  const inputParam = methodName.match(/ByName$/) ? 'nameOrId' : 'id';
  const inputParamType = methodName.match(/ByName$/) ? 'string | number | Array<string | number>' : 'number | number[]';

  const singleParamType = methodName.match(/ByName$/) ? 'string | number' : 'number';
  const multipleParamType = methodName.match(/ByName$/) ? 'Array<string | number>' : 'number[]';

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

  const generatedMethod = pokeApiClass.addMethod(methodStructure).setBodyText(`try {
    if (${inputParam}) {
      // If the user has submitted a Name or an ID, return the JSON promise
      if (typeof ${inputParam} === 'number' || typeof ${inputParam} === 'string') {
        return getJSON<${returnType}>(this.options, \`\${this.options.protocol}\${this.options.hostName}\${this.options.versionPath}${endpoint}/\${${inputParam}}/\`, callback);
      }

      // If the user has submitted an Array return a new promise which will
      // resolve when all getJSON calls are ended
      else if (typeof ${inputParam} === 'object') {
        const mapper = async (${inputParam}s: ${inputParamType}) => {
          const queryRes = await getJSON<${returnType}>(this.options, \`\${this.options.protocol}\${this.options.hostName}\${this.options.versionPath}${endpoint}/\${${inputParam}s}/\`);
          return queryRes;
        };

        // Fetch data asynchronously to be faster
        const mappedResults = await pMap(${inputParam}, mapper, { concurrency: 4 });

        if (callback) {
          callback(mappedResults);
        }

        return mappedResults;
      } else {
        throw new Error('Param "${inputParam}" must be a ${methodName.match(/ByName$/) ? 'string, array of strings or array of string and/or numbers' : 'number or array of numbers'}');
      }
    } else {
      throw new Error('Param "${inputParam}" is required (Must be a ${methodName.match(/ByName$/) ? 'string, array of strings or array of string and/or numbers' : 'number or array of numbers'} )');
    }
  } catch (error) {
    handleError(error, callback);
  }`);

  // Add the declaration to the types file
  // Sanitizing the namespace and remove the async keyword
  methodStructure.isAsync = false;
  methodStructure.parameters[1].type = (methodStructure.parameters[1].type as string).replace(/PokeAPITypes/g, 'PokeAPI');
  methodStructure.returnType = (methodStructure.returnType as string).replace(/PokeAPITypes/g, 'PokeAPI');
  methodStructure.overloads[0].parameters[0].type = (methodStructure.overloads[0].parameters[0].type as string).replace(/PokeAPITypes/g, 'PokeAPI');
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
      console.log('Could not found interface for: ', method);
    }
    continue;
  }

  // Infer the return type from the name
  const returnType = apiMap[endpoint].includes('NamedList') ? 'NamedAPIResourceList' : 'APIResourceList';

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
      type: `(result: PokeAPITypes.${returnType}, error?: any) => any`,
      hasQuestionToken: true,
    }],
    returnType: `Promise<PokeAPITypes.${returnType}>`,
  };

  const generatedMethod = pokeApiClass.addMethod(methodStructure).setBodyText(`try {
    let { limit, offset } = this.options;

    if (interval) {
      if (interval.hasOwnProperty('limit')) {
        limit = interval.limit;
      }

      if (interval.hasOwnProperty('offset')) {
        offset = interval.offset;
      }
    }

    return getJSON(this.options, \`\${this.options.protocol}\${this.options.hostName}\${this.options.versionPath}${rawEndpoint}?limit=\${limit}&offset=\${offset}\`, callback);
  } catch (error) {
    handleError(error, callback);
  }`);

  // Add the declaration to the types file
  // Sanitizing the namespace and remove the async keyword
  methodStructure.isAsync = false;
  // methodStructure.parameters[1].type =
  // methodStructure.parameters[1].type.replace(/PokeAPITypes/g, 'PokeAPI');
  // methodStructure.returnType = methodStructure.returnType.replace(/PokeAPITypes/g, 'PokeAPI');
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

pokeApiClass.addMethod(methodStructure).setBodyText(`
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

  return getJSON(this.options, \`\${this.options.protocol}\${this.options.hostName}\${this.options.versionPath}?limit=\${limit}&offset=\${offset}\`, callback);
} catch (error) {
  handleError(error, callback);
}`);

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
}).setBodyText('return this.options.cache.stats.keys;').addJsDoc('Retuns the current number of entries in the cache');

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

declarationClass.replaceWithText(declarationClass.getFullText().replace(/PokeAPITypes/g, 'PokeAPI'));
declarationClass.formatText();

// Top level async function
(async () => {
  // Save and compile to JS
  await indexFile.save();
  await declarationFile.save();
  await project.emit();
})();

// Timestamp
console.timeEnd(mainLabel);
console.log('Main class generated!');
