import { Action, Word } from '../../types';
import { actionTypes } from '..';

export const wordsReducer = (words: Word[], { type, payload }: Action): Word[] => {
  switch (type) {
    case actionTypes.FETCH_WORDS:
      return payload;
    default:
      return words;
  }
};
