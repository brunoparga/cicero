import React from 'react';

import { store } from '../../store';
// eslint-disable-next-line no-unused-vars
import { Word } from '../../types';
import { Answer } from '../shared/Answer';

// Prepare the correct answer for presentation
export const AdjectiveAnswer: React.FunctionComponent = () => {
  const { state: { word } } = React.useContext(store) as { state: { word: Word } };
  const { lemma, english, properties: { feminine, neuter } } = word;
  const text = `mascuine: ${lemma} / feminine: ${feminine} / neuter: ${neuter}`;
  return <Answer header={english} text={text} />;
};
