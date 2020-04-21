import React from 'react';

import { store } from '../../store';
// eslint-disable-next-line no-unused-vars
import { Word } from '../../store/types';
import { singular, plural } from '../../grammar/genitiveSuffixes';
import setWord from '../../store/setWordAction';
import './Answer.css';

// Confirm the correct answer, which the user has already guessed.
// This will evolve toward asking for a new word and possibly rating how well
// the present one was remembered (Anki-style spaced repetition).
export default () => {
  const { state: { word }, dispatch } = React.useContext(store);

  const {
    english, lemma, declension, gender, number,
  } = word as Word;

  // Pick the correct declension ending from the suffixes of the correct number
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
