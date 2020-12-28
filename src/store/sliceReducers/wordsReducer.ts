import { Action, Word } from "../../types";

function wordsReducer(words: Word[], { type, payload }: Action): Word[] {
  return type === "SET_WORDS" ? (payload as Word[]) : words;
}

export { wordsReducer };
