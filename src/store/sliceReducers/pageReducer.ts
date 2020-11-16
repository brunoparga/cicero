import { Action, PageState } from '../../types';
import { actions } from '..';

export const pageReducer = (page: PageState, { type, payload }: Action): PageState => {
  switch (type) {
    case actions.FETCH_WORDS:
      return { ...page, currentWordIndex: -1 };
    case actions.RESULTS_SAVED:
      return { ...page, resultsSaved: true };
    case actions.SET_GUESS: {
      const { guess } = page;
      const typedPayload = payload as { property: string, value: boolean };
      guess[typedPayload.property] = (typedPayload).value;
      // If the current guess is correct, check if all guesses are correct and reveal answer if so
      if (typedPayload.value) {
        const wordIsGuessed = Object.values(page.guess).every((entry: boolean) => entry);
        if (wordIsGuessed) {
          return { ...page, guess, revealAnswer: true };
        }
      }
      return { ...page, guess };
    }
    case actions.SET_STATUS:
      return { ...page, status: payload as 'frontPage' | 'studying' | 'done' };
    case actions.TOGGLE_DEPONENT:
      return { ...page, passiveSelected: !page.passiveSelected };
    case actions.TOGGLE_PLURAL:
      return { ...page, pluralSelected: !page.pluralSelected };
    default:
      return page;
  }
};
