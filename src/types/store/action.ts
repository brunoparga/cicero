import { Dispatch } from 'react';
import { AppState } from './appState';

export type Action = {
  type: string;
  payload?: unknown;
  error?: boolean;
  meta?: unknown;
}

export type AppStateWithDispatch = {
  state: AppState;
  dispatch: Dispatch<Action>;
}
