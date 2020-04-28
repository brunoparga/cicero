// eslint-disable-next-line no-unused-vars
import { Word } from '../types';
import setOptions from '../../helpers/setOptions';
// eslint-disable-next-line import/prefer-default-export
export default (payload: Word) => {
  const word = payload;
  word.options = setOptions(word.options, word.lemma);
  const guess = { latin: false, genitive: false, gender: false };
  return {
    word, guess, pluralSelected: false, revealAnswer: false, passiveSelected: false,
  };
};
