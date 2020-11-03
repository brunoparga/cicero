import { setPageOnNewWord, setWordOptions } from '../helpers';
import { AppReducer, PageState } from '../types';
import { actionTypes } from './actionTypes';
import { initialPageState } from './initialPageState';

export const crossSliceReducer: AppReducer = (state, { type }) => {
  switch (type) {
    case actionTypes.SET_WORD: {
      const index = state.page.currentWordIndex + 1;
      const word = state.words[index];
      // If word is undefined, this means we're out of words and should end the study session.
      if (!word) {
        const { resultsSaved } = state.page;
        const page: PageState = { ...initialPageState, status: 'done', resultsSaved };
        return { ...state, word: null, page };
      }
      const page = setPageOnNewWord(word, index);
      const rightAnswer = word.questionType === 'Translation' ? word.english : word.lemma;
      word.options = setWordOptions(word.options, rightAnswer);
      return { ...state, word, page };
    }
    default:
      return state;
  }
};
