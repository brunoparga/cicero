import React from 'react';

import { store } from '../../store';
import { actionTypes } from '../../store/actionTypes';
import './Answer.css';

type Props = { header: string, text: string }

// Confirm the correct answer, which the user has already guessed.
// This will evolve toward asking for a new word and possibly rating how well
// the present one was remembered (Anki-style spaced repetition).
export const Answer: React.FunctionComponent<Props> = ({ header, text }) => {
  const { dispatch } = React.useContext(store);

  const clickHandler = () => dispatch({ type: actionTypes.SET_WORD });
  return (
    <>
      <h1>{header}</h1>
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
