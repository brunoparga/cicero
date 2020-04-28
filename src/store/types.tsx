/* eslint-disable no-unused-vars */
import { Dispatch } from 'react';

import { Declension, Gender, GrammaticalNumber } from '../grammar/grammarCategories';

export type Action = {
  type: string;
  payload?: any;
  error?: boolean;
  meta?: any;
}

enum QuestionType {
  LatinNoun = 'LatinNoun'
}

export type Word = {
  questionType: QuestionType;
  english: string;
  lemma: string;
  options: string[];
  number: GrammaticalNumber;
  declension: Declension;
  gender: Gender;
  correctGenitive: string;
}

type BaseAppState = {
  pluralSelected: boolean;
  guess: {
    latin: boolean;
    genitive: boolean;
    gender: boolean;
  },
  revealAnswer: boolean;
}

export type AppState = {
  word: Word | null;
} & BaseAppState

export type AppStateWithDispatch = {
  state: AppState;
  dispatch: Dispatch<Action>;
}
