/* eslint-disable no-unused-vars */
import { NounProperties } from './latinNoun';
import { VerbProperties } from './latinVerb';

enum QuestionType {
  LatinNoun = 'LatinNoun',
  LatinVerb = 'LatinVerb'
}

export type Word = {
  questionType: QuestionType;
  english: string;
  lemma: string;
  options: string[];
  properties: NounProperties & VerbProperties
}
