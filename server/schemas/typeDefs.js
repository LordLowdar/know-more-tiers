const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String!
    email: String!
    password: String!
    tierlist: [Tierlist]
  }

  type Tierlist {
    id: ID
    interests: [Interest]
  }

  input TierlistInput {
    id: ID
    interests: [InterestInput]
  }

  type Interest {
    id: ID,
    tier: Int
    rank: Int
    content: String
    image: String
  }

  input InterestInput {
    id: ID
    tier: Int
    rank: Int
    content: String
    image: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      username: String!
      email: String!
      password: String!): Auth

    login(
      email: String!
      password: String!): Auth
    
    addUserTierlist(
      tierlist: [TierlistInput]
    ): User

    addInterest(
      input: InterestInput
    ): Interest

    removeUser: User

    removeTierlist: User

    updateUser(
      firstName: String
      lastName: String
      username: String
      email: String
      password: String): User

    addUserInterest(
      interests: InterestInput!
    ): User

    addInterestToPool(
      interests: InterestInput!
    ): Interest
  }
`;

module.exports = typeDefs;
