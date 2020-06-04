/* eslint-disable no-unused-vars */
import { AdjectiveProperties } from './adjective';
import { TranslationProperties } from './translation';
import { NounProperties } from './noun';
import { VerbProperties } from './verb';

export enum QuestionType {
  Adjective = 'Adjective',
  Adverb = 'Adverb',
  Noun = 'Noun',
  Translation = 'Translation',
  Verb = 'Verb'
}

type AdverbProperties = {}
type Properties = AdjectiveProperties
  & AdverbProperties
  & NounProperties
  & TranslationProperties
  & VerbProperties

export type Word = {
  questionType: QuestionType;
  english: string;
  lemma: string;
  options: string[];
  learned: boolean;
  properties: Properties
}
