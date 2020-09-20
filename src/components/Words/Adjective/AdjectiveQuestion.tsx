import React from 'react';

import { Question } from '../../shared';
import { DeclensionButtons } from './DeclensionButtons';
import { store } from '../../../store';
import { Word } from '../../../types';

// Present buttons for user to guess which word is the correct Latin translation, with declension.
export const AdjectiveQuestion: React.FunctionComponent = () => {
  const { state: { word } } = React.useContext(store) as { state: { word: Word } };
  return <Question header={word.english}><DeclensionButtons /></Question>;
};
