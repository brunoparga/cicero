/* eslint-disable no-unused-vars */
import { Dispatch } from 'react';

import { Declension, Gender, GrammaticalNumber } from '../grammar/grammarCategories';

export type Action = {
  type: string;
  payload?: any;
  error?: boolean;
  meta?: any;
}

export type AppState = {
  word: {
    english: string;
    lemma: string;
    options: string[];
    number: GrammaticalNumber;
    declension: Declension;
    gender: Gender;
  };
  pluralSelected: boolean;
  guess: {
    latin: boolean;
    genitive: boolean;
    gender: boolean;
  },
  revealAnswer: boolean;
}

export type AppStateWithDispatch = {
  state: AppState;
  dispatch: Dispatch<Action>;
}
