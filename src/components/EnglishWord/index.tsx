import React from 'react';

import { store } from '../../store';
import { EnglishWordAnswer } from './EnglishWordAnswer';
import { EnglishWordQuestion } from './EnglishWordQuestion';

// Decide to show question or answer based on whether the word has already been guessed.
export const EnglishWord: React.FunctionComponent = () => {
  const { state: { revealAnswer } } = React.useContext(store);
  return revealAnswer ? <EnglishWordAnswer /> : <EnglishWordQuestion />;
};
