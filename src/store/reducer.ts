import combineReducers from 'react-combine-reducers';

import { AppReducer, AppState } from '../types';
import { initialPageState } from '.';
import * as reducers from './reducers';

export const [reducer, initialAppState]: [AppReducer, AppState] = combineReducers<AppReducer>({
  page: [reducers.pageReducer, initialPageState],
  user: [reducers.userReducer, { message: '' }],
  word: [reducers.wordReducer, null],
  words: [reducers.wordsReducer, []],
});
