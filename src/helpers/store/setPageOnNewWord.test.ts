import { Word } from "../../types";

import { setPageOnNewWord } from "./setPageOnNewWord";

const baseExpectation = {
  status: "studying",

  // Could be any number, the function under test uses its argument unchanged
  currentWordIndex: 1,
  resultsSaved: false,
  passiveSelected: false,
  pluralSelected: false,
  revealAnswer: false,
};

it("sets the page variables for adjectives", () => {
  const word = { questionType: "Adjective" } as Word;
  const expectedPageState = {
    ...baseExpectation,
    guess: { latin: false, declension: false },
  };

  expect(setPageOnNewWord(word, 1)).toEqual(expectedPageState);
});

it("sets the page variables for indeclinable words", () => {
  const word = { questionType: "Indeclinable" } as Word;
  const expectedPageState = {
    ...baseExpectation,
    guess: { latin: false },
  };

  expect(setPageOnNewWord(word, 1)).toEqual(expectedPageState);
});

it("sets the page variables for nouns", () => {
  const word = { questionType: "Noun" } as Word;
  const expectedPageState = {
    ...baseExpectation,
    guess: { latin: false, genitive: false, gender: false },
  };

  expect(setPageOnNewWord(word, 1)).toEqual(expectedPageState);
});

it("sets the page variables for words to be translated", () => {
  const word = { questionType: "Translation" } as Word;
  const expectedPageState = {
    ...baseExpectation,
    guess: { translation: false },
  };

  expect(setPageOnNewWord(word, 1)).toEqual(expectedPageState);
});

it("sets the page variables for verbs", () => {
  const word = { questionType: "Verb" } as Word;
  const expectedPageState = {
    ...baseExpectation,
    guess: { latin: false, infinitive: false },
  };

  expect(setPageOnNewWord(word, 1)).toEqual(expectedPageState);
});
