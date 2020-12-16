import React from "react";

import { store } from "../../../store";

import { NounAnswer } from "./NounAnswer";
import { NounQuestion } from "./NounQuestion";

// Decide to show question or answer based on whether the word has already been
// guessed.
// eslint-disable-next-line func-style
export const Noun: React.FunctionComponent = () => {
  const {
    state: {
      page: { revealAnswer },
    },
  } = React.useContext(store);

  return revealAnswer ? <NounAnswer /> : <NounQuestion />;
};
