import React from "react";

import { store } from "../../store";
import {
  AdjectiveProperties,
  NounProperties,
  VerbProperties,
  Word,
} from "../../types";
import { Answer } from "../shared";

import { functionSelector } from "./teachHelpers";
import "./Teach.css";

// eslint-disable-next-line func-style
export const Teach: React.FunctionComponent = () => {
  const { state } = React.useContext(store);

  const { word } = state as {
    word: Word & { properties: AdjectiveProperties } & {
      properties: NounProperties;
    } & { properties: VerbProperties };
  };

  // depending on the questionType of the word, a function is selected to
  // generate the right elements for teaching
  const [header, description, text] = functionSelector[word.questionType](word);

  return <Answer teach header={header} description={description} text={text} />;
};
