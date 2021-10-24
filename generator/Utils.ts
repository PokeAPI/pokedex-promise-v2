/* eslint-disable no-underscore-dangle */
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

// Paths that will be used
export const typeFile = path.resolve(__dirname, '../types/index.d.ts');
export const schemaFolder = path.resolve(__dirname, '../schema/v2');;

// Misc
export const timerLabel = 'Generator';
