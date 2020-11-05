import React from 'react';
import { describeWord } from '../../../helpers';

import { store } from '../../../store';
import { Word } from '../../../types';
import { Answer } from '../../shared';

// Prepare the correct answer for presentation
export const TranslationAnswer: React.FunctionComponent = () => {
  const { state: { word } } = React.useContext(store) as { state: { word: Word } };
  return <Answer header={describeWord(word)} text={word.english} />;
};
