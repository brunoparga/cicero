import React from 'react';

import { store } from '../../store';
import { LatinVerbAnswer } from './LatinVerbAnswer';
import { LatinVerbQuestion } from './LatinVerbQuestion';

// Decide to show question or answer based on whether the word has already been guessed.
export const LatinVerb: React.FunctionComponent = () => {
  const { state: { revealAnswer } } = React.useContext(store);
  return revealAnswer ? <LatinVerbAnswer /> : <LatinVerbQuestion />;
};
