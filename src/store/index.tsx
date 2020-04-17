/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useReducer, Dispatch } from 'react';

import { Declension, Gender, GrammaticalNumber } from '../grammar/grammarCategories';
import { AppState, AppStateWithDispatch, Action } from './types';
import reducer from './reducer';
import shuffle from '../helpers/shuffle';

const initialState: AppState = {
  word: {
    english: 'boy',
    lemma: 'puer',
    options: shuffle(['vir', 'puella', 'mundus', 'puer']),
    number: GrammaticalNumber.Singular,
    declension: Declension.Second,
    gender: Gender.Masculine,
  },
  pluralSelected: false,
  guess: {
    latin: false,
    genitive: false,
    gender: false,
  },
};

const store = createContext<AppStateWithDispatch>({ state: initialState, dispatch: () => {} });

const StateProvider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch]: [AppState, Dispatch<Action>] = useReducer(reducer, initialState);
  return <store.Provider value={{ state, dispatch }}>{children}</store.Provider>;
};

export { store, StateProvider };
