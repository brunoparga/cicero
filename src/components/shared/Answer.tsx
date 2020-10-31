import React from 'react';

import { useAnswerActions } from '../../hooks/useAnswerActions';
import './Answer.css';

type Props = { teach?: boolean, header: string, description?: string, text: string }

// Confirm the correct answer, which the user has already guessed.
export const Answer: React.FunctionComponent<Props> = ({
  teach = false, header, description, text,
}) => {
  const [lastWord, clickHandler] = useAnswerActions(teach);

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
          {lastWord ? 'Done' : 'Next' }
        </button>
      </div>
    </>
  );
};
