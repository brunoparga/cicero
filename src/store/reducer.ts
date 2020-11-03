import combineReducers from 'react-combine-reducers';

import { AppReducer } from '../types';
import { crossSliceReducer, initialPageState } from '.';
import * as sliceReducers from './sliceReducers';

export const [combinedReducer, initialAppState] = combineReducers<AppReducer>({
  page: [sliceReducers.page, initialPageState],
  user: [sliceReducers.user, { message: '' }],
  word: [sliceReducers.word, null],
  words: [sliceReducers.words, []],
});

export const rootReducer: AppReducer = (state, action) => {
  const intermediateState = combinedReducer(state, action);
  const finalState = crossSliceReducer(intermediateState, action);
  return finalState;
};
