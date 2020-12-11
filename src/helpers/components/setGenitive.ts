import { NounProperties } from "../../types";
import { singular, plural } from "../../grammar";

export const setGenitive = (properties: NounProperties): string => {
  const { correctGenitive, number, declension } = properties;

  return correctGenitive || { singular, plural }[number][declension];
};
