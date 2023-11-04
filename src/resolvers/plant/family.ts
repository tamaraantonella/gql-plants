import { Plant } from "../../datasources/dataset";

export const family = (root: Plant) => {
  if (!root) return null;
  return { name: root.family };
};
