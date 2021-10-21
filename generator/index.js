/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
import { Project, Writers } from 'ts-morph';
import fetch from 'node-fetch';
import endpoints from '../src/endpoints.js';
import rootEndpoints from '../src/rootEndpoints.js';

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

const skips = ['APIResource', 'APIResourceList', 'NamedAPIResource', 'NamedAPIResourceList'];
const apiList = [];

function convertType(type) {
  let result;
  if (type.type === 'list') {
    result = `${convertType(type.of)}[]`;
  } else if (type.type) {
    result = `${type.type}<${convertType(type.of)}>`;
  } else if (type === 'integer') {
    result = 'number';
  } else {
    result = type;
  }
  return result;
}

// find nullable (based on examples, not accurate)
function findNullable(response, model, api) {
  if (!response) {
    return;
  }
  if (Array.isArray(response) && response.length > 0) {
    return findNullable(response[0], model, api);
  }
  for (const [key, data] of Object.entries(response)) {
    const field = model.fields.find((field) => field.name === key);
    if (!field) {
      console.warn(`field: ${key} not found in api ${api.name}`);
      continue;
    }
    if (data === null) {
      field.nullable = true;
      continue;
    }
    if (Array.isArray(data) && data.length > 0) {
      const model = api.responseModels.find((model) => model.name === field.type.of);
      if (model) {
        findNullable(data[0], model, api);
      }
    }
    if (typeof data === 'object') {
      const model = api.responseModels.find((model) => model.name === field.type);
      if (model) {
        findNullable(data, model, api);
      }
    }
  }
}

async function loadDocument(namespace, docName) {
  const response = await fetch(`https://raw.githubusercontent.com/PokeAPI/pokeapi.co/master/src/docs/${docName}.json`);
  const apis = await response.json();
  for (const api of apis) {
    findNullable(api.exampleResponse, api.responseModels[0], api);
    for (const [index, model] of api.responseModels.entries()) {
      if (skips.includes(model.name)) {
        continue;
      }
      const generatedInterface = namespace.addInterface({
        name: model.name,
      });
      if (index === 0) {
        generatedInterface.addJsDoc({
          description: api.description,
        });
      }
      for (const field of model.fields) {
        generatedInterface.addProperty({
          name: field.name,
          type: field.nullable ? Writers.unionType(convertType(field.type), 'null') : convertType(field.type),
        }).addJsDoc({
          description: field.description,
        });
      }
    }
  }
  apiList.push(...apis);
}

