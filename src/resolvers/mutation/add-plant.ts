import { Plant, plants } from '../../datasources/dataset';
import { v4 as uuid } from 'uuid';
import { ApolloServerErrorCode } from '@apollo/server/errors';
import { GraphQLError } from 'graphql';

type AddPlantArgs = {
  name: string;
  family: string;
  price: number;
};

export const addPlant = (root: Plant, args: AddPlantArgs) => {
  if (plants.find((plant) => plant.name === args.name))
    throw new GraphQLError('Plant already exists', {
      extensions: { code: ApolloServerErrorCode.BAD_USER_INPUT },
    });

  const plant = { ...args, id: uuid() };
  plants.push(plant);
  return plant;
};
