import React from "react";

import { store } from "../../../store";

import { TranslationAnswer } from "./TranslationAnswer";
import { TranslationQuestion } from "./TranslationQuestion";

// Decide to show question or answer based on whether the word has already been guessed.
export const Translation: React.FunctionComponent = () => {
  const {
    state: {
      page: { revealAnswer },
    },
  } = React.useContext(store);

  return revealAnswer ? <TranslationAnswer /> : <TranslationQuestion />;
};
