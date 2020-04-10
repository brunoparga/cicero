/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useReducer, Dispatch } from 'react';

import { Declension, Gender, GrammaticalNumber } from './grammarCategories';

interface Action {
  type: string;
  payload?: any;
  error: boolean;
  meta?: any;
}

interface AppState {
  word: {
    english: string;
    lemma: string;
    options: string[];
    number: GrammaticalNumber;
    declension: Declension;
    gender: Gender;
  }
}

interface AppStateWithDispatch {
  state: AppState;
  dispatch?: Dispatch<Action>;
}

const initialState: AppState = {
  word: {
    english: 'boy',
    lemma: 'puer',
    options: ['vir', 'puella', 'mundus'],
    number: GrammaticalNumber.Singular,
    declension: Declension.Second,
    gender: Gender.Masculine,
  },
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
