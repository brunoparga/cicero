import React from "react";

import { store } from "../store";
import { AppState, VerbProperties, Word } from "../types";
import { active, Conjugation, passive } from "../grammar";

function insertInfinitive(
  active: string[],
  correctInfinitive: string
): string[] {
  const numberOfOptions = 3;
  const pos = Math.floor(Math.random() * numberOfOptions);
  const newSuffixes = Array.from(active);

  return newSuffixes.splice(pos, 0, correctInfinitive);
}

function useInfinitives(): string[] {
  const {
    state: {
      word: {
        properties: { conjugation, correctInfinitive },
      },
      page: { passiveSelected },
    },
  } = React.useContext(store) as {
    state: AppState & { word: Word & { properties: VerbProperties } };
  };
  const [suffixes, setSuffixes] = React.useState(active);

  React.useEffect(() => {
    if (passiveSelected) {
      setSuffixes(Array.from(passive));
    } else if (!correctInfinitive) {
      setSuffixes(Array.from(active));
    } else if (conjugation === Conjugation.Irregular) {
      const newSuffixes = insertInfinitive(active, correctInfinitive);

      setSuffixes(newSuffixes);
    } else {
      // The few verbs that have a correctInfinitive but are not in the
      // 'Irregular' conjugation (e.g. dō) are all active, so no need to worry
      // about deponent verbs here.
      const correctActive = Array.from(active);

      correctActive[conjugation] = correctInfinitive;
      setSuffixes(correctActive);
    }
  }, [conjugation, correctInfinitive, passiveSelected]);

  return suffixes;
}

export { useInfinitives };
