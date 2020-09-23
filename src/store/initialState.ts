import { AppState, PageState } from '../types';

const initialPageState: PageState = {
  guess: {},
  passiveSelected: false,
  pluralSelected: false,
  revealAnswer: false,
};

export const initialAppState: AppState = {
  page: initialPageState,
  user: { message: '' },
  word: null,
  words: [],
};
