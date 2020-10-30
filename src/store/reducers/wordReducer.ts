import { Action, Word } from '../../types';
import { actionTypes } from '..';
import { setOptions } from '../../helpers/setOptions';

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
      newWord.options = setOptions(newWord.options, rightAnswer);
      return newWord;
    }
    default:
      return word;
  }
};
