import React from 'react';

import { Action, AppState, AppStateWithDispatch } from '../types';
import { actionTypes, initialAppState, reducer } from '.';

const store = React
  .createContext<AppStateWithDispatch>({ state: initialAppState, dispatch: () => {} });

const StateProvider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch]: [AppState, React.Dispatch<Action>] = React
    .useReducer(reducer, initialAppState);

  // Get back from study mode to the front page
  if (state.page.studying && state.page.currentWordIndex === state.words.length) {
    dispatch({ type: actionTypes.TOGGLE_STUDYING });
  }

  // Test if all values have been guessed correctly (there has to be a word set)
  const correctGuess = Object.values(state.page.guess).every((entry: boolean) => entry);
  if (state.word && correctGuess && !state.page.revealAnswer) {
    dispatch({ type: actionTypes.REVEAL_ANSWER });
  }

  return <store.Provider value={{ state, dispatch }}>{children}</store.Provider>;
};

export { StateProvider, store };
