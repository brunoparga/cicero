import { Declension, Gender, GrammaticalNumber } from "../../grammar";

type NounProperties = {
  number: GrammaticalNumber;
  declension: Declension;
  gender: Gender;
  correctGenitive: string;
  indeclinable?: boolean;
};

type NounGuess = {
  latin: boolean;
  genitive: boolean;
  gender: boolean;
};

export type { NounGuess, NounProperties };
