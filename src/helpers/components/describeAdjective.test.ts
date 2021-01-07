import { AdjectiveProperties, Word } from "../../types";

import { describeAdjective } from "./describeAdjective";

type Adjective = Word & { properties: AdjectiveProperties }

const necesse = {
  lemma: "necesse",
  properties: { indeclinable: true },
} as Adjective;
const bonus = {
  lemma: "bonus",

  properties: {
    masculineGenitive: "-ī",
    feminine: "bona, -ae",
    neuter: "bonum, -ī",
    suffixes: "1st/2nd (-us)",
  },
} as Adjective;
const ater = {
  lemma: "āter",

  properties: {
    masculineGenitive: "-trī",
    feminine: "-tra",
    neuter: "-trum",
    suffixes: "1st/2nd (-er)",
  },
} as Adjective;
const celer = {
  lemma: "celer",

  properties: {
    genitive: "-is",
    suffixes: "3rd (-er/-ris/-re)",
    feminine: "-ris",
    neuter: "-e",
  },
} as Adjective;
const viridis = {
  lemma: "viridis",

  properties: {
    genitive: "-is",
    suffixes: "3rd (-is/-e)",
    neuter: "-e",
  },
} as Adjective;
const velox = {
  lemma: "vēlōx",

  properties: {
    genitive: "-ōcis",
    suffixes: "3rd (all equal)",
  },
} as Adjective;

it("describes indeclinable adjectives", () => {
  expect(describeAdjective(necesse)).toEqual("Indeclinable adjective");
});

it("describes Type I adjectives", () => {
  const description =
    "Adjective: masculine bonus, -ī / feminine bona, -ae / neuter bonum, -ī";

  expect(describeAdjective(bonus)).toEqual(description);
});

it("describes syncopated Type I adjectives", () => {
  const description =
    "Adjective: masculine āter, -trī / feminine -tra / neuter -trum";

  expect(describeAdjective(ater)).toEqual(description);
});

it("describes three-form Type II adjectives", () => {
  const description =
    "Adjective: masculine celer / feminine -ris / neuter -e, genitive -is";

  expect(describeAdjective(celer)).toEqual(description);
});

it("describes two-form Type II adjectives", () => {
  const description =
    "Adjective: masculine, feminine viridis / neuter -e, genitive -is";

  expect(describeAdjective(viridis)).toEqual(description);
});

it("describes one-form Type II adjectives", () => {
  const description = "Adjective: vēlōx, -ōcis";

  expect(describeAdjective(velox)).toEqual(description);
});
