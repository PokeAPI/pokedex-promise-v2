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

// Convert kebab-case (or single word) into PascalCase
function toPascalCase(text: string) {
  return text
    .split('-')
    .map((part) => (part ? part.charAt(0).toUpperCase() + part.slice(1) : ''))
    .join('');
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

  // Quicktype emits a few synthetic interface names we need to rewrite.
  // Empty target = only remove the interface, leave references untouched.
  const interfaceRewrites: Record<string, string> = {
    EvolutionChainElement: 'APIResource',
    ResultElement: 'APIResource',
    GenerationElement: 'NamedAPIResource',
    VersionGroupNamedList: '',
  };

  for (const name of Object.keys(interfaceRewrites)) {
    namespace.getInterface(name)?.remove();
  }

  let body = namespace.getBodyText();
  for (const [from, to] of Object.entries(interfaceRewrites)) {
    if (to) {
      body = body.split(from).join(to);
    }
  }
  namespace.setBodyText(body);

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

// Schemas that live directly under schema/v2 are added to quicktype first so
// their interface names take precedence in name disambiguation. Nested schemas
// (the per-resource ones) follow.
type SchemaSource = { name: string; schema: string };
const rootSchemas: SchemaSource[] = [];
const nestedSchemas: SchemaSource[] = [];

directoryTree(schemaFolder, { extensions: /\.json$/, normalizePath: true }, (item) => {
  const paths = item.path.split('/').reverse();

  if (paths[1] === 'v2') {
    let name = path.basename(item.path, '.json').replace(/_/g, '-');
    name = name === 'index' ? 'EndpointsList' : toPascalCase(name);
    rootSchemas.push({ name, schema: fs.readFileSync(item.path, 'utf8') });
    return;
  }

  // Skip the placeholder -1 folder
  if (item.path.includes('move-ailment/-1')) return;

  let basename: string;
  let interfaceName: string;

  if (item.path.includes('pokemon/$id/encounters')) {
    basename = 'pokemon-encounter';
    interfaceName = 'PokemonEncounter';
  } else if (item.path.includes('$id')) {
    // 'pokemon/$id/index.json' → "pokemon"
    basename = paths[2];
    interfaceName = toPascalCase(basename);
  } else {
    // 'pokemon/index.json' → "pokemon-list" / "PokemonList"
    basename = `${paths[1]}-list`;
    interfaceName = toPascalCase(basename);
  }

  const jsonSchema = fs.readFileSync(item.path, 'utf8');

  // Named-resource list interfaces get the "NamedList" suffix
  if (interfaceName.includes('List') && jsonSchema.includes('named_api_resource_list.json')) {
    interfaceName = interfaceName.replace('List', 'NamedList');
  }

  apiMap[basename] = interfaceName;
  nestedSchemas.push({ name: interfaceName, schema: jsonSchema });
});

(async () => {
  try {
    const schemaInput = new JSONSchemaInput(new FetchingJSONSchemaStore());
    const inputData = new InputData();

    // Sequential: addSource order determines quicktype name disambiguation.
    for (const { name, schema } of [...rootSchemas, ...nestedSchemas]) {
      // eslint-disable-next-line no-await-in-loop
      await schemaInput.addSource({ name, schema });
    }

    inputData.addInput(schemaInput);

    const qt = await quicktype({
      inputData,
      lang: 'typescript',
      rendererOptions: { 'just-types': 'true' },
    });

    await generateFinalFile(qt.lines.join('\n').replace(/export /g, ''));
  } catch (error) {
    console.error('Type generation failed:', error);
    process.exit(1);
  }
})();
