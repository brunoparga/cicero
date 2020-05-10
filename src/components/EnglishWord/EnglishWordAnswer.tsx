import React from 'react';

import { store } from '../../store';
// eslint-disable-next-line no-unused-vars
import { Word } from '../../types';
import { Answer } from '../shared/Answer';

// Prepare the correct answer for presentation
export const EnglishWordAnswer: React.FunctionComponent = () => {
  const { state: { word } } = React.useContext(store) as { state: { word: Word } };
  return <Answer header={word.lemma} text={word.english} />;
};
