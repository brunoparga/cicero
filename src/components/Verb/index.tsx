import React from 'react';

import { store } from '../../store';
import { VerbAnswer } from './VerbAnswer';
import { VerbQuestion } from './VerbQuestion';

// Decide to show question or answer based on whether the word has already been guessed.
export const Verb: React.FunctionComponent = () => {
  const { state: { revealAnswer } } = React.useContext(store);
  return revealAnswer ? <VerbAnswer /> : <VerbQuestion />;
};
