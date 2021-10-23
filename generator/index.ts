import fs from 'fs';
import path from 'path';
import directoryTree from 'directory-tree';
import { Project, Writers } from 'ts-morph';
import { quicktype, InputData, JSONSchemaInput, FetchingJSONSchemaStore } from 'quicktype-core';

import endpoints from '../src/endpoints.js';
import rootEndpoints from '../src/rootEndpoints.js';

// Paths that will be used
const typeFile = './types/index.d.ts';
const schemaFolder = './generator/schema/v2';
const timerLabel = 'Generator';

// Helper functions to interface names
function toPascalCase(text: string) {
  return text.replace(/(^\w|-\w)/g, clearAndUpper);
}

function clearAndUpper(text: string) {
  return text.replace(/-/, "").toUpperCase();
}

// A map for the methods of the class
let apiMap: Record<string, string> = {};

// Log start
console.time(timerLabel);
console.timeLog(timerLabel, '- Starting to generate types...');

// Init quicktype stuff
const schemaInput = new JSONSchemaInput(new FetchingJSONSchemaStore());
const inputData = new InputData();

// Gets schema file and adds it to schema source, outputs file at end
async function quicktypeMain(jsonSchema, basename) {
  // Add a single schema file to the schemaInput
  await schemaInput.addSource({ name: basename, schema: jsonSchema });

  // If its the last schema to process
  if (basename === "VersionGroupNamedList") {
    // Adds the last file to the schema
    inputData.addInput(schemaInput);

    // Combines final large schema file into d.ts file
    const qt = await quicktype({
      inputData,
      lang: 'TypeScript',
      rendererOptions: {
        'just-types': 'true',
      }
    });

    await generateFinalFile(qt.lines.join("\n").replaceAll('export ', ''));
  }
};

// First pass through directory tree to make sure standalone files
// are added to schema source first
const tree = directoryTree(schemaFolder, { extensions: /\.json$/, normalizePath: true });
tree.children.forEach(child => {
  if (!child.children) {
    // Get the file name
    let basename = path.basename(child.path, '.json').replaceAll('_', '-');

    // If the interface is the one containing all the endpoints, rename the interface
    if (basename === 'index') {
      basename = 'EndpointsList';
    } else {
      basename = toPascalCase(basename);
    }

    // Read all the schema file
    const jsonSchema = fs.readFileSync(child.path, "utf8");
    quicktypeMain(jsonSchema, basename);
  }
});

// Loops through schema directory with main logic
directoryTree(schemaFolder, { extensions: /\.json$/, normalizePath: true }, (item) => {
  // Split the path, to get the folder names later
  let paths = item.path.split('/').reverse();

  // Don't add the standalone files again to the schema source
  // also, don't parse the -1 folder
  if (paths[1] !== 'v2' && !item.path.includes('move-ailment/-1')) {

    // The endpoint path, as in the endpoints list
    let basename: string;
    // The name of the generated interface/type
    let interfaceName: string;

    // Handle special case
    if (item.path.includes('pokemon/$id/encounters')) {
      basename = 'pokemon-encounter';
      interfaceName = 'PokemonEncounter';
    }

    // If the scheme is the wanted one, pick the name of two folder above, eg.: 'pokemon/$id/index.json', picks the "pokemon"
    else if (item.path.includes('$id')) {
      basename = paths[2];
      interfaceName = toPascalCase(basename);
    }

    // Gets one folder above (used for the resource lists), eg. 'pokemon/index.js', picks the "pokemon"
    // and adds 'List' to the interface name, eg. 'PokemonList'
    else {
      basename = `${paths[1]}-list`;
      interfaceName = toPascalCase(basename);
    }

    // Register to the API map to use later on the methods
    apiMap[basename] = interfaceName;

    // Read all the schema file
    const jsonSchema = fs.readFileSync(item.path, "utf8");

    // If the interface contains named resources and is a list, rename the interface
    if (interfaceName.includes('List') && jsonSchema.includes('named_api_resource_list.json')) {
      interfaceName = interfaceName.replace('List', 'NamedList');
      apiMap[basename] = interfaceName;
    }

    quicktypeMain(jsonSchema, interfaceName);
  }
});


