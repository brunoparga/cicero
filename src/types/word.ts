/* eslint-disable no-unused-vars */
import { TranslationProperties } from './translation';
import { NounProperties } from './noun';
import { VerbProperties } from './verb';

export enum QuestionType {
  Translation = 'Translation',
  Noun = 'Noun',
  Verb = 'Verb'
}

export type Word = {
  questionType: QuestionType;
  english: string;
  lemma: string;
  options: string[];
  learned: boolean;
  properties: TranslationProperties & NounProperties & VerbProperties
}
