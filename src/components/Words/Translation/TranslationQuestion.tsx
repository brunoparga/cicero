import React from 'react';

import { store } from '../../../store';
import { Question } from '../../shared';
import { Word } from '../../../types';
import { describeWord } from '../../../helpers';

export const TranslationQuestion: React.FunctionComponent = () => {
  const { state: { word } } = React.useContext(store) as { state: { word: Word } };
  return <Question header={describeWord(word)} label="Translation" />;
};
