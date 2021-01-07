import { VerbProperties, Word } from "../../types";

import { describeVerb } from "./describeVerb";

type Verb = Word & { properties: VerbProperties }

const edo = {
  lemma: "edō",

  properties: {
    conjugation: 2,
    correctInfinitive: "-ere (or ēsse)",
    perfect: "ēdī",
    supine: "ēsum",
    deponent: false,
  },
} as Verb;
const fateor = {
  lemma: "fateor",

  properties: {
    conjugation: 1,
    perfect: "fassus sum",
    deponent: true,
  },
} as Verb;

it("describes common (non-deponent) verb", () => {
  const description = "Verb: edō, -ere (or ēsse), ēdī, ēsum";

  expect(describeVerb(edo)).toEqual(description);
});

it("describes deponent verb", () => {
  const description = "Deponent verb: fateor, -ērī, fassus sum";

  expect(describeVerb(fateor)).toEqual(description);
});
