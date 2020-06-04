import React from 'react';

import { store } from '../../store';
import { Answer } from '../shared/Answer';
import { Question } from '../shared/Question';
// eslint-disable-next-line no-unused-vars
import { Word } from '../../types';

// Decide to show question or answer based on whether the word has already been guessed.
export const Adverb: React.FunctionComponent = () => {
  const {
    state: { revealAnswer, word: { english, lemma } },
  } = React.useContext(store) as { state: { revealAnswer: boolean, word: Word }};
  return revealAnswer ? <Answer header={english} text={lemma} /> : <Question header={english} />;
};
