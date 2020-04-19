// eslint-disable-next-line no-unused-vars
import { AppState, Action } from './types';

export const types = {
  TOGGLE_PLURAL: 'TOGGLE_PLURAL',
  SET_GUESS: 'SET_GUESS',
  REVEAL_ANSWER: 'REVEAL_ANSWER',
};

export default (state: AppState, { type, payload }: Action): AppState => {
  switch (type) {
    case types.TOGGLE_PLURAL:
      return { ...state, pluralSelected: !state.pluralSelected };
    case types.SET_GUESS: {
      const { guess } = state;
      const { property, value } = payload as {
        property: 'latin' | 'genitive' | 'gender',
        value: boolean,
      };
      guess[property] = value;
      return { ...state, guess };
    }
    case types.REVEAL_ANSWER:
      return { ...state, revealAnswer: true };
    default:
      throw new Error();
  }
};
