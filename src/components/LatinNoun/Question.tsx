import React from 'react';

import { store } from '../../store';
import WordButtons from './WordButtons';
import GenitiveButtons from './GenitiveButtons';
import GenderButtons from './GenderButtons';

// Present buttons for user to guess which word is the correct Latin translation,
// its genitive suffix and grammatical number.
export default () => {
  const { state: { word } } = React.useContext(store);

  // Before loading, word is null.
  if (!word) {
    return <>Loading...</>;
  }

  return (
    <>
      <h1>{word.english}</h1>
      <WordButtons />
      <GenitiveButtons />
      <GenderButtons />
    </>
  );
};
