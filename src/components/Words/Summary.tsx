import React from 'react';

import { actionTypes, store } from '../../store';
import { Word } from '../../types';
import './Summary.css';
import '../shared/Answer.css';

export const Summary: React.FunctionComponent = () => {
  const { state: { words }, dispatch } = React.useContext(store);

  const formatWord = (word: Word): React.ReactElement => (
    <li key={word.lemma} className="left">
      <strong>{word.lemma}</strong>
      {': '}
      <em>{word.english}</em>
      {' - '}
      {word.questionType}
    </li>
  );

  const clickHandler = () => dispatch({ type: actionTypes.SET_STATUS, payload: 'frontPage' });

  return (
    <div className="answer-container">
      <div>
        <h4>Study session finished. Well done!</h4>
        <p>Here are the words you studied:</p>
        <ol>{words.map(formatWord)}</ol>
      </div>
      <button type="button" className="next white btn" onClick={clickHandler}>
        <span className="big">&gt;</span>
        <br />
        Done
      </button>
    </div>
  );
};
