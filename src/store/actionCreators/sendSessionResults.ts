import React from 'react';

import { Action, Word } from '../../types';
import { actionTypes } from '../actionTypes';

export const sendSessionResults = (words: Word[], dispatch: React.Dispatch<Action>) => {
  const body = JSON.stringify(words.map((word) => ({ lemma: word.lemma, learned: word.learned })));
  fetch(`${process.env.REACT_APP_API_URL}/words`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  })
    .then(() => dispatch({ type: actionTypes.RESULTS_SAVED }));
};
