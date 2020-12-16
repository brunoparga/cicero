import combineReducers from "react-combine-reducers";

import { AppReducer } from "../types";

import { page, user, word, words } from "./sliceReducers";

import { crossSliceReducer, initialPageState } from ".";

const [combinedReducer, initialAppState] = combineReducers<AppReducer>({
  page: [page, initialPageState],
  user: [user, { message: "" }],
  word: [word, undefined],
  words: [words, []],
});

// eslint-disable-next-line func-style
const rootReducer: AppReducer = (state, action) => {
  const intermediateState = combinedReducer(state, action);

  return crossSliceReducer(intermediateState, action);
};

export { combinedReducer, initialAppState, rootReducer };
