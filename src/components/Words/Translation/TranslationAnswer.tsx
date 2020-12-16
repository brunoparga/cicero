import React from "react";

import { describeWord } from "../../../helpers";
import { store } from "../../../store";
import { Word } from "../../../types";
import { Answer } from "../../shared";

// Prepare the correct answer for presentation
// eslint-disable-next-line func-style
export const TranslationAnswer: React.FunctionComponent = () => {
  const { state } = React.useContext(store) as { state: { word: Word } };

  const { word } = state;

  return <Answer header={describeWord(word)} text={word.english} />;
};
