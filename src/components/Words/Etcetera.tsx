import React from 'react';

import { store } from '../../store';
import { Answer, Question } from '../shared';
import { Word } from '../../types';

// Decide to show question or answer based on whether the word has already been guessed.
export const Etcetera: React.FunctionComponent = () => {
  const {
    state: { page: { revealAnswer }, word: { english, lemma } },
  } = React.useContext(store) as { state: { word: Word, page: { revealAnswer: boolean } }};
  return revealAnswer ? <Answer header={english} text={lemma} /> : <Question header={english} />;
};
