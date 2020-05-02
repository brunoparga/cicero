/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useReducer, Dispatch } from 'react';

import { AppState, AppStateWithDispatch, Action } from '../types';
import { setWordAction } from './setWordAction';
import { initialAppState } from './initialState';
import { reducer, actionTypes } from './reducer';

const store = createContext<AppStateWithDispatch>({ state: initialAppState, dispatch: () => {} });

const StateProvider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch]: [AppState, Dispatch<Action>] = useReducer(reducer, initialAppState);

  // Fetch the first word from the API
  if (!state.word) {
    setWordAction(dispatch, 1);
  }

  // Test if all values have been guessed correctly
  const correctGuess = Object.values(state.guess).every((entry: boolean) => entry);
  if (correctGuess && !state.revealAnswer) {
    dispatch({ type: types.REVEAL_ANSWER });
  }
  return <store.Provider value={{ state, dispatch }}>{children}</store.Provider>;
};

export { store, StateProvider };
