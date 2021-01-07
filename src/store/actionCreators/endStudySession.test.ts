/* eslint-disable no-magic-numbers */
import { words } from "../testHelpers/words";

import { endStudySession } from "./endStudySession";

const dispatch = jest.fn();

beforeEach(() => {
  jest
    .spyOn(global, "fetch")
    .mockResolvedValue((undefined as unknown) as Response);
});

it("calls the API", async () => {
  await endStudySession(words, dispatch);

  const expectedFetchOptions = {
    method: "POST",
    body: JSON.stringify([1, 2, 3]),

    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer null",
    },
  };

  // await expect(fetch.mock.calls[0]).toEqual([
  //   "http://localhost:3001/words",
  //   expectedFetchOptions,
  // ]);
});

it("calls the correct actions", async () => {
  await endStudySession(words, dispatch);

  expect(dispatch).toHaveBeenNthCalledWith(1, { type: "SET_WORD" });
  expect(dispatch).toHaveBeenNthCalledWith(2, { type: "RESULTS_SAVED" });
});
