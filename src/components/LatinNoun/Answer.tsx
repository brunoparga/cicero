import React from 'react';

import { store } from '../../store';
import { types } from '../../store/reducer';
import { singular, plural } from '../../grammar/genitiveSuffixes';
import './Answer.css';

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
    dispatch,
  } = React.useContext(store);

  // Pick the correct element (based on declension) from the correct suffixes (based on number)
  const genitive = (number === 'singular' ? singular : plural)[declension];

  const clickHandler = () => dispatch({ type: types.FETCH_NEXT });
  return (
    <>
      <h1>{english}</h1>
      <div className="answer-container">
        <span className="answer">{`${lemma}, ${genitive}, ${gender} ${number}`}</span>
        <button type="button" className="next" onClick={clickHandler}>
          <span className="big">&gt;</span>
          <br />
          Next
        </button>
      </div>
    </>
  );
};
