/* eslint-disable no-unused-vars */
import { AdjectiveProperties } from './adjective';
import { TranslationProperties } from './translation';
import { NounProperties } from './noun';
import { VerbProperties } from './verb';

export enum QuestionType {
  Adjective = 'Adjective',
  Etcetera = 'Etcetera',
  Noun = 'Noun',
  Translation = 'Translation',
  Verb = 'Verb'
}

type EtceteraProperties = {}
type Properties = AdjectiveProperties
  & EtceteraProperties
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
