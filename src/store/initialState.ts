import { AppState } from '../types';

export const initialAppState: AppState = {
  user: { message: '' },
  word: null,
  words: [],
  pluralSelected: false,
  guess: {},
  revealAnswer: false,
  passiveSelected: false,
};
