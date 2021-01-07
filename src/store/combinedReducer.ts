import combineReducers from "react-combine-reducers";

import { Action, AppReducer, Word } from "../types";

import { initialPageState } from "./initialPageState";
import { page, user, word, words } from "./sliceReducers";

type WordSlice = [(word: Word, action: Action) => Word, Word];

const [combinedReducer, initialAppState] = combineReducers<AppReducer>({
  page: [page, initialPageState],
  user: [user, { message: "" }],
  word: ([word, undefined] as unknown) as WordSlice,
  words: [words, []],
});

export { combinedReducer, initialAppState };
