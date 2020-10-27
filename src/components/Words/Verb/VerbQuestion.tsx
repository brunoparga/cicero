import React from 'react';

import { Question } from '../../shared';
import { InfinitiveButtons } from './InfinitiveButtons';
import { store } from '../../../store';
import { Word } from '../../../types';

// Present buttons for user to guess which word is the correct Latin translation,
// its genitive suffix and grammatical number.
export const VerbQuestion: React.FunctionComponent = () => {
  const { state: { word } } = React.useContext(store) as { state: { word: Word } };
  return <Question header={word.english}><InfinitiveButtons /></Question>;
};