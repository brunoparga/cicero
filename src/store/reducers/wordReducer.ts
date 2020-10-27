import { Action, Word } from '../../types';
import { actionTypes } from '..';
import { setOptions } from '../../helpers/setOptions';

export const wordReducer = (word: Word | null, { type, payload }: Action): Word => {
  switch (type) {
    case actionTypes.LEARN_WORD:
      return { ...word, learned: true } as Word;
    case actionTypes.SET_WORD: {
      const [newWord] = payload;
      const rightAnswer = newWord.questionType === 'Translation' ? newWord.english : newWord.lemma;
      newWord.options = setOptions(newWord.options, rightAnswer);
      return newWord;
    }
    default:
      throw new Error();
  }
};
