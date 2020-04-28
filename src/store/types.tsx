/* eslint-disable no-unused-vars */
import { Dispatch } from 'react';

import {
  Declension, Gender, GrammaticalNumber, Conjugation,
} from '../grammar/grammarCategories';

export type Action = {
  type: string;
  payload?: any;
  error?: boolean;
  meta?: any;
}

enum QuestionType {
  LatinNoun = 'LatinNoun',
  LatinVerb = 'LatinVerb'
}

type NounProperties = {
  number: GrammaticalNumber;
  declension: Declension;
  gender: Gender;
  correctGenitive: string;
}

type VerbProperties = {
  conjugation: Conjugation;
  perfect: string;
  supine: string;
  deponent: boolean;
  correctInfinitive: string;
}

export type Word = {
  questionType: QuestionType;
  english: string;
  lemma: string;
  options: string[];
  properties: NounProperties & VerbProperties
}

type BaseAppState = {
  pluralSelected: boolean;
  guess: {
    latin: boolean;
    genitive: boolean;
    gender: boolean;
  },
  revealAnswer: boolean;
  passiveSelected: boolean;
}

export type AppState = {
  word: Word | null;
} & BaseAppState

export type AppStateWithDispatch = {
  state: AppState;
  dispatch: Dispatch<Action>;
}
