import { Action, Word } from "../../types";

function wordReducer(word: Word, { type }: Action): Word {
  return type === "LEARN_WORD" ? ({ ...word, learned: true } as Word) : word;
}

export { wordReducer };
