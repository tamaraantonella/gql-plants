import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

export const typeDefs = `#graphql

 type Family {
    name: String!
  }

  type Plant {
   id: ID!
   name: String!
   family: Family!
   price: Int!
  }



  type Query {
    plantCount: Int!
    allPlants: [Plant]!
    findPlant(name: String!) : Plant
  }

`;
