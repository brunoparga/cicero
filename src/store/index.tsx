/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useReducer, Dispatch } from 'react';

import { Action, AppState, AppStateWithDispatch } from '../types';
import { initialAppState } from './initialState';
import { reducer } from './reducer';
import { actionTypes } from './actionTypes';
import { fetchWords } from './actions/fetchWords';

const store = createContext<AppStateWithDispatch>({ state: initialAppState, dispatch: () => {} });

const StateProvider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch]: [AppState, Dispatch<Action>] = useReducer(reducer, initialAppState);

  // Fetch the first word from the API
  // TODO: this means I cannot work on the last word
  // TODO: this is a possible location of the error that causes several API calls instead of just 1
  if (state.words.length === 0) {
    fetchWords(dispatch);
  }

  // Test if all values have been guessed correctly (there has to be a word set)
  const correctGuess = Object.values(state.guess).every((entry: boolean) => entry);
  if (state.word && correctGuess && !state.revealAnswer) {
    dispatch({ type: actionTypes.REVEAL_ANSWER });
  }

  return <store.Provider value={{ state, dispatch }}>{children}</store.Provider>;
};

export { actionTypes, StateProvider, store };
