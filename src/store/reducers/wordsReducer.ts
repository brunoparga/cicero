import { Action, Word } from '../../types';
import { actionTypes } from '..';

export const wordsReducer = (words: Word[], { type, payload }: Action): Word[] => {
  switch (type) {
    case actionTypes.SET_WORD: {
      const [, ...newWords] = payload;
      return newWords;
    }
    case actionTypes.SET_WORDS:
      return payload;
    default:
      return words;
  }
};
