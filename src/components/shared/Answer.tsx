import React from 'react';

import { actionTypes, store } from '../../store';
import './Answer.css';

type Props = { teach?: boolean, header: string, wordType?: string, text: string }

// Confirm the correct answer, which the user has already guessed.
// This will evolve toward asking for a new word and possibly rating how well
// the present one was remembered (Anki-style spaced repetition).
export const Answer: React.FunctionComponent<Props> = ({
  teach = false, header, wordType, text,
}) => {
  const { dispatch } = React.useContext(store);

  const clickHandler = () => {
    if (teach) {
      dispatch({ type: actionTypes.LEARN_WORD });
    }
    dispatch({ type: actionTypes.SET_WORD });
  };
  return (
    <>
      {teach && <h4>New word:</h4>}
      <h1>{header}</h1>
      {teach && <h4><em>{wordType}</em></h4>}
      <div className="answer-container">
        <span className="answer">{text}</span>
        <button type="button" className="next white btn" onClick={clickHandler}>
          <span className="big">&gt;</span>
          <br />
          Next
        </button>
      </div>
    </>
  );
};
