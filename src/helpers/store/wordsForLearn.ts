import { QuestionType, Word } from "../../types";

function wordsForLearn(word: Word): Word {
  // All words whose part of speech contains a comma (i.e., they belong to two
  // parts of speech) are indeclinable.
  const hasComma = word.questionType.includes(",");
  const indeclinables = [
    "Adverb",
    "Conjunction",
    "Interjection",
    "Particle",
    "Prefix",
    "Preposition",
  ];

  if (
    word.properties.indeclinable ||
    hasComma ||
    indeclinables.includes(word.questionType)
  ) {
    return { ...word, questionType: QuestionType.Indeclinable };
  }

  return word;
}

export { wordsForLearn };
