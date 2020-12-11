import combineReducers from "react-combine-reducers";

import { AppReducer } from "../types";

import { page, user, word, words } from "./sliceReducers";

import { crossSliceReducer, initialPageState } from ".";

export const [combinedReducer, initialAppState] = combineReducers<AppReducer>({
  page: [page, initialPageState],
  user: [user, { message: "" }],
  word: [word, null],
  words: [words, []],
});

export const rootReducer: AppReducer = (state, action) => {
  const intermediateState = combinedReducer(state, action);

  return crossSliceReducer(intermediateState, action);
};
