const BASE = '/user'
import { Request, Response } from "express"
import { readDb } from '../db/dbController.js';

type UserType = {
  id: number;
  userId: string;
  userName: string;
  email: string;
  password: string;
  address?: string;
}

type ResType = {
  user: UserType[];
}

const userRoute = [
  {
    method: 'get' as const,
    route: BASE,
    handler: (req: Request, res: Response) => {
      const data = readDb<ResType>('user');
      console.log(data);
      if(!data) return;
      
      res.json(data);
    }
  }
]

export default userRoute;