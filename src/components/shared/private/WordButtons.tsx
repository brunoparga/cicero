import React from 'react';

import { store } from '../../../store';
import { Word } from '../../../types';
import { Buttons } from '..';

// Buttons to select the correct Latin word for the given English word.
// Future plan: replace English with any user-selected language.
export const WordButtons: React.FunctionComponent<{ label: string }> = ({ label }) => {
  const { state: { word } } = React.useContext(store);
  const {
    questionType, english, lemma, options,
  } = word as Word;
  const correctAnswer = questionType === 'Translation' ? english : lemma;

  return (
    <div className="pink-background">
      <Buttons label={label} items={options} correctAnswer={correctAnswer} />
    </div>
  );
};
