/* eslint-disable no-unused-vars */
import { Dispatch } from 'react';

import { Declension, Gender, GrammaticalNumber } from '../grammar/grammarCategories';

export type Action = {
  type: string;
  payload?: any;
  error?: boolean;
  meta?: any;
}

export type Word = {
  english: string;
  lemma: string;
  options: string[];
  number: GrammaticalNumber;
  declension: Declension;
  gender: Gender;
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
