import { Action, AppState } from '.';

// eslint-disable-next-line no-unused-vars
export type AppReducer = (state: AppState, { type, payload }: Action) => AppState
