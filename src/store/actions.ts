import { Action } from "../types";

const types = [
  // Page actions
  "RESULTS_SAVED",
  "SET_STATUS",

  // User actions
  "SIGN_IN",
  "SIGN_OUT",

  // Word actions
  "FETCH_WORDS",
  "LEARN_WORD",
  "SET_GUESS",
  "SET_WORD",
  "TOGGLE_DEPONENT",
  "TOGGLE_PLURAL",
] as const;

export const actions: Record<string, Action> = types.reduce(
  (accumulator, type) => ({ ...accumulator, [type]: { type } }),
  {}
);
