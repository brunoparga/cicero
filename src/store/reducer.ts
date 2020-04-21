// eslint-disable-next-line no-unused-vars
import { AppState, Action, Word } from './types';
import shuffle from '../helpers/shuffle';

export const types = {
  REVEAL_ANSWER: 'REVEAL_ANSWER',
  SET_GUESS: 'SET_GUESS',
  SET_WORD: 'SET_WORD',
  TOGGLE_PLURAL: 'TOGGLE_PLURAL',
};

export default (state: AppState, { type, payload }: Action): AppState => {
  switch (type) {
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
    case types.SET_WORD: {
      const word = payload as Word;
      word.options = shuffle(word.options.concat([word.lemma]));
      const guess = { latin: false, genitive: false, gender: false };
      return {
        word, guess, pluralSelected: false, revealAnswer: false,
      };
    }
    case types.TOGGLE_PLURAL:
      return { ...state, pluralSelected: !state.pluralSelected };
    default:
      throw new Error();
  }
};
