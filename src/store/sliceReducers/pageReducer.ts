import { Action, PageState } from '../../types';
import { actions } from '..';

export const pageReducer = (page: PageState, { type, payload }: Action): PageState => {
  switch (type) {
    case actions.FETCH_WORDS:
      return { ...page, currentWordIndex: -1 };
    case actions.RESULTS_SAVED:
      return { ...page, resultsSaved: true };
    case actions.REVEAL_ANSWER:
      return { ...page, revealAnswer: true };
    case actions.SET_GUESS: {
      const { guess } = page;
      guess[payload.property] = payload.value;
      return { ...page, guess };
    }
    case actions.SET_STATUS:
      return { ...page, status: payload };
    case actions.TOGGLE_DEPONENT:
      return { ...page, passiveSelected: !page.passiveSelected };
    case actions.TOGGLE_PLURAL:
      return { ...page, pluralSelected: !page.pluralSelected };
    default:
      return page;
  }
};
