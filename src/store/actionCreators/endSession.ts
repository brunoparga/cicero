import React from 'react';

import { Action, Word } from '../../types';
import { actions } from '..';

export const endSession = (words: Word[], dispatch: React.Dispatch<Action>): void => {
  // Using this action at the last word changes the page state to 'done'
  dispatch({ type: actions.SET_WORD });
  // Record the results in the DB
  const body = JSON.stringify(words.map((word) => ({ lemma: word.lemma, learned: word.learned })));
  fetch(`${process.env.REACT_APP_API_URL}/words`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  })
    .then(() => dispatch({ type: actions.RESULTS_SAVED }));
};
