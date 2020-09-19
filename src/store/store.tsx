import React from 'react';

import { Action, AppState, AppStateWithDispatch } from '../types';
import {
  actionTypes, fetchWords, initialAppState, reducer,
} from '.';

const store = React
  .createContext<AppStateWithDispatch>({ state: initialAppState, dispatch: () => {} });

const StateProvider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch]: [AppState, React.Dispatch<Action>] = React
    .useReducer(reducer, initialAppState);

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

export { StateProvider, store };
