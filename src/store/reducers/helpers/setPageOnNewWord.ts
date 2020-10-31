import { PageState, Word } from '../../../types';
import { initialPageState } from '../..';

export const setPageOnNewWord = (word: Word, index: number): PageState => {
  const guessesByQuestionType = {
    Adjective: { latin: false, declension: false },
    Indeclinable: { latin: false },
    Noun: { latin: false, genitive: false, gender: false },
    Translation: { translation: false },
    Verb: { latin: false, infinitive: false },
  };
  const guess = guessesByQuestionType[word.questionType];
  return {
    ...initialPageState,
    status: 'studying',
    currentWordIndex: index,
    guess,
  };
};
