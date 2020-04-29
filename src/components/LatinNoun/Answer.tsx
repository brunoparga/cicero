import React from 'react';

import { store } from '../../store';
// eslint-disable-next-line no-unused-vars
import { Word } from '../../store/types';
import { singular, plural } from '../../grammar/genitiveSuffixes';
import { setWordAction } from '../../store/setWordAction';
import '../shared/Answer.css';

// Confirm the correct answer, which the user has already guessed.
// This will evolve toward asking for a new word and possibly rating how well
// the present one was remembered (Anki-style spaced repetition).
export const Answer: React.FunctionComponent = () => {
  const { state: { word }, dispatch } = React.useContext(store);

  const { english, lemma, properties } = word as Word;
  const {
    number, gender, declension, correctGenitive,
  } = properties;

  // Pick the correct declension ending from the suffixes of the correct number
  const genitive = correctGenitive || { singular, plural }[number][declension];

  const clickHandler = () => setWordAction(dispatch, 2);
  return (
    <>
      <h1>{english}</h1>
      <div className="answer-container">
        <span className="answer">{`${lemma}, ${genitive}, ${gender} ${number} noun`}</span>
        <button type="button" className="next" onClick={clickHandler}>
          <span className="big">&gt;</span>
          <br />
          Next
        </button>
      </div>
    </>
  );
};
