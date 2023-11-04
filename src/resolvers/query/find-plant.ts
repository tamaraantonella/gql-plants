import { plants } from "../../datasources/dataset";

type FindPlantArgs = {
  name?: string;
};

export const findPlant = (root: unknown, args: FindPlantArgs) =>
  plants.find((p) => p.name === args.name);
