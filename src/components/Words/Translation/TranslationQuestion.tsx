import React from 'react';

import { store } from '../../../store';
import { Question } from '../../shared';
import { Word } from '../../../types';

export const TranslationQuestion: React.FunctionComponent = () => {
  const {
    state: { word: { lemma, properties: { genitive } } },
  } = React.useContext(store) as { state: { word: Word } };
  return <Question header={`${lemma}, ${genitive}`} label="Translation" />;
};
