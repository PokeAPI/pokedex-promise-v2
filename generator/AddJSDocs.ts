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

// Add JSDocs to the interface and all of its properties
function addJsDoc(
  generatedInterface: InterfaceDeclaration,
  index: number,
  description: string,
  model: any,
) {
  // If it is the the root interface, add the main description to it
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

// Load a doc from the PokeAPI docs and get the descriptions to apply to the code
async function loadDocumentation(namespace: ModuleDeclaration, docName: string) {
  const response = await axios.get(`https://raw.githubusercontent.com/PokeAPI/pokeapi.co/master/src/docs/${docName}.json`);
  const apis: any = await response.data;

  // As one doc contain multiple APIs examples, loop through them
  for (const api of apis) {
    // Loop over all of the response models, not the examples
    for (const [index, model] of api.responseModels.entries()) {
      try {
        // Quicktype has its quirks while generating the types, so those 3 lines account for them
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
        console.log(model.name);
        console.log(error);
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

// Top level async function
(async () => {
  // For each doc we have on the array, add the descriptions it provides
  for (const docName of docList) {
    await loadDocumentation(namespace, docName);
  }

  // Save the file
  await file.save();

  // Timestamp
  console.timeEnd(jsdocsLabel);
  console.log('JSDocs added!');
})();
