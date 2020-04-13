/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useReducer, Dispatch } from 'react';

import { Declension, Gender, GrammaticalNumber } from './grammarCategories';
import { AppState, AppStateWithDispatch, Action } from './types';
import reducer from './reducer';

const initialState: AppState = {
  word: {
    english: 'boy',
    lemma: 'puer',
    options: ['vir', 'puella', 'mundus'],
    number: GrammaticalNumber.Singular,
    declension: Declension.Second,
    gender: Gender.Masculine,
  },
  pluralSelected: false,
};

const store = createContext<AppStateWithDispatch>({ state: initialState, dispatch: () => {} });

const StateProvider: React.FunctionComponent = (props) => {
  const { children } = props;
  const [state, dispatch]: [AppState, Dispatch<Action>] = useReducer(reducer, initialState);
  const value: AppStateWithDispatch = { state, dispatch };

  return <store.Provider value={value}>{children}</store.Provider>;
};

export { store, StateProvider };
