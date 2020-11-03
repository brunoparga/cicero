import { Action, Word } from '../../types';
import { actionTypes } from '..';

export const wordReducer = (word: Word | null, { type }: Action): Word | null => {
  switch (type) {
    case actionTypes.LEARN_WORD:
      return { ...word, learned: true } as Word;
    default:
      return word;
  }
};
