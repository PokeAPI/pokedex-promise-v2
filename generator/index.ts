import { compileFromFile } from 'json-schema-to-typescript'
import directoryTree from 'directory-tree';
import { Project, Writers } from 'ts-morph';

import endpoints from '../src/endpoints.js';
import rootEndpoints from '../src/rootEndpoints.js';

function toPascalCase(text: string) {
  return text.replace(/(^\w|-\w)/g, clearAndUpper);
}

function clearAndUpper(text: string) {
  return text.replace(/-/, "").toUpperCase();
}

const typeFile = './types/index.d.ts';
let apiMap: Record<string, string> = {};

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

// Get all schemas and put them in the array
let paths: string[] = [];
directoryTree('./generator/schema', { extensions: /\.json$/ }, (file) => paths.push(file.path));

for (const schemaPath of paths) {
    // The endpoint path, as in the endpoints list
    let basename: string;    
    // The name of the generated interface/type
    let interfaceName: string;
    // Split the path, to get the folder names later
    let paths = schemaPath.split('/').reverse();
  
    // Handle two special cases
    if (schemaPath.includes('pokemon/$id/encounters')) {
      basename = 'pokemon-encounter';
      interfaceName = 'PokemonEncounter';
    } else if (schemaPath.includes('move-ailment/-1')) {
      continue;
    }
    // If the scheme is the wanted one, pick the name of two folder above, eg.: 'pokemon/$id/index.json', picks the "pokemon"
    else if (schemaPath.includes('$id')) {
      basename = paths[2];
      interfaceName = toPascalCase(basename);
    }
    // Gets one folder above (used for the resource lists), eg. 'pokemon/index.js', picks the "pokemon"
    // and adds 'List' to the interface name, eg. 'PokemonList'
    else {
      basename = `${paths[1]}-list`;
      interfaceName = `${toPascalCase(basename)}List`;
    }
  
    // Register to the API map to use later on the methods
    apiMap[basename] = interfaceName;
  
    // Create the interfaces/types from the schema
    let newInterface = await compileFromFile(schemaPath, {
      bannerComment: ''
    });

    // Remove the 'export' before the interface/type name
    newInterface = newInterface.replace('export ', '');
  
    // If the interface contains named resources and is a list, rename the interface
    if (interfaceName.includes('List') && newInterface.match(/name: string;\n\s+url/gm)) {
      interfaceName = interfaceName.replace('List', 'NamedList');
    }

    // If the interface is the one containing all the endpoints, rename the interface
    if (schemaPath.includes('schema/index.js')) {
      interfaceName = 'EndpointsList';
    }

    // Save the changes and rename the interface
    apiMap[basename] = interfaceName;
    newInterface = newInterface.replace('Index', apiMap[basename]);

    // Write the interfaces to the namespace
    namespace.setBodyText(`${namespace.getBodyText()}\n${newInterface}\n  \n`);
  
}

// Format the namespace to be correctly indented
namespace.formatText();

// Add the root endpoint interval
namespace.addInterface({
  name: 'RootEndPointInterval',
  properties: [{
      name: 'limit',
      type: 'number',
      hasQuestionToken: true,     
  },{
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
    returnType: `Promise<PokeAPI.${apiMap[apiName].includes('NamedList') ? 'NamedApiResourceList' : 'ApiResourceList'}>`,
  });
}

// Export the typing
rootModule.addExportAssignment({
  expression: 'PokeAPI'
});

// Write the file
await file.save();