import { Action, Word } from "../../types";

export const wordsReducer = (
  words: Word[],
  { type, payload }: Action
): Word[] => (type === "FETCH_WORDS" ? (payload as Word[]) : words);
