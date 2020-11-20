import React from 'react';

import { Action } from '../../types';
import { authFetch, wordsForLearn } from '../../helpers';
import { actions } from '..';

export const beginLearnSession = (dispatch: React.Dispatch<Action>): void => {
  authFetch(`${process.env.REACT_APP_API_URL}/words/learn`, {
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .then((words) => {
      const payload = words.map(wordsForLearn);
      dispatch({ ...actions.FETCH_WORDS, payload });
    })
    .then(() => dispatch(actions.SET_WORD));
};
