import axios from 'axios';
import { Plant } from '../../datasources/dataset';

type AllPlantsArgs = {
  price?: 'YES' | 'NO';
};

export const allPlants = async (root: Plant, args: AllPlantsArgs) => {
  const { data: plants } = await axios.get<Plant[]>(
    'http://localhost:3001/plants'
  );
  if (!args.price) {
    return plants;
  }
  return plants.filter((plant) =>
    args.price === 'YES' ? plant.price : !plant.price
  );
};
