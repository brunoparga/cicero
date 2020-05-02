// eslint-disable-next-line no-unused-vars
import { Action, AppState } from '../types';
import { setGuess } from './reducers/setGuess';
import { setWord } from './reducers/setWord';

export const actionTypes = {
  REVEAL_ANSWER: 'REVEAL_ANSWER',
  SET_GUESS: 'SET_GUESS',
  SET_WORD: 'SET_WORD',
  SET_WORDS: 'SET_WORDS',
  TOGGLE_DEPONENT: 'TOGGLE_DEPONENT',
  TOGGLE_PLURAL: 'TOGGLE_PLURAL',
};

export const reducer = (state: AppState, { type, payload }: Action): AppState => {
  switch (type) {
    case actionTypes.REVEAL_ANSWER:
      return { ...state, revealAnswer: true };
    case actionTypes.SET_GUESS:
      return setGuess(state, payload);
    case actionTypes.SET_WORD:
      return setWord(state);
    case actionTypes.SET_WORDS:
      return { ...state, words: payload };
    case actionTypes.TOGGLE_DEPONENT:
      return { ...state, passiveSelected: !state.passiveSelected };
    case actionTypes.TOGGLE_PLURAL:
      return { ...state, pluralSelected: !state.pluralSelected };
    default:
      throw new Error();
  }
};
