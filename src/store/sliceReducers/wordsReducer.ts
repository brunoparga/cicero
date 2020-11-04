import { Action, Word } from '../../types';
import { actions } from '..';

export const wordsReducer = (words: Word[], { type, payload }: Action): Word[] => {
  switch (type) {
    case actions.FETCH_WORDS:
      return payload;
    default:
      return words;
  }
};
