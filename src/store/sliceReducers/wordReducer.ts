import { Action, Word } from '../../types';
import { actions } from '..';

export const wordReducer = (word: Word | null, { type }: Action): Word | null => {
  switch (type) {
    case actions.LEARN_WORD:
      return { ...word, learned: true } as Word;
    default:
      return word;
  }
};
