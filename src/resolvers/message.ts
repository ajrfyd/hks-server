import { writeDb } from "db/dbController";
import { gql } from 'apollo-server';

const messageResolver = {
  Query: {
    messages: (parent: any, args: any, context: any) => {

    },
    message: () => {

    }
  },
  Mutation: {
    createMessage: () => {
      
    },
    updateMessage: () => {

    },
    deleteMessage: () => {

    }
  }
};

export default messageResolver;