// The method that will string together the types and the PokeAPI class
async function generateFinalFile(types: string) {
  // Log progress...
  console.timeLog(timerLabel, '- Types generated, starting the generation of the definition file...');

  // Initialize the types file
  const project = new Project();
  const file = project.createSourceFile(typeFile, `// Type definitions for pokedex-promise-v2 v4.x
// DO NOT MODIFY, THIS IS AUTO GENERATED
// Original code by: Mudkip <https://github.com/mudkipme/>
// Schema code by: HRKings <https://github.com/HRKings/>
// Execute \'npm run gentypes\` to regenerate`, {
    overwrite: true,
  });

  // Create the root module
  const rootModule = file.addModule({
    name: '\'pokedex-promise-v2\''
  });

  // Create the namespace
  const namespace = rootModule.addModule({
    name: 'PokeAPI',
  });

  // Write the interfaces to the namespace
  namespace.setBodyText(types.replaceAll('EvolutionChainElement', 'APIResource').replaceAll('GenerationElement', 'NamedAPIResource'));
  // Format the namespace to be correctly indented
  namespace.formatText();

  // Add the root endpoint interval
  namespace.addInterface({
    name: 'RootEndPointInterval',
    properties: [{
      name: 'limit',
      type: 'number',
      hasQuestionToken: true,
    }, {
      name: 'offset',
      type: 'number',
      hasQuestionToken: true,
    }],
  });

  // Add the options interface
  rootModule.addInterface({
    name: 'PokeApiOptions',
    properties: [{
      name: 'protocol',
      type: Writers.unionType('"https"', '"http"'),
      hasQuestionToken: true,
    }, {
      name: 'hostName',
      type: 'string',
      hasQuestionToken: true,
    }, {
      name: 'versionPath',
      type: 'string',
      hasQuestionToken: true,
    }, {
      name: 'cacheLimit',
      type: 'number',
      hasQuestionToken: true,
    }, {
      name: 'timeout',
      type: 'number',
      hasQuestionToken: true,
    }],
  });

  // Add the main PokeAPI class
  const pokeApiClass = rootModule.addClass({
    name: 'PokeAPI',
  });

  // Add the constructor typing to the class
  pokeApiClass.addConstructor({
    parameters: [{
      name: 'options',
      type: 'PokeApiOptions',
      hasQuestionToken: true,
    }],
  });

  // Add the get generic resource method
  pokeApiClass.addMethod({
    name: 'resource',
    parameters: [{
      name: 'path',
      type: 'string',
    }],
    returnType: 'Promise<unknown>',
  });

  // Add the get generic resource array method
  pokeApiClass.addMethod({
    name: 'resource',
    parameters: [{
      name: 'paths',
      type: 'string[]',
    }],
    returnType: 'Promise<unknown[]>',
  });

  // Add the get generic resource array method
  pokeApiClass.addMethod({
    name: 'resource',
    parameters: [{
      name: 'paths',
      type: 'string[]',
    }],
    returnType: 'Promise<unknown[]>',
  });

  // Add the get generic resource method, with support for typing
  pokeApiClass.addMethod({
    name: 'resource',
    typeParameters: ['T'],
    parameters: [{
      name: 'path',
      type: 'string',
    }],
    returnType: 'Promise<T>',
  });

  // Add the get generic resource array method, with support for typing
  pokeApiClass.addMethod({
    name: 'resource',
    typeParameters: ['T'],
    parameters: [{
      name: 'paths',
      type: 'string[]',
    }],
    returnType: 'Promise<T[]>',
  });

  // Add all the methods from the endpoints list,
  // setting the parameters typing and binding to the correct interface
  for (const [method, apiName] of endpoints) {
    pokeApiClass.addMethod({
      name: method,
      parameters: [{
        name: method.match(/ByName$/) ? 'nameOrId' : 'id',
        type: method.match(/ByName$/) ? Writers.unionType('string', 'number') : 'number',
      }],
      returnType: `Promise<PokeAPI.${apiMap[apiName]}>`,
    });

    pokeApiClass.addMethod({
      name: method,
      parameters: [{
        name: method.match(/ByName$/) ? 'nameOrIds' : 'ids',
        type: method.match(/ByName$/) ? 'Array<string | number>' : 'number[]',
      }],
      returnType: `Promise<PokeAPI.${apiMap[apiName]}[]>`,
    });
  }

  // Add method to get the list of endpoints
  pokeApiClass.addMethod({
    name: 'getEndpointsList',
    returnType: 'PokeAPI.EndpointsList',
  });

  // Add all the get list methods from the root endpoints list,
  // setting the parameters typing and binding to the correct interface
  // Also sets correctly to a named or normal list
  for (const [method, path] of rootEndpoints) {
    const apiName = `${path.replace(/\/$/, '')}-list`;
    if (!apiMap[apiName]) {
      continue;
    }
    pokeApiClass.addMethod({
      name: method,
      parameters: [{
        name: 'interval',
        type: 'PokeAPI.RootEndPointInterval',
        hasQuestionToken: true,
      }],
      returnType: `Promise<PokeAPI.${apiMap[apiName].includes('NamedList') ? 'NamedAPIResourceList' : 'APIResourceList'}>`,
    });
  }

  // Export the typing
  rootModule.addExportAssignment({
    expression: 'PokeAPI'
  });

  // Write the file
  await file.save();

  // Log progress...
  console.timeEnd(timerLabel);
  console.log('Definition file created!');
}
