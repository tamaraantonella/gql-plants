import { Plant, plants } from '../../datasources/dataset';

type AllPlantsArgs = {
  price?: 'YES' | 'NO';
};

export const allPlants = (root: Plant, args: AllPlantsArgs) => {
  if (!args.price) {
    return plants;
  }
  return plants.filter((plant) =>
    args.price === 'YES' ? plant.price : !plant.price
  );
};
