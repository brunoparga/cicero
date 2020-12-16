import React from "react";

import { Question } from "../../shared";
import { store } from "../../../store";
import { Word } from "../../../types";

import { InfinitiveButtons } from "./InfinitiveButtons";

// Present buttons for user to guess which word is the correct Latin
// translation, its genitive suffix and grammatical number.
// eslint-disable-next-line func-style
export const VerbQuestion: React.FunctionComponent = () => {
  const { state } = React.useContext(store) as { state: { word: Word } };

  const { word } = state;

  return (
    <Question header={word.english}>
      <InfinitiveButtons />
    </Question>
  );
};
