import { NounProperties } from '../../types';
import { singular, plural } from '../../grammar';

export const setGenitive = (properties: NounProperties): string => {
  const { correctGenitive, number, declension } = properties;
  const genitive = correctGenitive || { singular, plural }[number][declension];
  return genitive;
};
