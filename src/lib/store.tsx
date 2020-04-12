/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useReducer, Dispatch } from 'react';

import { Declension, Gender, GrammaticalNumber } from './grammarCategories';
import { AppState, AppStateWithDispatch, Action } from './types';

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

const Store = createContext<AppStateWithDispatch>({ state: initialState });

const StateProvider: React.FunctionComponent = (props) => {
  const { children } = props;
  const [state, dispatch]: [AppState, Dispatch<Action>] = useReducer(
    (currentState: AppState, action: Action) => {
      switch (action.type) {
        case 'identity action':
          return currentState;
        default:
          throw new Error();
      }
    }, initialState,
  );

  const value: AppStateWithDispatch = { state, dispatch };

  return <Store.Provider value={value}>{children}</Store.Provider>;
};

export { Store as store, StateProvider };
