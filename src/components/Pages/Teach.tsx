import React from "react";

import { store } from "../../store";
import { Word } from "../../types";
import { Answer } from "../shared";

import { functionSelector } from "./teachHelpers";
import "./Teach.css";

export const Teach: React.FunctionComponent = () => {
  const { state } = React.useContext(store) as { state: { word: Word } };

  const { word } = state;

  // depending on the questionType of the word, a function is selected to generate the right
  // elements for teaching
  const [header, description, text] = functionSelector[word.questionType](word);

  return <Answer teach header={header} description={description} text={text} />;
};
