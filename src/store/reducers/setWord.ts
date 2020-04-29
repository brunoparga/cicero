import {
  // eslint-disable-next-line no-unused-vars
  AppState, LatinNounGuess, LatinVerbGuess, Word,
} from '../types';
import { setOptions } from '../../helpers/setOptions';
import { initialAppState as defaultState } from '../initialState';

export const setWord = (payload: Word): AppState => {
  const word = payload;
  word.options = setOptions(word.options, word.lemma);
  let guess = {};
  if (word.questionType === 'LatinNoun') {
    guess = { latin: false, genitive: false, gender: false } as LatinNounGuess;
  } else if (word.questionType === 'LatinVerb') {
    guess = { infinitive: false } as LatinVerbGuess;
  }
  return { ...defaultState, word, guess };
};
