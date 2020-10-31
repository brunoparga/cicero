import { Action, Word } from '../../types';
import { actionTypes } from '..';
import { setWordOptions } from '../../helpers';

export const wordReducer = (word: Word | null, { type, payload }: Action): Word | null => {
  switch (type) {
    case actionTypes.LEARN_WORD:
      return { ...word, learned: true } as Word;
    case actionTypes.SET_WORD: {
      const newWord = payload.words[payload.index];
      // If undefined, this means we're out of words and should end the study session.
      // The store will take care of that for us.
      if (!newWord) { return null; }
      const rightAnswer = newWord.questionType === 'Translation' ? newWord.english : newWord.lemma;
      newWord.options = setWordOptions(newWord.options, rightAnswer);
      return newWord;
    }
    default:
      return word;
  }
};
