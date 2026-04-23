import axios from 'axios';
import path from 'path';
import { InterfaceDeclaration, ModuleDeclaration, Project } from 'ts-morph';

import { jsdocsLabel, typeFile } from './Utils.js';

// The doc names available on the PokeAPI github repo
const docList = [
  'berries',
  'contests',
  'encounters',
  'evolution',
  'games',
  'items',
  'locations',
  'machines',
  'moves',
  'pokemon',
  'resource-lists',
  'utility',
];

// Apply docs from one upstream model onto the generated interface shape.
function addJsDoc(
  generatedInterface: InterfaceDeclaration,
  index: number,
  description: string,
  model: any,
) {
  // If it is the root interface, add the main description to it
  if (index === 0 && description && description !== ' ') {
    const jsDocs = generatedInterface.getJsDocs();

    if (jsDocs && jsDocs[0] && jsDocs[0].getDescription()) {
      jsDocs[0].setDescription(description);
    } else {
      generatedInterface.addJsDoc({
        description,
      });
    }
  }

  // Add JSDocs to all of the properties of the interface
  for (const field of model.fields) {
    if (!field.description || field.description === ' ') {
      continue;
    }

    const property = generatedInterface.getProperty(field.name);
    const jsDocs = property?.getJsDocs();

    if (jsDocs && jsDocs[0] && jsDocs[0].getDescription()) {
      jsDocs[0].setDescription(field.description);
    } else if (property) {
      property.addJsDoc({
        description: field.description,
      });
    }
  }
}

// Fetch one docs file and merge its descriptions into matching generated types.
async function loadDocumentation(namespace: ModuleDeclaration, docName: string) {
  const response = await axios.get(`https://raw.githubusercontent.com/PokeAPI/pokeapi.co/master/src/docs/${docName}.json`);
  const apis: any = await response.data;

  // As one doc contain multiple APIs examples, loop through them
  for (const api of apis) {
    // Loop over all of the response models, not the examples
    for (const [index, model] of api.responseModels.entries()) {
      try {
        // Some interfaces still keep quicktype's temporary prefixes, so update all known variants.
        const generatedInterface = namespace.getInterface(model.name === 'PokemonEncounter' ? 'LocationAreaPokemonEncounter' : model.name);
        const purpleGeneratedInterface = namespace.getInterface(`Purple${model.name}`);
        const fluffyGeneratedInterface = namespace.getInterface(`Fluffy${model.name}`);

        if (generatedInterface) {
          addJsDoc(generatedInterface, index, api.description, model);
        }

        if (purpleGeneratedInterface) {
          addJsDoc(purpleGeneratedInterface, index, api.description, model);
        }

        if (fluffyGeneratedInterface) {
          addJsDoc(fluffyGeneratedInterface, index, api.description, model);
        }
      } catch (error) {
        console.error('Failed to add JSDoc for', model.name, error);
      }
    }
  }
}

// Timestamp
console.time(jsdocsLabel);
console.timeLog(jsdocsLabel, '- Starting to generate JSDocs...');

// Initialize the types file
const project = new Project({
  tsConfigFilePath: path.resolve('./tsconfig.json'),
});
const file = project.getSourceFileOrThrow(typeFile);

// Create the root module
const rootModule = file.getModuleOrThrow('\'pokedex-promise-v2\'');

// Create the namespace
const namespace = rootModule.getModuleOrThrow('PokeAPI');

(async () => {
  try {
    // Each upstream docs file is independent, so apply them in parallel.
    await Promise.all(docList.map((docName) => loadDocumentation(namespace, docName)));
    await file.save();
    console.timeEnd(jsdocsLabel);
    console.log('JSDocs added!');
  } catch (error) {
    console.error('JSDoc generation failed:', error);
    process.exit(1);
  }
})();
