import React from 'react';

import { actionTypes, store } from '../store';
// eslint-disable-next-line no-unused-vars
import { Word } from '../types';
import { singular, plural } from '../grammar/genitiveSuffixes';
import './Teach.css';

export const Teach: React.FunctionComponent = () => {
  const { state: { word }, dispatch } = React.useContext(store);
  const {
    lemma,
    english,
    properties: {
      correctGenitive, gender, number, declension,
    },
  } = word as Word;
  const genitive = correctGenitive || { singular, plural }[number][declension];
  const definition = `${lemma}, ${genitive}`;
  const nounType = `${gender} ${number} noun`;
  const clickHandler = () => {
    dispatch({ type: actionTypes.LEARN_WORD });
    dispatch({ type: actionTypes.SET_WORD });
  };
  return (
    <>
      <h4>New word:</h4>
      <h1>{definition}</h1>
      <h4><em>{nounType}</em></h4>
      <div className="answer-container">
        <span className="answer">{english}</span>
        <button type="button" className="next white btn" onClick={clickHandler}>
          <span className="big">&gt;</span>
          <br />
          Next
        </button>
      </div>
    </>
  );
};
