// This leverages TS Enums to keep these categories neat and tidy.
/* eslint-disable no-shadow */
export enum Declension {
  First,
  Second,
  Third,
  Fourth,
  Fifth,
}

export enum GrammaticalNumber {
  Singular = "singular",
  Plural = "plural",
}

export enum Gender {
  Masculine = "masculine",
  Feminine = "feminine",
  Neuter = "neuter",
  "Masculine/Feminine" = "masculine/feminine",
}

export enum Conjugation {
  Irregular = -1,
  First,
  Second,
  Third,
  Fourth,
}
