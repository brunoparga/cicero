import React from 'react';

import { store } from '../../store';
// eslint-disable-next-line no-unused-vars
import { Word } from '../../types';
import { Answer } from '../shared/Answer';

const setAnswer = (word: Word): string => {
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
      return `masculine: ${lemma} / feminine: ${feminine} / neuter: ${neuter} -- genitive ${genitive}`;
    case '3rd (-is/-e)':
      return `masculine, feminine: ${lemma} / neuter: ${neuter} -- genitive ${genitive}`;
    default:
      return `${lemma}, ${genitive}`;
  }
};

// Prepare the correct answer for presentation
export const AdjectiveAnswer: React.FunctionComponent = () => {
  const {
    state: { word, word: { english } },
  } = React.useContext(store) as { state: { word: Word } };
  const text = setAnswer(word);
  return <Answer header={english} text={text} />;
};
