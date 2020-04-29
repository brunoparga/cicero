import React from 'react';

import { store } from '../../store';
import { LatinNounAnswer } from './LatinNounAnswer';
import { Question } from './Question';

// Just select, based on whether word was guessed, whether to show question or answer.
export const LatinNoun: React.FunctionComponent = () => {
  const { state: { revealAnswer } } = React.useContext(store);
  return revealAnswer ? <LatinNounAnswer /> : <Question />;
};
