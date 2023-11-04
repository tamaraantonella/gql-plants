import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

export const typeDefs = `#graphql
  enum YesNo {
  YES
  NO
  }

 type Family {
    name: String!
  }

  type Plant {
   id: ID!
   name: String!
   family: Family!
   price: Int
  }

  type Query {
    plantCount: Int!
    allPlants(price: YesNo): [Plant]!
    findPlant(name: String!) : Plant
  }

  type Mutation {
    addPlant(name: String!, family: String!, price: Int!): Plant
    editPrice(name: String!, price: Int!): Plant
  }

`;
