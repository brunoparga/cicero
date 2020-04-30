import React from 'react';

import { store } from '../../store';
import { LatinNounAnswer } from './LatinNounAnswer';
import { LatinNounQuestion } from './LatinNounQuestion';

// Decide to show question or answer based on whether the word has already been guessed.
export const LatinNoun: React.FunctionComponent = () => {
  const { state: { revealAnswer } } = React.useContext(store);
  return revealAnswer ? <LatinNounAnswer /> : <LatinNounQuestion />;
};
