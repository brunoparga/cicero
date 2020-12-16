// This leverages TS Enums to keep these categories neat and tidy.
enum Declension {
  First,
  Second,
  Third,
  Fourth,
  Fifth,
}

enum GrammaticalNumber {
  Singular = "singular",
  Plural = "plural",
}

enum Gender {
  Masculine = "masculine",
  Feminine = "feminine",
  Neuter = "neuter",
  "Masculine/Feminine" = "masculine/feminine",
}

enum Conjugation {
  // eslint-disable-next-line no-magic-numbers
  Irregular = -1,
  First,
  Second,
  Third,
  Fourth,
}

export { Declension, GrammaticalNumber, Gender, Conjugation };
