const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    password: String
    tierlist: [Tier]
  }

  type Tier {
    rank: String
    interests: [Interest]
  }

  type Interest {
    id: ID,
    content: String,
    image: String
  }

  input interestInput {
    id: ID,
    content: String,
    image: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(username: String!): User
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
  }

  type Mutation {
    addUser(
      firstName: String
      lastName: String
      username: String!
      email: String!
      password: String!): Auth

    login(
      email: String!
      password: String!): Auth
    
      
    addTierlist(
      rank: String!
      interests: [interestInput]
    ): User

    removeUser: User

    removeTierlist: User

    updateUser(
      firstName: String
      lastName: String
      username: String
      email: String
      password: String): User
  }

`;

module.exports = typeDefs;
