// eslint-disable-next-line no-unused-vars
import { AppState, Word } from '../types';
import { setOptions } from '../../helpers/setOptions';
import { initialAppState as defaultState } from '../initialState';

export const setWord = (payload: Word): AppState => {
  const word = payload;
  word.options = setOptions(word.options, word.lemma);
  return { ...defaultState, word };
};
