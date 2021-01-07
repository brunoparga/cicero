import { QuestionType, Word } from "../../types";

function wordsForReview(word: Word): Word {
  const translationProbability = 0.333;

  if (Math.random() < translationProbability) {
    return { ...word, questionType: QuestionType.Translation };
  }

  if (word.properties.indeclinable) {
    return { ...word, questionType: QuestionType.Indeclinable };
  }

  if ("suffixes" in word.properties) {
    return { ...word, questionType: QuestionType.Adjective };
  }

  if (["Adjective", "Noun", "Verb"].includes(word.questionType)) {
    return word;
  }

  return { ...word, questionType: QuestionType.Indeclinable };
}

export { wordsForReview };
