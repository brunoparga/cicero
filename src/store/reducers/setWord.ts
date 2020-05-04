// eslint-disable-next-line no-unused-vars
import { AppState } from '../../types';
import { setOptions } from '../../helpers/setOptions';

export const setWord = (state: AppState): AppState => {
  const [word, ...words] = state.words;
  word.options = setOptions(word.options, word.lemma);
  const guessOptions = {
    LatinNoun: { latin: false, genitive: false, gender: false },
    LatinVerb: { infinitive: false },
  };
  const guess = guessOptions[word.questionType];
  return {
    word, words, guess, revealAnswer: false, pluralSelected: false, passiveSelected: false,
  };
};
