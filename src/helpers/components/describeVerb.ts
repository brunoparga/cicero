import { active, passive } from "../../grammar";
import { Word } from "../../types";

export const describeVerb = (word: Word): string => {
  const {
    lemma,
    properties: { conjugation, perfect, supine, deponent, correctInfinitive },
  } = word;

  // Pick the correct infinitive ending from the suffixes of the correct voice. Deponent verbs have
  // passive voice suffixes.
  const infinitive =
    correctInfinitive || (deponent ? passive : active)[conjugation];

  if (deponent) {
    return `Deponent verb: ${lemma}, ${infinitive}, ${
      perfect || "(no perfect)"
    }`;
  }

  return `Verb: ${lemma}, ${infinitive}, ${perfect || "(no perfect)"}, ${
    supine || "(no supine)"
  }`;
};
