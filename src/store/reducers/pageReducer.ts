import { Action, PageState, Word } from '../../types';
import { actionTypes } from '..';

export const pageReducer = (page: PageState, { type, payload }: Action): PageState => {
  switch (type) {
    case actionTypes.REVEAL_ANSWER:
      return { ...page, revealAnswer: true };
    case actionTypes.SET_GUESS: {
      const { guess } = page;
      guess[payload.property] = payload.value;
      return { ...page, guess };
    }
    case actionTypes.SET_WORD: {
      const [word] = payload as Word[];
      // do whatever this action does to this slice
      const guessOptions = {
        Adjective: { latin: false, declension: false },
        Etcetera: { latin: false },
        Noun: { latin: false, genitive: false, gender: false },
        Translation: { translation: false },
        Verb: { latin: false, infinitive: false },
      };
      const guess = guessOptions[word.questionType];
      return { ...page, guess };
    }
    case actionTypes.TOGGLE_DEPONENT:
      return { ...page, passiveSelected: !page.passiveSelected };
    case actionTypes.TOGGLE_PLURAL:
      return { ...page, pluralSelected: !page.pluralSelected };
    default:
      throw new Error();
  }
};
