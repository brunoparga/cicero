import React from 'react';

import { store } from '../../store';
import { setWordAction } from '../../store/setWordAction';
import './Answer.css';

type Props = { text: string }

// Confirm the correct answer, which the user has already guessed.
// This will evolve toward asking for a new word and possibly rating how well
// the present one was remembered (Anki-style spaced repetition).
export const Answer: React.FunctionComponent<Props> = ({ text }) => {
  const { state: { word }, dispatch } = React.useContext(store);

  const clickHandler = () => setWordAction(dispatch, 2);
  return (
    <>
      <h1>{word?.english}</h1>
      <div className="answer-container">
        <span className="answer">{text}</span>
        <button type="button" className="next" onClick={clickHandler}>
          <span className="big">&gt;</span>
          <br />
          Next
        </button>
      </div>
    </>
  );
};
