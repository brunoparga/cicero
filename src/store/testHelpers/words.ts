import { Word } from "../../types";

export const words = [
  {
    id: 1,
    questionType: "Indeclinable",
    lemma: "egō",
    english: "I",
    learned: false,
    options: ["nōs", "dīcō", "templum"],

    properties: {
      alternateForm: "ego",
    },
  },
  {
    id: 2,
    questionType: "Verb",
    lemma: "āiō, ais, ait, aiunt",
    english: "I (you, he/she, they) affirm, maintain, say yes",
    learned: false,
    options: ["nōs", "dīcō", "templum"],

    properties: {
      conjugation: 2,
      correctInfinitive: "aiere",
      perfect: "ait",
      deponent: false,
    },
  },
  {
    id: 3,
    questionType: "Noun",
    lemma: "tempus",

    english:
      "I. limited duration of time; time in all senses, including opportunity, occasion; II. temple (part of forehead)",

    learned: false,
    options: ["nōs", "dīcō", "templum"],

    properties: {
      number: "singular",
      declension: 2,
      gender: "neuter",
      correctGenitive: "-oris",
    },
  },
] as Word[];
