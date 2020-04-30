import React from 'react';

import { store } from '../../store';
import { WordButtons } from '../shared/WordButtons';
// eslint-disable-next-line no-unused-vars
import { Word } from '../../types';

export const Question: React.FunctionComponent = ({ children }) => {
  const { state: { word } } = React.useContext(store) as { state: { word: Word } };

  return (
    <>
      <h1>{word.english}</h1>
      <WordButtons />
      {children}
    </>
  );
};
