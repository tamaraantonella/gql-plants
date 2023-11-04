import { Plant, plants } from '../../datasources/dataset';

type EditPriceArgs = {
  name: string;
  price: number;
};

export const editPrice = (root: Plant, args: EditPriceArgs): Plant => {
  const plantIndex = plants.findIndex((plant) => plant.name === args.name);
  if (plantIndex === -1) {
    return null;
  }
  const plant = plants[plantIndex];
  const updatedPlant = { ...plant, price: args.price };
  plants[plantIndex] = updatedPlant;
  return updatedPlant;
};
