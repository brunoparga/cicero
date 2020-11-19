import { QuestionType, Word } from '../types';

export const processWord = (word: Word): Word => {
  // IDEA: write question type in the back-end (pro: easy on the front, con:
  // hard with teach and translate)
  if (word.learned && Math.random() < 0.3) {
    return { ...word, questionType: QuestionType.Translation };
  } if (word.properties?.indeclinable) {
    return { ...word, questionType: QuestionType.Indeclinable };
  } if (['Adjective', 'Noun', 'Verb'].includes(word.questionType)) {
    return word;
  } if (['Numeral', 'Pronoun'].includes(word.questionType) && word.properties) {
    return { ...word, questionType: QuestionType.Adjective };
  }
  return { ...word, questionType: QuestionType.Indeclinable };
};
