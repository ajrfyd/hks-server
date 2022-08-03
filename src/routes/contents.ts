import { readDb } from "../db/dbController";
import { Request, Response } from "express";
const BASE = '/contents';

type ContentType = {
  contentId: number;
  author: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt?: string;
}

const contentsRoute = [
  {
    method: 'get' as const,
    route: BASE,
    handler: (req: Request, res: Response) => {
      const data = readDb<ContentType[]>('contents');
      
      if(!data) return;
      const d = {
        content: data
      }
      res.json(data);
    }
  }
]

export default contentsRoute;