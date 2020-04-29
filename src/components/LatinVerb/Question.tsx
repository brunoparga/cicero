import React from 'react';

import { store } from '../../store';
import { WordButtons } from './WordButtons';
import { InfinitiveButtons } from './InfinitiveButtons';
// eslint-disable-next-line no-unused-vars
import { Word } from '../../store/types';

// Present buttons for user to guess which word is the correct Latin translation,
// its genitive suffix and grammatical number.
export const Question: React.FunctionComponent = () => {
  const { state: { word } } = React.useContext(store) as { state: { word: Word } };

  return (
    <>
      <h1>{word.english}</h1>
      <WordButtons />
      <InfinitiveButtons />
    </>
  );
};
