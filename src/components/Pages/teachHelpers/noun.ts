import { NounProperties, Word } from '../../../types';
import { singular, plural } from '../../../grammar';

export const Noun = (word: Word): [string, string, string] => {
  const { lemma, english, properties } = word;
  const {
    correctGenitive, gender, number, declension,
  } = properties as NounProperties;
  const genitive = correctGenitive || { singular, plural }[number][declension];
  const header = `${lemma}, ${genitive}`;
  const description = `${gender} ${number} noun`;
  return [header, description, english];
};
