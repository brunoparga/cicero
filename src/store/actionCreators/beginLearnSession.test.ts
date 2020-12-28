import { beginLearnSession } from "./beginLearnSession";
import { words } from "../testHelpers/words";

const dispatch = jest.fn();

beforeEach(() => {
  const json = (jest.fn().mockResolvedValue(words) as unknown) as Response;

  jest.spyOn(global, "fetch").mockResolvedValue({ json });
});

afterEach(() => {
  jest.restoreAllMocks();
});

it("calls the API", async () => {
  await beginLearnSession(dispatch);

  const expectedFetchOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer null",
    },
  };

  expect(fetch.mock.calls[0]).toEqual([
    "http://localhost:3001/words/learn",
    expectedFetchOptions,
  ]);
});

it("calls the correct actions", async () => {
  await beginLearnSession(dispatch);

  expect(dispatch).toHaveBeenNthCalledWith(1, {
    type: "SET_WORDS",
    payload: words,
  });
  // eslint-disable-next-line no-magic-numbers
  expect(dispatch).toHaveBeenNthCalledWith(2, { type: "SET_WORD" });
});
