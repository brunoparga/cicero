import { Action, Word } from "../../types";

function wordsReducer(words: Word[], { type, payload }: Action): Word[] {
  return type === "FETCH_WORDS" ? (payload as Word[]) : words;
}

export { wordsReducer };
