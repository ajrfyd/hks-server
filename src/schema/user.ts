import { gql } from "apollo-server-express";

const userSchema = gql`
  type User {
    id: ID!
    userId: String!
    userName: String!
    email: String!
    password: String!
    address: String!
  }
  extend type Query {
    users: [User!]!
    user(id: ID!): User
  }

  extend type Mutation {
    createUser(userId: String!, userName: String!, email: String!, password: String!, address: String): User!
  }
`

export default userSchema;
