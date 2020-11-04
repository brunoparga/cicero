import React from 'react';

import { Action, AppState, AppStateWithDispatch } from '../types';
import { initialAppState, rootReducer } from '.';

const store = React
  .createContext<AppStateWithDispatch>({ state: initialAppState, dispatch: () => {} });

const StateProvider: React.FunctionComponent = ({ children }) => {
  const [state, dispatch]: [AppState, React.Dispatch<Action>] = React
    .useReducer(rootReducer, initialAppState);
  return <store.Provider value={{ state, dispatch }}>{children}</store.Provider>;
};

export { StateProvider, store };
