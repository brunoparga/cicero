import React from 'react';

import { Action, Word } from '../../types';
import { actions } from '..';

export const endStudySession = (words: Word[], dispatch: React.Dispatch<Action>): void => {
  // Using this action at the last word changes the page state to 'done'
  dispatch(actions.SET_WORD);
  // Record the results in the DB, including the token
  const body = JSON.stringify(words.map((word) => word.id));
  fetch(`${process.env.REACT_APP_API_URL}/words`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
    body,
  })
    .then(() => dispatch(actions.RESULTS_SAVED));
};
