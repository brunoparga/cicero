import combineReducers from 'react-combine-reducers';

import { AppReducer, AppState, PageState } from '../types';
import * as reducers from './reducers';

const initialPageState: PageState = {
  guess: {},
  passiveSelected: false,
  pluralSelected: false,
  revealAnswer: false,
};

export const [reducer, initialAppState]: [AppReducer, AppState] = combineReducers<AppReducer>({
  page: [reducers.pageReducer, initialPageState],
  user: [reducers.userReducer, { message: '' }],
  word: [reducers.wordReducer, null],
  words: [reducers.wordsReducer, []],
});
