import React from "react";

import { store } from "../../../store";
import { Word } from "../../../types";
import { Answer } from "../../shared";
import { setGenitive } from "../../../helpers";

// Prepare the correct answer for presentation
// eslint-disable-next-line func-style
export const NounAnswer: React.FunctionComponent = () => {
  const {
    state: {
      word: { lemma, english, properties },
    },
  } = React.useContext(store) as { state: { word: Word } };

  // Pick the correct declension ending from the suffixes of the correct number
  const genitive = setGenitive(properties);
  const answer = `${lemma}, ${genitive}, ${properties.gender} ${properties.number} noun`;

  return <Answer header={english} text={answer} />;
};
