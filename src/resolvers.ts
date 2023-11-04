import { plants } from './datasources/dataset';

export const resolvers = {
  Query: {
    plantCount: () => plants.length,
    allPlants: () => plants,
  },
};
