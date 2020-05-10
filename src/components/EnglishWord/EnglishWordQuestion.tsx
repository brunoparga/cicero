import React from 'react';

import { store } from '../../store';
import { Question } from '../shared/Question';
// eslint-disable-next-line no-unused-vars
import { Word } from '../../types';

export const EnglishWordQuestion: React.FunctionComponent = () => {
  const {
    state: { word: { lemma, properties: { genitive } } },
  } = React.useContext(store) as { state: { word: Word } };
  return <Question header={`${lemma}, ${genitive}`} label="Translation" />;
};
