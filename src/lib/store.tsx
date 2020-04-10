/* eslint-disable react/prop-types */
import React, { createContext, useReducer, Dispatch } from 'react';

import { Declension, Gender, GrammaticalNumber } from './grammarCategories';

interface MyAction {
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
  dispatch?: Dispatch<MyAction>;
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

const store = createContext<AppStateWithDispatch>({ state: initialState });
const { Provider } = store;

const StateProvider: React.FunctionComponent = (props) => {
  const { children } = props;
  const [state, dispatch]: [AppState, Dispatch<MyAction>] = useReducer(
    (currentState: AppState, action: MyAction) => {
      switch (action.type) {
        case 'identity action':
          return currentState;
        default:
          throw new Error();
      }
    }, initialState,
  );

  const value: AppStateWithDispatch = { state, dispatch };

  return <Provider value={value}>{children}</Provider>;
};

export { store, StateProvider };
