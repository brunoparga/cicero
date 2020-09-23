import { Action, AppState } from '../types';
import { actionTypes } from '.';
import { setGuess, setUser, setWord } from './reducers';

export const reducer = (state: AppState, { type, payload }: Action): AppState => {
  switch (type) {
    case actionTypes.LEARN_WORD:
      return { ...state, word: { ...state.word, learned: true } } as AppState;
    case actionTypes.REVEAL_ANSWER:
      return { ...state, page: { ...state.page, revealAnswer: true } };
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
      return { ...state, page: { ...state.page, passiveSelected: !state.page.passiveSelected } };
    case actionTypes.TOGGLE_PLURAL:
      return { ...state, page: { ...state.page, pluralSelected: !state.page.pluralSelected } };
    default:
      throw new Error();
  }
};
