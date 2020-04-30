// eslint-disable-next-line no-unused-vars
import { Declension, Gender, GrammaticalNumber } from '../grammar/grammarCategories';

export type NounProperties = {
  number: GrammaticalNumber;
  declension: Declension;
  gender: Gender;
  correctGenitive: string;
}

export type LatinNounGuess = {
  latin: boolean;
  genitive: boolean;
  gender: boolean;
}