async function produceDefinition() {
  const project = new Project();
  const file = project.createSourceFile('types/index.d.ts', `// Type definitions for pokedex-promise-v2 v4.x
// Project: https://github.com/PokeAPI/pokedex-promise-v2
// Definitions by: Mudkip <https://github.com/mudkipme/>`, {
    overwrite: true,
  });

  const module = file.addNamespace({
    name: '"pokedex-promise-v2"',
  });

  module.addInterface({
    name: 'APIResourceURL',
    extends: 'String',
    typeParameters: 'T',
  });

  const namespace = module.addNamespace({
    name: 'PokeAPI',
  });

  namespace.addInterface({
    name: 'APIResource',
    typeParameters: 'T',
    properties: [{
      name: 'url',
      type: 'APIResourceURL<T>',
    }],
  });

  namespace.addInterface({
    name: 'NamedAPIResource',
    typeParameters: 'T',
    properties: [{
      name: 'name',
      type: 'string',
    }, {
      name: 'url',
      type: 'APIResourceURL<T>',
    }],
  });

  namespace.addInterface({
    name: 'APIResourceList',
    typeParameters: 'T',
    properties: [{
      name: 'count',
      type: 'number',
    }, {
      name: 'next',
      type: Writers.unionType('APIResourceURL<APIResourceList<T>>', 'null'),
    }, {
      name: 'previous',
      type: Writers.unionType('APIResourceURL<APIResourceList<T>>', 'null'),
    }, {
      name: 'results',
      type: 'APIResource<T>[]',
    }],
  });

  namespace.addInterface({
    name: 'NamedAPIResourceList',
    typeParameters: 'T',
    properties: [{
      name: 'count',
      type: 'number',
    }, {
      name: 'next',
      type: Writers.unionType('APIResourceURL<NamedAPIResourceList<T>>', 'null'),
    }, {
      name: 'previous',
      type: Writers.unionType('APIResourceURL<NamedAPIResourceList<T>>', 'null'),
    }, {
      name: 'results',
      type: 'NamedAPIResource<T>[]',
    }],
  });

  for (const docName of docList) {
    await loadDocument(namespace, docName);
  }

  module.addInterface({
    name: 'PokeAPIOptions',
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

  module.addInterface({
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

  const apiMap = {};
  for (const api of apiList) {
    if (api.exampleRequest?.match(/^\/v2\/([\w-]+)\/\{[\w\s]+\}\/$/)) {
      apiMap[api.exampleRequest.match(/^\/v2\/([\w-]+)/)[1]] = api;
    }
  }

  module.addInterface({
    name: 'EndPointResult',
    // eslint-disable-next-line no-unused-vars
    properties: endpoints.map(([_, apiName]) => ({
      name: `"${apiName}"`,
      type: `APIResourceURL<PokeAPI.${Object.keys(apiMap[apiName].exampleResponse).includes('name') ? 'NamedAPIResourceList' : 'APIResourceList'}<PokeAPI.${apiMap[apiName].responseModels[0].name}>>`,
    })),
  });

  const cls = module.addClass({
    name: 'PokeAPI',
  });

  cls.addConstructor({
    parameters: [{
      name: 'options',
      type: 'PokeAPIOptions',
      hasQuestionToken: true,
    }],
  });

  cls.addMethod({
    name: 'resource',
    parameters: [{
      name: 'path',
      type: 'string',
    }],
    returnType: 'Promise<unknown>',
  });

  cls.addMethod({
    name: 'resource',
    parameters: [{
      name: 'paths',
      type: 'string[]',
    }],
    returnType: 'Promise<unknown[]>',
  });

  cls.addMethod({
    name: 'resource',
    typeParameters: 'T',
    parameters: [{
      name: 'path',
      type: 'APIResourceURL<T>',
    }],
    returnType: 'Promise<T>',
  });

  cls.addMethod({
    name: 'resource',
    typeParameters: 'T',
    parameters: [{
      name: 'paths',
      type: 'APIResourceURL<T>[]',
    }],
    returnType: 'Promise<T[]>',
  });

  for (const [method, apiName] of endpoints) {
    cls.addMethod({
      name: method,
      parameters: [{
        name: method.match(/ByName$/) ? 'nameOrId' : 'id',
        type: method.match(/ByName$/) ? Writers.unionType('string', 'number') : 'number',
      }],
      returnType: `Promise<PokeAPI.${apiMap[apiName].responseModels[0].name}>`,
    });
    cls.addMethod({
      name: method,
      parameters: [{
        name: method.match(/ByName$/) ? 'nameOrIds' : 'ids',
        type: method.match(/ByName$/) ? 'Array<string | number>' : 'number[]',
      }],
      returnType: `Promise<PokeAPI.${apiMap[apiName].responseModels[0].name}[]>`,
    });
  }

  cls.addMethod({
    name: 'getEndpointsList',
    returnType: 'EndPointResult',
  });

  for (const [method, path] of rootEndpoints) {
    const apiName = path.replace(/\/$/, '');
    if (!apiMap[apiName]) {
      continue;
    }
    cls.addMethod({
      name: method,
      parameters: [{
        name: 'interval',
        type: 'RootEndPointInterval',
        hasQuestionToken: true,
      }],
      returnType: `Promise<PokeAPI.${Object.keys(apiMap[apiName].exampleResponse).includes('name') ? 'NamedAPIResourceList' : 'APIResourceList'}<PokeAPI.${apiMap[apiName].responseModels[0].name}>>`,
    });
  }

  module.addExportAssignment({
    expression: 'PokeAPI',
  });

  await file.save();
}

produceDefinition().catch((e) => console.warn(e));
