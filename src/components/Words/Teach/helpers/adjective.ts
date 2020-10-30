import { Word } from '../../../../types';
import { describeAdjective } from '../../../shared';

export const Adjective = (word: Word): [string, string, string] => {
  const { lemma, english } = word;
  const header = `${lemma} (adjective)`;
  const wordType = describeAdjective(word);
  return [header, wordType, english];
};
