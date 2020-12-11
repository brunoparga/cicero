/* eslint-disable no-unused-vars */
import { AdjectiveProperties } from "./adjective";
import { TranslationProperties } from "./translation";
import { NounProperties } from "./noun";
import { VerbProperties } from "./verb";

// eslint-disable-next-line no-shadow
export enum QuestionType {
  Adjective = "Adjective",
  Indeclinable = "Indeclinable",
  Noun = "Noun",
  Translation = "Translation",
  Verb = "Verb",
}

type WordNotes = {
  indeclinable?: true;
  declensionNote?: string;
  verbNote?: string;
  miscellaneousNote?: string;
  alternateForm?: string;
  quodNote?: string;
};

type Properties = WordNotes &
  AdjectiveProperties &
  NounProperties &
  TranslationProperties &
  VerbProperties;

export type Word = {
  id: number;
  questionType: QuestionType;
  english: string;
  lemma: string;
  options: string[];
  learned: boolean;
  properties: Properties;
};
