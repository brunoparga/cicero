import { setPageOnNewWord, setWordOptions } from '../helpers';
import { AppReducer } from '../types';
import { initialPageState } from './initialPageState';

export const crossSliceReducer: AppReducer = (state, { type }) => {
  switch (type) {
    case 'SET_WORD': {
      const index = state.page.currentWordIndex + 1;
      const word = state.words[index];
      // If word is undefined, this means we're out of words and should end the study session.
      if (!word) {
        return { ...state, word: null, page: { ...initialPageState, status: 'done' } };
      }
      const page = setPageOnNewWord(word, index);
      if (word.learned) {
        const rightAnswer = word.questionType === 'Translation' ? word.english : word.lemma;
        word.options = setWordOptions(word.options, rightAnswer);
      }
      return { ...state, word, page };
    }
    default:
      return state;
  }
};
