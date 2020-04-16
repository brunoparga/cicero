// eslint-disable-next-line no-unused-vars
import { AppState, Action } from './types';

export const types = {
  TOGGLE_PLURAL: 'TOGGLE_PLURAL',
  TOGGLE_WORD: 'TOGGLE_WORD',
  TOGGLE_GENITIVE: 'TOGGLE_GENITIVE',
  TOGGLE_GENDER: 'TOGGLE_GENDER',
};

export default (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case types.TOGGLE_PLURAL:
      return { ...state, pluralSelected: !state.pluralSelected };
    case types.TOGGLE_WORD: {
      const newGuess = { ...state.guess, word: !state.guess.word };
      return { ...state, guess: newGuess };
    }
    case types.TOGGLE_GENITIVE: {
      const newGuess = { ...state.guess, genitive: !state.guess.genitive };
      return { ...state, guess: newGuess };
    }
    case types.TOGGLE_GENDER: {
      const newGuess = { ...state.guess, gender: !state.guess.gender };
      return { ...state, guess: newGuess };
    }
    default:
      throw new Error();
  }
};
