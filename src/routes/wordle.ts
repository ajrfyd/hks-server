import { readDb } from "../db/dbController";
import { Request, Response } from "express";
import c from 'chalk';

const { log } = console;
const BASE = '/wordle';

const wordleRoute = [
  {
    method: 'get' as const,
    route: BASE,
    handler: (req: Request, res: Response) => {
      const data = readDb('wordle');
      log(c.white(data.wordle));
      res.json(data.wordle)
    }
  }
]

export default wordleRoute;