/* eslint-disable no-unused-vars */
import { EnglishWordProperties } from './englishWord';
import { NounProperties } from './latinNoun';
import { VerbProperties } from './latinVerb';

export enum QuestionType {
  EnglishWord = 'EnglishWord',
  LatinNoun = 'LatinNoun',
  LatinVerb = 'LatinVerb'
}

export type Word = {
  questionType: QuestionType;
  english: string;
  lemma: string;
  options: string[];
  learned: boolean;
  properties: EnglishWordProperties & NounProperties & VerbProperties
}
