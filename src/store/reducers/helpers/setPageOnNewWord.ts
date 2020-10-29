import { PageState, Word } from '../../../types';

export const setPageOnNewWord = (word: Word): PageState => {
  const guessOptions = {
    Adjective: { latin: false, declension: false },
    Etcetera: { latin: false },
    Noun: { latin: false, genitive: false, gender: false },
    Translation: { translation: false },
    Verb: { latin: false, infinitive: false },
  };
  const guess = guessOptions[word.questionType];
  return {
    guess,
    passiveSelected: false,
    pluralSelected: false,
    revealAnswer: false,
  };
};
