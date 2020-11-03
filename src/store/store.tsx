import React from 'react';

import { Action, AppState, AppStateWithDispatch } from '../types';
import { actionTypes, initialAppState, rootReducer } from '.';

const store = React
  .createContext<AppStateWithDispatch>({ state: initialAppState, dispatch: () => {} });

const StateProvider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch]: [AppState, React.Dispatch<Action>] = React
    .useReducer(rootReducer, initialAppState);

  // Test if all values have been guessed correctly (there has to be a word set)
  const correctGuess = Object.values(state.page.guess).every((entry: boolean) => entry);
  if (state.word && correctGuess && !state.page.revealAnswer) {
    dispatch({ type: actionTypes.REVEAL_ANSWER });
  }

  return <store.Provider value={{ state, dispatch }}>{children}</store.Provider>;
};

export { StateProvider, store };
