import { QuestionType, Word } from "../../types";

function wordsForReview(word: Word): Word {
  const translationProbability = 0.333;

  if (Math.random() < translationProbability) {
    return { ...word, questionType: QuestionType.Translation };
  }

  if (word.properties?.indeclinable) {
    return { ...word, questionType: QuestionType.Indeclinable };
  }

  if (["Adjective", "Noun", "Verb"].includes(word.questionType)) {
    return word;
  }

  if (
    ["Numeral", "Pronoun"].includes(word.questionType) &&
    word.properties.suffixes
  ) {
    return { ...word, questionType: QuestionType.Adjective };
  }

  return { ...word, questionType: QuestionType.Indeclinable };
}

export { wordsForReview };
