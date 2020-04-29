// eslint-disable-next-line no-unused-vars
import { AppState, Word } from '../types';
import { setOptions } from '../../helpers/setOptions';

export const setWord = (payload: Word): AppState => {
  const word = payload;
  word.options = setOptions(word.options, word.lemma);
  const guess = { latin: false, genitive: false, gender: false };
  return {
    word, guess, pluralSelected: false, revealAnswer: false, passiveSelected: false,
  };
};
