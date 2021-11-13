/* eslint-disable no-underscore-dangle */
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

// Paths that will be used
export const typeFile = path.resolve(__dirname, '../../types/index.d.ts');
export const mainFile = path.resolve(__dirname, '../../src/index.ts');
export const apiMapFile = path.join(__dirname, 'apiMap.json');
export const schemaFolder = path.resolve(__dirname, '../../api-data/data/schema/v2');

// Timer labels
export const typesLabel = 'Types Generator';
export const mainLabel = 'Main Generator';
export const jsdocsLabel = 'JSDocs Generator';
