import React from "react";

import { Buttons } from "../../shared";
import { store } from "../../../store";
import { Word } from "../../../types";

// eslint-disable-next-line func-style
export const DeclensionButtons: React.FunctionComponent = () => {
  const { state } = React.useContext(store) as { state: { word: Word } };

  const { word } = state;

  const items = [
    "1st/2nd (-us)",
    "1st/2nd (-er)",
    "3rd (-er/-ris/-re)",
    "3rd (-is/-e)",
    "3rd (all equal)",
  ];

  return (
    <div className="pink-background">
      <Buttons
        label="Declension"
        items={items}
        correctAnswer={word.properties.suffixes}
      />
    </div>
  );
};
