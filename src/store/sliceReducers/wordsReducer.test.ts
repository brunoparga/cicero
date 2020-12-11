import { Word } from "../../types";

import { wordsReducer } from "./wordsReducer";

it("replaces the words array when necessary", () => {
  const words = [{ lemma: "foo" }, { lemma: "bar" }] as Word[];
  const action = {
    type: "FETCH_WORDS",
    payload: [{ lemma: "baz" }, { lemma: "quux" }],
  };
  const expectation = [{ lemma: "baz" }, { lemma: "quux" }] as Word[];

  expect(wordsReducer(words, action)).toEqual(expectation);
});

it("does nothing with any other action", () => {
  const words = [{ lemma: "foo" }, { lemma: "bar" }] as Word[];
  const action = { type: "WHATEVER" };

  expect(wordsReducer(words, action)).toEqual(words);
});
