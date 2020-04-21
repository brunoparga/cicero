import React from 'react';

import { store } from '../../store';
import { singular, plural } from '../../grammar/genitiveSuffixes';
import './Answer.css';
import setWord from '../../store/setWord';

// Confirm the correct answer, which the user has already guessed.
// This will evolve toward asking for a new word and possibly rating how well
// the present one was remembered (Anki-style spaced repetition).
export default () => {
  const { state: { word }, dispatch } = React.useContext(store);

  // Before loading, word is null. This shouldn't happen if the answer is being shown.
  if (!word) {
    return <>If you are seeing this, something has gone horribly wrong.</>;
  }

  const {
    english, lemma, declension, gender, number,
  } = word;

  // Pick the correct element (based on declension) from the correct suffixes (based on number)
  const genitive = (number === 'singular' ? singular : plural)[declension];

  const clickHandler = () => setWord(dispatch, 2);
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
