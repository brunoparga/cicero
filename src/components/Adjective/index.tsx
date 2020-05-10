import React from 'react';

import { store } from '../../store';
import { AdjectiveAnswer } from './AdjectiveAnswer';
import { AdjectiveQuestion } from './AdjectiveQuestion';

// Decide to show question or answer based on whether the word has already been guessed.
export const Adjective: React.FunctionComponent = () => {
  const { state: { revealAnswer } } = React.useContext(store);
  return revealAnswer ? <AdjectiveAnswer /> : <AdjectiveQuestion />;
};
