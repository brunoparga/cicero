import { PageState } from "../types";

export const initialPageState: PageState = {
  status: "frontPage",
  currentWordIndex: -1,
  resultsSaved: false,
  guess: {},
  passiveSelected: false,
  pluralSelected: false,
  revealAnswer: false,
};
