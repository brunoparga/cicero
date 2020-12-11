import { Word } from "../../types";

import { wordReducer } from "./wordReducer";

it("sets the word to learned with the correct action", () => {
  const word = { lemma: "corge", learned: false } as Word;
  const action = { type: "LEARN_WORD" };
  const expectation = { lemma: "corge", learned: true } as Word;

  expect(wordReducer(word, action)).toEqual(expectation);
});

it("does nothing with any other action", () => {
  // at the beginning of the session, word is undefined and user signs in
  const word = (undefined as unknown) as Word;
  const action = { type: "SIGN_IN" };

  expect(wordReducer(word, action)).toEqual(word);
});
