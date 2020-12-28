import combineReducers from "react-combine-reducers";

import { AppReducer } from "../types";

import { initialPageState } from "./initialPageState";
import { page, user, word, words } from "./sliceReducers";

const [combinedReducer, initialAppState] = combineReducers<AppReducer>({
  page: [page, initialPageState],
  user: [user, { message: "" }],
  word: [word, undefined],
  words: [words, []],
});

export { combinedReducer, initialAppState };
