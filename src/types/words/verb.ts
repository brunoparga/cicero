import { Conjugation } from "../../grammar";

type VerbProperties = {
  conjugation: Conjugation;
  perfect: string;
  supine: string;
  deponent: boolean;
  correctInfinitive: string;
};

type VerbGuess = {
  latin: boolean;
  infinitive: boolean;
};

export type { VerbGuess, VerbProperties };
