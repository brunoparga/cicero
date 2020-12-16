import React from "react";

import { store } from "../../../store";
import { Word } from "../../../types";
import { Answer } from "../../shared";
import { describeAdjective } from "../../../helpers";

// Prepare the correct answer for presentation
// eslint-disable-next-line func-style
export const AdjectiveAnswer: React.FunctionComponent = () => {
  const { state } = React.useContext(store) as { state: { word: Word } };

  const { word } = state;

  const text = describeAdjective(word);

  return <Answer header={word.english} text={text} />;
};
