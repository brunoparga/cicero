import React from "react";

import { Buttons } from "../../shared";
import { store } from "../../../store";
import { Word } from "../../../types";

// Buttons to select the noun's gender. Nouns that are both masculine and
// feminine are rare enough that it is not worth it coding this as checkboxes
// rather than radio buttons.
// eslint-disable-next-line func-style
export const GenderButtons: React.FunctionComponent = () => {
  const { state } = React.useContext(store) as { state: { word: Word } };

  const { word } = state;

  const { gender } = word.properties;
  const answer = gender === "masculine/feminine" ? "masc./fem." : gender;
  const items = ["masculine", "feminine", "neuter", "masc./fem."];

  return (
    <div className="pink-background">
      <Buttons label="Gender" items={items} correctAnswer={answer} />
    </div>
  );
};
