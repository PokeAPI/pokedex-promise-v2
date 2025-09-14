import fs from 'fs';
import path from 'path';
import directoryTree from 'directory-tree';
import { Project, Writers } from 'ts-morph';
import {
  quicktype, InputData, JSONSchemaInput, FetchingJSONSchemaStore,
} from 'quicktype-core';

import {
  apiMapFile, schemaFolder, typesLabel, typeFile,
} from './Utils.js';

console.log(schemaFolder);
if (!fs.existsSync(schemaFolder)) {
  console.log('Schemas not found, please clone the "PokeAPI/api-data" repository on the root of this project first and change all $refs from "/schema/v2" to "api-data/data/schema/v2")');
  process.exit(1);
}

// Helper functions to interface names
function clearAndUpper(text: string) {
  return text.replace(/-/, '').toUpperCase();
}

function toPascalCase(text: string) {
  return text.replace(/(^\w|-\w)/g, clearAndUpper);
}

// A map for the methods of the class
const apiMap: Record<string, string> = {};

// The method that will string together the types and the PokeAPI class
async function generateFinalFile(types: string) {
  // Log progress...
  console.timeLog(typesLabel, '- Types generated, starting the generation of the definition file...');

  // Initialize the types file
  const project = new Project();
  const file = project.createSourceFile(typeFile, `/*
* Type definitions for pokedex-promise-v2 v4.x
* DO NOT MODIFY, THIS IS AUTO GENERATED
* Code by: HRKings <https://github.com/HRKings/>
* And: Christian Garza <https://github.com/C-Garza/>
* Code inspired by: Mudkip <https://github.com/mudkipme/>
* Execute \`npm run generate:types\` to regenerate
*/`, { overwrite: true });

  // Create the root module
  const rootModule = file.addModule({
    name: '\'pokedex-promise-v2\'',
  });

  // Create the namespace
  const namespace = rootModule.addModule({
    name: 'PokeAPI',
  });

  // Write the interfaces to the namespace
  namespace.setBodyText(types);

  // Remove interfaces that are wrongly generated
  namespace.getInterface('EvolutionChainElement')?.remove();
  namespace.getInterface('ResultElement')?.remove();
  namespace.getInterface('GenerationElement')?.remove();
  namespace.getInterface('VersionGroupNamedList')?.remove();

  // Replace the wrong definitions with the correct ones
  namespace.setBodyText(namespace.getBodyText()
    .replace(/ResultElement/g, 'APIResource')
    .replace(/EvolutionChainElement/g, 'APIResource')
    .replace(/GenerationElement/g, 'NamedAPIResource'));

  // Format the namespace to be correctly indented
  namespace.formatText();

  // Add the root endpoint interval
  rootModule.addInterface({
    name: 'ListEndpointOptions',
    properties: [{
      name: 'offset',
      type: 'number',
      hasQuestionToken: true,
      docs: ['The offset to be used in the request'],
    }, {
      name: 'limit',
      type: 'number',
      hasQuestionToken: true,
      docs: ['The limit to be used in the request'],
    }, {
      name: 'cacheLimit',
      type: 'number',
      hasQuestionToken: true,
      docs: ['The limit of the cache in milliseconds'],
    }],
  });

  // Add the options interface
  rootModule.addInterface({
    name: 'PokeAPIOptions',
    properties: [{
      name: 'protocol',
      type: Writers.unionType('\'https\'', '\'http\''),
      hasQuestionToken: true,
      docs: ['The protocol to be used',
        '@default \'https\''],
    }, {
      name: 'hostName',
      type: 'string',
      hasQuestionToken: true,
      docs: ['The hostname of the PokeAPI instance',
        '@default \'pokeapi.co\''],
    }, {
      name: 'versionPath',
      type: 'string',
      hasQuestionToken: true,
      docs: ['The version path of the API',
        '@default \'/api/v2/\''],
    }, {
      name: 'offset',
      type: 'number',
      hasQuestionToken: true,
      docs: ['The offset to be used in list requests',
        '@default 0'],
    }, {
      name: 'limit',
      type: 'number',
      hasQuestionToken: true,
      docs: ['The limit to be used in list requests',
        '@default 100000'],
    }, {
      name: 'timeout',
      type: 'number',
      hasQuestionToken: true,
      docs: ['The timeout of a response in milliseconds',
        '@default 10 * 1000 // (10 seconds)'],
    }, {
      name: 'cacheLimit',
      type: 'number',
      hasQuestionToken: true,
      docs: ['The limit of the cache in milliseconds',
        '@default 1000000 * 1000 // (11 days)'],
    }],
  });

  // Write the file
  await file.save();

  // Write the API Map
  fs.writeFileSync(apiMapFile, JSON.stringify(apiMap, null, 2));

  // Log progress...
  console.timeEnd(typesLabel);
  console.log('Definition file created!');
}

// Log start
console.time(typesLabel);
console.timeLog(typesLabel, '- Starting to generate types...');

// Init quicktype stuff
const schemaInput = new JSONSchemaInput(new FetchingJSONSchemaStore());
const inputData = new InputData();

// Gets schema file and adds it to schema source, outputs file at end
async function quicktypeMain(jsonSchema: string, basename: string) {
  // Add a single schema file to the schemaInput
  await schemaInput.addSource({ name: basename, schema: jsonSchema });

  // If its the last schema to process
  if (basename === 'VersionGroupNamedList') {
    // Adds the last file to the schema
    inputData.addInput(schemaInput);

    // Combines final large schema file into d.ts file
    const qt = await quicktype({
      inputData,
      lang: 'typescript',
      rendererOptions: {
        'just-types': 'true',
      },
    });

    await generateFinalFile(qt.lines.join('\n').replace(/export /g, ''));
  }
}

// First pass through directory tree to make sure standalone files
// are added to schema source first
const tree = directoryTree(schemaFolder, { extensions: /\.json$/, normalizePath: true });
tree.children.forEach((child) => {
  if (!child.children) {
    // Get the file name
    let basename = path.basename(child.path, '.json').replace(/_/g, '-');

    // If the interface is the one containing all the endpoints, rename the interface
    if (basename === 'index') {
      basename = 'EndpointsList';
    } else {
      basename = toPascalCase(basename);
    }

    // Read all the schema file
    const jsonSchema = fs.readFileSync(child.path, 'utf8');
    quicktypeMain(jsonSchema, basename);
  }
});

// Loops through schema directory with main logic
directoryTree(schemaFolder, { extensions: /\.json$/, normalizePath: true }, (item) => {
  // Split the path, to get the folder names later
  const paths = item.path.split('/').reverse();

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
    } else if (item.path.includes('$id')) {
      // If the scheme is the wanted one, pick the name of two folder above
      // eg.: 'pokemon/$id/index.json', picks the "pokemon"
      basename = paths[2];
      interfaceName = toPascalCase(basename);
    } else {
      // Gets one folder above (used for the resource lists)
      // eg. 'pokemon/index.js', picks the "pokemon"
      // and adds 'List' to the interface name, eg. 'PokemonList'
      basename = `${paths[1]}-list`;
      interfaceName = toPascalCase(basename);
    }

    // Register to the API map to use later on the methods
    apiMap[basename] = interfaceName;

    // Read all the schema file
    const jsonSchema = fs.readFileSync(item.path, 'utf8');

    // If the interface contains named resources and is a list, rename the interface
    if (interfaceName.includes('List') && jsonSchema.includes('named_api_resource_list.json')) {
      interfaceName = interfaceName.replace('List', 'NamedList');
      apiMap[basename] = interfaceName;
    }

    quicktypeMain(jsonSchema, interfaceName);
  }
});
