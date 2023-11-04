import { Plant, plants } from '../../datasources/dataset';
import { v4 as uuid } from 'uuid';

type AddPlantArgs = {
  name: string;
  family: string;
  price: number;
};

export const addPlant = (root: Plant, args: AddPlantArgs) => {
  const plant = { ...args, id: uuid() };
  plants.push(plant);
  return plant;
};
