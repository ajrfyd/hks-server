import fs from 'fs';
import { resolve } from 'path';
import c from 'chalk';
import { PathType } from './types';

const { log } = console;
const basePath = resolve('../');
log(c.blue(basePath));




const fileNames: PathType = {
  wordle: resolve(basePath, 'src/db/wordle.json'),
};



export const readDb = (target: string) => {
  try {
    return JSON.parse(fs.readFileSync(fileNames[target], 'utf-8'))
  } catch (error) {
    if(error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const writeDb = () => {

};