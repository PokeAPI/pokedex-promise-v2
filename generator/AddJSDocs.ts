import path from 'path';
import fetch from 'node-fetch';
import { InterfaceDeclaration, ModuleDeclaration, Project } from 'ts-morph';

import { jsdocsLabel, typeFile } from './Utils.js';

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

function addJsDoc(generatedInterface: InterfaceDeclaration,
  index: number, description: string, model: any) {
  if (index === 0) {
    generatedInterface.addJsDoc({
      description,
    });
  }

  for (const field of model.fields) {
    generatedInterface.getPropertyOrThrow(field.name).addJsDoc({
      description: field.description,
    });
  }
}

async function loadDocumentation(namespace: ModuleDeclaration, docName: string) {
  const response = await fetch(`https://raw.githubusercontent.com/PokeAPI/pokeapi.co/master/src/docs/${docName}.json`);
  const apis: any = await response.json();

  for (const api of apis) {
    for (const [index, model] of api.responseModels.entries()) {
      try {
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

for (const docName of docList) {
  await loadDocumentation(namespace, docName);
}

await file.save();

console.timeEnd(jsdocsLabel);
console.log('JSDocs added!');
