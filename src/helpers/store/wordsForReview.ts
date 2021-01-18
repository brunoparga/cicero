import { QuestionType, Word } from "../../types";

function wordsForReview(word: Word): Word {
  if (word.properties.indeclinable) {
    return { ...word, questionType: QuestionType.Indeclinable };
  }

  if ("suffixes" in word.properties) {
    return { ...word, questionType: QuestionType.Adjective };
  }

  if (
    ["Adjective", "Noun", "Translation", "Verb"].includes(word.questionType)
  ) {
    return word;
  }

  return { ...word, questionType: QuestionType.Indeclinable };
}

export { wordsForReview };
