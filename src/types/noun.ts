// eslint-disable-next-line no-unused-vars
import { Declension, Gender, GrammaticalNumber } from '../grammar/grammarCategories';

export type NounProperties = {
  number: GrammaticalNumber;
  declension: Declension;
  gender: Gender;
  correctGenitive: string;
  indeclinable?: boolean;
}

export type NounGuess = {
  latin: boolean;
  genitive: boolean;
  gender: boolean;
}
