// eslint-disable-next-line no-unused-vars
import { AppState, Action } from './types';
import setGuess from './reducers/setGuess';
import setWord from './reducers/setWord';

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
    case types.SET_GUESS:
      return setGuess(state, payload);
    case types.SET_WORD:
      return setWord(payload);
    case types.TOGGLE_PLURAL:
      return { ...state, pluralSelected: !state.pluralSelected };
    default:
      throw new Error();
  }
};
