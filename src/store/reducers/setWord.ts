// eslint-disable-next-line no-unused-vars
import { AppState, Word } from '../../types';
import { setOptions } from '../../helpers/setOptions';

export const setWord = (state: AppState): AppState => {
  const [word, ...words] = state.words as Word[];
  const correctAnswer = word.questionType === 'Translation' ? word.english : word.lemma;
  word.options = setOptions(word.options, correctAnswer);
  const guessOptions = {
    Adjective: { latin: false, declension: false },
    Etcetera: { latin: false },
    Noun: { latin: false, genitive: false, gender: false },
    Translation: { translation: false },
    Verb: { latin: false, infinitive: false },
  };
  const guess = guessOptions[word.questionType];
  return {
    ...state,
    word,
    words,
    guess,
    revealAnswer: false,
    pluralSelected: false,
    passiveSelected: false,
  };
};
