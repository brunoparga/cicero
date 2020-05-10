import React from 'react';

import { Question } from '../shared/Question';
import { InfinitiveButtons } from './InfinitiveButtons';
import { store } from '../../store';
// eslint-disable-next-line no-unused-vars
import { Word } from '../../types';

// Present buttons for user to guess which word is the correct Latin translation,
// its genitive suffix and grammatical number.
export const LatinVerbQuestion: React.FunctionComponent = () => {
  const { state: { word } } = React.useContext(store) as { state: { word: Word } };
  return <Question header={word.english} label="Latin"><InfinitiveButtons /></Question>;
};
