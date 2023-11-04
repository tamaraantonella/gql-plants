import { Plant } from '../datasources/dataset';
import { allPlants } from './all-plants';
import { findPlant } from './find-plant';
import { plantCount } from './plant-count';

export const resolvers = {
  Query: {
    plantCount,
    allPlants,
    findPlant,
  },
  Plant: {
    family: (root: Plant) => {
      if (!root) return null;
      return { name: root.family };
    },
  },
};
