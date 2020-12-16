import { setPageOnNewWord, setWordOptions } from "../helpers";
import { AppReducer, AppState } from "../types";

import { initialPageState } from "./initialPageState";

function setWord(state: AppState): AppState {
  const index = state.page.currentWordIndex + 1;
  const word = state.words[index];

  // If word is undefined, this means we're out of words and should end the
  // study session.
  if (!word) {
    return {
      ...state,
      word: undefined,
      page: { ...initialPageState, status: "done" },
    };
  }

  const page = setPageOnNewWord(word, index);

  if (word.learned) {
    const rightAnswer =
      word.questionType === "Translation" ? word.english : word.lemma;

    word.options = setWordOptions(word.options, rightAnswer);
  }

  return { ...state, word, page };
}

// eslint-disable-next-line func-style
export const crossSliceReducer: AppReducer = (state, { type }) =>
  type === "SET_WORD" ? setWord(state) : state;
