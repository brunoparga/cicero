import React from "react";

import { store } from "../../../store";

import { VerbAnswer } from "./VerbAnswer";
import { VerbQuestion } from "./VerbQuestion";

// Decide to show question or answer based on whether the word has already been
// guessed.
// eslint-disable-next-line func-style
export const Verb: React.FunctionComponent = () => {
  const {
    state: {
      page: { revealAnswer },
    },
  } = React.useContext(store);

  return revealAnswer ? <VerbAnswer /> : <VerbQuestion />;
};
