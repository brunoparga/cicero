// eslint-disable-next-line no-unused-vars
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
