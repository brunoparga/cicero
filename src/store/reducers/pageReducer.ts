import { Action, PageState } from '../../types';
import { actionTypes } from '..';
import { setPageOnNewWord } from './helpers/setPageOnNewWord';

export const pageReducer = (page: PageState, { type, payload }: Action): PageState => {
  switch (type) {
    case actionTypes.FETCH_WORDS:
      return { ...page, currentWordIndex: 0 };
    case actionTypes.RESULTS_SAVED:
      return { ...page, resultsSaved: true };
    case actionTypes.REVEAL_ANSWER:
      return { ...page, revealAnswer: true };
    case actionTypes.SET_GUESS: {
      const { guess } = page;
      guess[payload.property] = payload.value;
      return { ...page, guess };
    }
    case actionTypes.SET_WORD: {
      const word = payload.words[page.currentWordIndex];
      return setPageOnNewWord(word, payload.index);
    }
    case actionTypes.SET_STATUS:
      return { ...page, status: payload };
    case actionTypes.TOGGLE_DEPONENT:
      return { ...page, passiveSelected: !page.passiveSelected };
    case actionTypes.TOGGLE_PLURAL:
      return { ...page, pluralSelected: !page.pluralSelected };
    default:
      return page;
  }
};
