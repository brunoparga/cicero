import { Action } from "../types";

const types = [
  // Page actions
  "RESULTS_SAVED",
  "SET_STATUS",

  // User actions
  "SIGN_IN",
  "SIGN_OUT",

  // Word actions
  "LEARN_WORD",
  "SET_GUESS",
  "SET_WORD",
  "SET_WORDS",
  "TOGGLE_DEPONENT",
  "TOGGLE_PLURAL",
] as const;

export const actions: Record<string, Action> = types.reduce(
  (accumulator, type) => ({ ...accumulator, [type]: { type } }),
  {}
);
