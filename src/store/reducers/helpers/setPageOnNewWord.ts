import { PageState, Word } from '../../../types';

export const setPageOnNewWord = (word: Word, index: number): PageState => {
  const guessOptions = {
    Adjective: { latin: false, declension: false },
    Indeclinable: { latin: false },
    Noun: { latin: false, genitive: false, gender: false },
    Translation: { translation: false },
    Verb: { latin: false, infinitive: false },
  };
  const guess = guessOptions[word.questionType];
  return {
    studying: true,
    currentWordIndex: index,
    guess,
    passiveSelected: false,
    pluralSelected: false,
    revealAnswer: false,
  };
};
