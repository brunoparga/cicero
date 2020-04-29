// eslint-disable-next-line no-unused-vars
import { AppState } from './types';

export const initialAppState: AppState = {
  word: null,
  pluralSelected: false,
  guess: {
    latin: false,
    genitive: false,
    gender: false,
  },
  revealAnswer: false,
  passiveSelected: false,
};
