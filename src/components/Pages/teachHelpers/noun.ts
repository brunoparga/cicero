import { NounProperties, Word } from '../../../types';
import { setGenitive } from '../../../helpers';

export const Noun = (word: Word): [string, string, string] => {
  const { lemma, english, properties } = word;
  const { gender, number } = properties as NounProperties;
  const header = `${lemma}, ${setGenitive(properties)}`;
  const description = `${gender} ${number} noun`;
  return [header, description, english];
};
