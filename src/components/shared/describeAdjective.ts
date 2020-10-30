import { Word } from '../../types';

export const describeAdjective = (word: Word): string => {
  const {
    lemma, properties: {
      feminine, neuter, masculineGenitive, genitive, suffixes,
    },
  } = word;

  switch (suffixes) {
    case '1st/2nd (-us)':
    case '1st/2nd (-er)':
      return `masculine: ${lemma}, ${masculineGenitive} / feminine: ${feminine} / neuter: ${neuter}`;
    case '3rd (-er/-ris/-re)':
      return `masculine: ${lemma} / feminine: ${feminine} / neuter: ${neuter} -- genitive: ${genitive}`;
    case '3rd (-is/-e)':
      return `masculine, feminine: ${lemma} / neuter: ${neuter} -- genitive: ${genitive}`;
    default:
      return `${lemma}, ${genitive}`;
  }
};
