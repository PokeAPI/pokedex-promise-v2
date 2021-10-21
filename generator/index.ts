import { compileFromFile } from 'json-schema-to-typescript'
import directoryTree from 'directory-tree';
import { Project, Writers } from 'ts-morph';
import fs from 'fs';

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

function genTypes() {
  fs.writeFileSync(typeFile, "/* tslint:disable */\n/** Execute `npm run gentypes` to regenerate **/\n\n");

  directoryTree('./generator/schema', { extensions: /\.json$/ }, (item) => {
    let basename: string;
    let paths = item.path.split('/').reverse();

    if (item.path.includes('$id')) {
      basename = paths[2];
    } else if (item.path.includes('pokemon/encounters')) {
      basename = paths[3];
    }
    else {
      basename = `${paths[1]}List`;
    }

    apiMap[basename] = toPascalCase(basename);

    compileFromFile(item.path, {
      declareExternallyReferenced: false,
      bannerComment: ''
    }).then(ts => {
      ts = ts.replaceAll('[k: string]: unknown;', '').replace('export', '');

      if (ts.includes('Index') && !item.path.includes('schema/index.js')) {
        fs.appendFileSync(typeFile, ts.replace('Index', apiMap[basename]))
      } else {
        fs.appendFileSync(typeFile, ts)
      }

      fs.appendFileSync(typeFile, '\n');
    });
  });
}

async function addMethodType() {
  const project = new Project();
  const file = project.addSourceFileAtPath(typeFile);

  const cls = file.addClass({
    name: 'PokeAPI',
  });

  // cls.addConstructor({
  //   parameters: [{
  //     name: 'options',
  //     type: 'PokeAPIOptions',
  //     hasQuestionToken: true,
  //   }],
  // });

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

  // cls.addMethod({
  //   name: 'resource',
  //   typeParameters: ['T'],
  //   parameters: [{
  //     name: 'path',
  //     type: 'APIResourceURL<T>',
  //   }],
  //   returnType: 'Promise<T>',
  // });

  // cls.addMethod({
  //   name: 'resource',
  //   typeParameters: ['T'],
  //   parameters: [{
  //     name: 'paths',
  //     type: 'APIResourceURL<T>[]',
  //   }],
  //   returnType: 'Promise<T[]>',
  // });

  for (const [method, apiName] of endpoints) {
    cls.addMethod({
      name: method,
      parameters: [{
        name: method.match(/ByName$/) ? 'nameOrId' : 'id',
        type: method.match(/ByName$/) ? Writers.unionType('string', 'number') : 'number',
      }],
      returnType: `Promise<${apiMap[apiName]}>`,
    });
    cls.addMethod({
      name: method,
      parameters: [{
        name: method.match(/ByName$/) ? 'nameOrIds' : 'ids',
        type: method.match(/ByName$/) ? 'Array<string | number>' : 'number[]',
      }],
      returnType: `Promise<${apiMap[apiName]}[]>`,
    });
  }

  cls.addMethod({
    name: 'getEndpointsList',
    returnType: 'Index',
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
      returnType: `Promise<${Object.keys(apiMap[apiName]).includes('List') ? 'NamedApiResourceList' : 'ApiResourceList'}<${apiMap[apiName]}>>`,
    });
  }

  file.addExportAssignment({
    expression: 'PokeAPI',
  });

  await file.save();
}

genTypes();
await addMethodType();