import React from 'react';

import { store } from '../../store';
import { Answer } from './Answer';
import { Question } from './Question';

// Just select, based on whether word was guessed, whether to show question or answer.
export const LatinVerb: React.FunctionComponent = () => {
  const { state: { revealAnswer } } = React.useContext(store);
  return revealAnswer ? <Answer /> : <Question />;
};
