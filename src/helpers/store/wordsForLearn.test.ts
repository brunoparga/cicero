import { QuestionType, Word } from "../../types";

import { wordsForLearn } from "./wordsForLearn";

it("sets as indeclinable words marked as so", () => {
  const word = {
    questionType: QuestionType.Adjective,
    properties: { indeclinable: true },
  } as Word;
  const expectedWord = { ...word, questionType: QuestionType.Indeclinable };

  expect(wordsForLearn(word)).toEqual(expectedWord);
});

it("sets as indeclinable words which belong to two parts of speech", () => {
  const word = ({ questionType: "foo, bar" } as unknown) as Word;
  const expectedWord = { ...word, questionType: QuestionType.Indeclinable };

  expect(wordsForLearn(word)).toEqual(expectedWord);
});

it("sets words as indeclinable by part of speech", () => {
  const word = ({ questionType: "Adverb" } as unknown) as Word;
  const expectedWord = { ...word, questionType: QuestionType.Indeclinable };

  expect(wordsForLearn(word)).toEqual(expectedWord);
});

it("leaves any other words unchanged", () => {
  const word = { questionType: QuestionType.Noun } as Word;

  expect(wordsForLearn(word)).toEqual(word);
});
