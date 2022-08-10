import { v4 } from 'uuid';
import { writeDb } from "../db/dbController.js";
import c from 'chalk';

const { log } = console;

type UserType = {
  id: string;
  userId: string;
  userName: string;
  email: string;
  password: string;
  address: string;
};

const setUser = (data: UserType) => writeDb('user', data);

const userResolver = {
  Query: {
    users: (parent: any, args: any, context: any) => {
      return context.db.users;
    },
    user: (parent: any, args: any, context: any) => {

    }
  },
  Mutation: {
    createUser: (parent: any, args: any, context: any) => {
      const { userId, userName, email, password, address = '' } = args;

      const newUser = {
        id: v4(),
        userId,
        userName,
        email,
        password,
        address
      };

      log(c.red(JSON.stringify(newUser, null, 2)))

      setUser(newUser);
      return newUser;
    }
  }
}

export default userResolver;