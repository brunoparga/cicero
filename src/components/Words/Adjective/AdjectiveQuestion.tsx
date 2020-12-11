import React from "react";

import { Question } from "../../shared";
import { store } from "../../../store";
import { Word } from "../../../types";

import { DeclensionButtons } from "./DeclensionButtons";

// Present buttons for user to guess which word is the correct Latin translation, with declension.
export const AdjectiveQuestion: React.FunctionComponent = () => {
  const { state } = React.useContext(store) as { state: { word: Word } };

  const { word } = state;

  return (
    <Question header={word.english}>
      <DeclensionButtons />
    </Question>
  );
};
