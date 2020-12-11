import React from "react";

import { store } from "../../../store";
import { Question } from "../../shared";
import { Word } from "../../../types";
import { describeWord } from "../../../helpers";

export const TranslationQuestion: React.FunctionComponent = () => {
  const { state } = React.useContext(store) as { state: { word: Word } };

  const { word } = state;

  return <Question header={describeWord(word)} label="Translation" />;
};
