import React from 'react';

import { store } from '../../store';
// eslint-disable-next-line no-unused-vars
import { Word } from '../../store/types';
import { active, passive } from '../../grammar/infinitiveSuffixes';
import setWord from '../../store/setWordAction';
import '../shared/Answer.css';

// Confirm the correct answer, which the user has already guessed.
// This will evolve toward asking for a new word and possibly rating how well
// the present one was remembered (Anki-style spaced repetition).
export default () => {
  const { state: { word }, dispatch } = React.useContext(store);

  const { english, lemma, properties } = word as Word;
  const {
    conjugation, perfect, supine, deponent, correctInfinitive,
  } = properties;

  // Pick the correct declension ending from the suffixes of the correct number
  const infinitive = correctInfinitive || (deponent ? passive : active)[conjugation];
  const typeOfVerb = deponent ? 'Deponent verb' : 'Verb';
  const answer = `${typeOfVerb}: ${lemma}, ${infinitive}, ${perfect} ${supine}`;
  const clickHandler = () => setWord(dispatch, 2);

  return (
    <>
      <h1>{english}</h1>
      <div className="answer-container">
        <span className="answer">{answer}</span>
        <button type="button" className="next" onClick={clickHandler}>
          <span className="big">&gt;</span>
          <br />
          Next
        </button>
      </div>
    </>
  );
};
