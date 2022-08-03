import fs from 'fs';
import { resolve } from 'path';
import c from 'chalk';
import { PathType } from './types';

const { log } = console;
const basePath = resolve('../');
log(c.blue(basePath));




const fileNames: PathType = {
  wordle: resolve(basePath, 'src/db/wordle.json'),
  user: resolve(basePath, 'src/db/user.json'),
  contents: resolve(basePath, 'src/db/contents.json')
};



export const readDb = <T>(target: string) => {
  try {
    return <T>JSON.parse(fs.readFileSync(fileNames[target], 'utf-8'))
  } catch (error) {
    if(error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const writeDb = (target: string, data: unknown) => {
  try {
    return fs.writeFileSync(fileNames[target], JSON.stringify(data));
  } catch(error ) {
    if(error instanceof Error) {
      throw new Error(error.message);
    }
  }
};