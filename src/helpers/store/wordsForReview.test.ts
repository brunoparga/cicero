import { QuestionType, Word } from "../../types";

import { wordsForReview } from "./wordsForReview";

it("sets words as indeclinable if they have the relevant property", () => {
  const word = { properties: { indeclinable: true } } as Word;

  expect(wordsForReview(word)).toEqual({
    ...word,
    questionType: QuestionType.Indeclinable,
  });
});

it("leaves words unchanged if they are adjectives, nouns, translations or verbs", () => {
  const word1 = { questionType: "Adjective" } as Word;
  const word2 = { questionType: "Noun" } as Word;
  const word3 = { questionType: "Translation" } as Word;
  const word4 = { questionType: "Verb" } as Word;

  expect(wordsForReview(word1)).toEqual(word1);
  expect(wordsForReview(word2)).toEqual(word2);
  expect(wordsForReview(word3)).toEqual(word3);
  expect(wordsForReview(word4)).toEqual(word3);
});

// if it changes form to indicate function like a duck, that is called...
// DUCKLENSION
it('sets numerals and pronouns as "adjectives" if they decline as such', () => {
  const word1 = ({
    questionType: "Numeral",
    properties: { suffixes: "-oo, -ar, -az" },
  } as unknown) as Word;
  const word2 = ({
    questionType: "Pronoun",
    properties: { suffixes: "-oo, -ar, -az" },
  } as unknown) as Word;

  expect(wordsForReview(word1)).toEqual({
    ...word1,
    questionType: QuestionType.Adjective,
  });
  expect(wordsForReview(word2)).toEqual({
    ...word2,
    questionType: QuestionType.Adjective,
  });
});

it("sets all other words - adverbs, conjunctions, etc. - as indeclinable", () => {
  const word = ({ questionType: "Prefix" } as unknown) as Word;

  expect(wordsForReview(word)).toEqual({
    ...word,
    questionType: QuestionType.Indeclinable,
  });
});
