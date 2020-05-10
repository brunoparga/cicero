// eslint-disable-next-line no-unused-vars
import { AppState } from '../../types';
import { setOptions } from '../../helpers/setOptions';

export const setWord = (state: AppState): AppState => {
  const [word, ...words] = state.words;
  const correctAnswer = word.questionType === 'EnglishWord' ? word.english : word.lemma;
  word.options = setOptions(word.options, correctAnswer);
  const guessOptions = {
    EnglishWord: { translation: false },
    LatinNoun: { latin: false, genitive: false, gender: false },
    LatinVerb: { infinitive: false },
  };
  const guess = guessOptions[word.questionType];
  return {
    word, words, guess, revealAnswer: false, pluralSelected: false, passiveSelected: false,
  };
};
