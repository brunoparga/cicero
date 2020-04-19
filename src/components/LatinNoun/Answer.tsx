import React from 'react';

import { store } from '../../store';
import { singular, plural } from '../../grammar/genitiveSuffixes';

// Confirm the correct answer, which the user has already guessed.
// This will evolve toward asking for a new word and possibly rating how well
// the present one was remembered (Anki-style spaced repetition).
export default () => {
  const {
    state: {
      word: {
        english, lemma, declension, gender, number,
      },
    },
  } = React.useContext(store);

  // Pick the correct element (based on declension) from the correct suffixes (based on number)
  const genitive = (number === 'singular' ? singular : plural)[declension];
  return (
    <>
      <h1>{english}</h1>
      <span>{`${lemma}, ${genitive}, ${gender} ${number}`}</span>
    </>
  );
};
