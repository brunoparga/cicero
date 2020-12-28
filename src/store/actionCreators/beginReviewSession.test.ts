/* eslint-disable no-magic-numbers */
// eslint-disable-next-line import/no-namespace
import * as helpers from "../../helpers/store/wordsForReview";
import { words } from "../testHelpers/words";

import { beginReviewSession } from "./beginReviewSession";

const dispatch = jest.fn();
const learnedWords = words.map((word) => ({ ...word, learned: true }));

beforeEach(() => {
  const json = (jest
    .fn()
    .mockResolvedValue(learnedWords) as unknown) as Response;

  jest.spyOn(global, "fetch").mockResolvedValue({ json });
});

afterEach(() => {
  jest.restoreAllMocks();
});

it("calls the API", async () => {
  await beginReviewSession(dispatch);

  const expectedFetchOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer null",
    },
  };

  expect(fetch.mock.calls[0]).toEqual([
    "http://localhost:3001/words/review",
    expectedFetchOptions,
  ]);
});

it("calls the correct actions", async () => {
  helpers.wordsForReview = jest.fn((word) => word);

  await beginReviewSession(dispatch);

  expect(dispatch).toHaveBeenNthCalledWith(1, {
    type: "SET_WORDS",
    payload: learnedWords,
  });
  expect(dispatch).toHaveBeenNthCalledWith(2, { type: "SET_WORD" });
});
