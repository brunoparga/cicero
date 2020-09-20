import React from 'react';

import { store } from '../../store';
import { Answer, Question } from '../shared';
import { Word } from '../../types';

// Decide to show question or answer based on whether the word has already been guessed.
export const Etcetera: React.FunctionComponent = () => {
  const {
    state: { revealAnswer, word: { english, lemma } },
  } = React.useContext(store) as { state: { revealAnswer: boolean, word: Word }};
  return revealAnswer ? <Answer header={english} text={lemma} /> : <Question header={english} />;
};
