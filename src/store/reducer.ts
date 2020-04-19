import { GrammaticalNumber, Declension, Gender } from '../grammar/grammarCategories';
// eslint-disable-next-line no-unused-vars
import { AppState, Action } from './types';
import shuffle from '../helpers/shuffle';

export const types = {
  FETCH_NEXT: 'FETCH_NEXT',
  REVEAL_ANSWER: 'REVEAL_ANSWER',
  SET_GUESS: 'SET_GUESS',
  TOGGLE_PLURAL: 'TOGGLE_PLURAL',
};

export default (state: AppState, { type, payload }: Action): AppState => {
  switch (type) {
    case types.FETCH_NEXT: {
      const word = {
        english: 'time',
        lemma: 'tempus',
        options: shuffle(['corpus', 'templum', 'mundus', 'tempus']),
        number: GrammaticalNumber.Singular,
        declension: Declension.Third,
        gender: Gender.Neuter,
      };
      const guess = { latin: false, genitive: false, gender: false };
      return {
        word, guess, pluralSelected: false, revealAnswer: false,
      };
    }
    case types.REVEAL_ANSWER:
      return { ...state, revealAnswer: true };
    case types.SET_GUESS: {
      const { guess } = state;
      const { property, value } = payload as {
        property: 'latin' | 'genitive' | 'gender',
        value: boolean,
      };
      guess[property] = value;
      return { ...state, guess };
    }
    case types.TOGGLE_PLURAL:
      return { ...state, pluralSelected: !state.pluralSelected };
    default:
      throw new Error();
  }
};
