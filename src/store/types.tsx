/* eslint-disable no-unused-vars */
import { Dispatch } from 'react';

import { Declension, Gender, GrammaticalNumber } from '../lib/grammarCategories';

export interface Action {
  type: string;
  payload?: any;
  error?: boolean;
  meta?: any;
}
export interface AppState {
  word: {
    english: string;
    lemma: string;
    options: string[];
    number: GrammaticalNumber;
    declension: Declension;
    gender: Gender;
  };
  pluralSelected: boolean;
}
export interface AppStateWithDispatch {
  state: AppState;
  dispatch: Dispatch<Action>;
}