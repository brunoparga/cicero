import { Action, Word } from '../../types';

export const wordReducer = (word: Word | null, { type }: Action): Word | null => {
  switch (type) {
    case 'LEARN_WORD':
      return { ...word, learned: true } as Word;
    default:
      return word;
  }
};
