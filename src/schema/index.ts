import { gql } from "apollo-server-express";
import userSchema from './user.js';

const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`

export default [linkSchema, userSchema];