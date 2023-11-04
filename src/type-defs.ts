import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

export const typeDefs = `#graphql

  type Plant {
   id: ID!
   name: String!
   type: String!
   price: Int!
  }

  type Query {
    plantCount: Int!
    allPlants: [Plant]!
  }
`;
