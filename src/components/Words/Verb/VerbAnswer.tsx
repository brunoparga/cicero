import React from "react";

import { store } from "../../../store";
import { Word } from "../../../types";
import { Answer } from "../../shared";
import { describeVerb } from "../../../helpers";

// Prepare the correct answer for presentation
// eslint-disable-next-line func-style
export const VerbAnswer: React.FunctionComponent = () => {
  const { state } = React.useContext(store) as { state: { word: Word } };

  const { word } = state;

  const answer = describeVerb(word);

  return <Answer header={word.english} text={answer} />;
};
