import { PageState } from '../types';

export const initialPageState: PageState = {
  status: 'frontPage',
  currentWordIndex: 0,
  resultsSaved: false,
  guess: {},
  passiveSelected: false,
  pluralSelected: false,
  revealAnswer: false,
};
