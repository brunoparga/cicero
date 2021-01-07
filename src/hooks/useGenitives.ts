import React from "react";

import { AppState, NounProperties, Word } from "../types";
import { store } from "../store";
import { singular, plural } from "../grammar";

function useGenitives(): string[] {
  const {
    state: {
      word: {
        properties: { correctGenitive, declension, number },
      },
      page: { pluralSelected },
    },
  } = React.useContext(store) as {
    state: AppState & { word: Word & { properties: NounProperties } };
  };

  const [suffixes, setSuffixes] = React.useState(singular);

  React.useEffect(() => {
    const correctSingular = Array.from(singular);
    const correctPlural = Array.from(plural);
    const correctNumberSelected = pluralSelected === (number === "plural");

    if (correctGenitive && correctNumberSelected) {
      correctSingular[declension] = correctGenitive;
      correctPlural[declension] = correctGenitive;
    }

    setSuffixes(pluralSelected ? correctPlural : correctSingular);
  }, [pluralSelected, correctGenitive, declension, number]);

  return suffixes;
}

export { useGenitives };
