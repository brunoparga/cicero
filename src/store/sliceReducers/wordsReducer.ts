import { Action, Word } from "../../types";

export const wordsReducer = (
  words: Word[],
  { type, payload }: Action
): Word[] => {
  switch (type) {
    case "FETCH_WORDS":
      return payload as Word[];

    default:
      return words;
  }
};
