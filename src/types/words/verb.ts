/* eslint-disable no-unused-vars */
import { Conjugation } from '../../grammar';

export type VerbProperties = {
  conjugation: Conjugation;
  perfect: string;
  supine: string;
  deponent: boolean;
  correctInfinitive: string;
}

export type VerbGuess = {
  latin: boolean;
  infinitive: boolean;
}
