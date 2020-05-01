/* eslint-disable no-unused-vars */
import { Dispatch } from 'react';
import { AppState } from './appState';

export type Action = {
  type: string;
  payload?: any;
  error?: boolean;
  meta?: any;
}

export type AppStateWithDispatch = {
  state: AppState;
  dispatch: Dispatch<Action>;
}
