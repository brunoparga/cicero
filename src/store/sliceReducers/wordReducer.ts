import { Action, Word } from "../../types";

export const wordReducer = (word: Word, { type }: Action): Word =>
  type === "LEARN_WORD" ? ({ ...word, learned: true } as Word) : word;
