import { Action, AppState } from '../types';
import { actionTypes } from '.';
import { setGuess, setUser, setWord } from './reducers';

export const reducer = (state: AppState, { type, payload }: Action): AppState => {
  switch (type) {
    case actionTypes.LEARN_WORD:
      return { ...state, word: { ...state.word, learned: true } } as AppState;
    case actionTypes.REVEAL_ANSWER:
      return { ...state, revealAnswer: true };
    case actionTypes.SET_GUESS:
      return setGuess(state, payload);
    case actionTypes.SET_WORD:
      return setWord(state);
    case actionTypes.SET_WORDS:
      return { ...state, words: payload };
    case actionTypes.SIGN_IN:
      return setUser(state, payload);
    case actionTypes.SIGN_OUT:
      return { ...state, user: { message: 'Signed out.' } };
    case actionTypes.TOGGLE_DEPONENT:
      return { ...state, passiveSelected: !state.passiveSelected };
    case actionTypes.TOGGLE_PLURAL:
      return { ...state, pluralSelected: !state.pluralSelected };
    default:
      throw new Error();
  }
};
