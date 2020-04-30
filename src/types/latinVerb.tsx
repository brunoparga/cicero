/* eslint-disable no-unused-vars */
import { Conjugation } from '../grammar/grammarCategories';

export type VerbProperties = {
  conjugation: Conjugation;
  perfect: string;
  supine: string;
  deponent: boolean;
  correctInfinitive: string;
}

export type LatinVerbGuess = {
  latin: boolean;
  infinitive: boolean;
}
