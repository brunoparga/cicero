import React from 'react';

import { actionTypes, sendSessionResults, store } from '../../store';
import './Answer.css';

type Props = { teach?: boolean, header: string, description?: string, text: string }

// Confirm the correct answer, which the user has already guessed.
export const Answer: React.FunctionComponent<Props> = ({
  teach = false, header, description, text,
}) => {
  const { state: { words, page: { currentWordIndex } }, dispatch } = React.useContext(store);

  const atTheLastWord = currentWordIndex === words.length - 1;

  const learnWord = { type: actionTypes.LEARN_WORD };
  const nextWord = { type: actionTypes.SET_WORD, payload: { words, index: currentWordIndex + 1 } };
  const doneStudying = { type: actionTypes.SET_STATUS, payload: 'done' };

  const clickHandler = () => {
    if (teach) {
      dispatch(learnWord);
    }
    if (atTheLastWord) {
      sendSessionResults(words, dispatch);
    }
    dispatch(atTheLastWord ? doneStudying : nextWord);
  };

  return (
    <>
      {teach && <h4>New word:</h4>}
      <h1>{header}</h1>
      {teach && <h4><em>{description}</em></h4>}
      <div className="answer-container">
        <span className="answer">{text}</span>
        <button type="button" className="next white btn" onClick={clickHandler}>
          <span className="big">&gt;</span>
          <br />
          {atTheLastWord ? 'Done' : 'Next' }
        </button>
      </div>
    </>
  );
};
