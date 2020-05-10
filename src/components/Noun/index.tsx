import React from 'react';

import { store } from '../../store';
import { NounAnswer } from './NounAnswer';
import { NounQuestion } from './NounQuestion';

// Decide to show question or answer based on whether the word has already been guessed.
export const Noun: React.FunctionComponent = () => {
  const { state: { revealAnswer } } = React.useContext(store);
  return revealAnswer ? <NounAnswer /> : <NounQuestion />;
};
