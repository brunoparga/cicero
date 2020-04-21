/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useReducer, Dispatch } from 'react';

import { AppState, AppStateWithDispatch, Action } from './types';
import reducer, { types } from './reducer';
import setWord from './setWordAction';

const initialState: AppState = {
  word: null,
  pluralSelected: false,
  guess: {
    latin: false,
    genitive: false,
    gender: false,
  },
  revealAnswer: false,
};

const store = createContext<AppStateWithDispatch>({ state: initialState, dispatch: () => {} });

const StateProvider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch]: [AppState, Dispatch<Action>] = useReducer(reducer, initialState);

  // Fetch the first word from the API
  if (!state.word) {
    setWord(dispatch, 1);
  }

  // Test if all values have been guessed correctly
  const correctGuess = Object.values(state.guess).every((entry: boolean) => entry);
  if (correctGuess && !state.revealAnswer) {
    dispatch({ type: types.REVEAL_ANSWER });
  }
  return <store.Provider value={{ state, dispatch }}>{children}</store.Provider>;
};

export { store, StateProvider };
