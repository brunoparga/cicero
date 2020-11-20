import React from 'react';

import { Action } from '../../types';
import { authFetch, wordsForReview } from '../../helpers';
import { actions } from '..';

export const beginReviewSession = (dispatch: React.Dispatch<Action>): void => {
  authFetch(`${process.env.REACT_APP_API_URL}/words/review`, {
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .then((words) => {
      const payload = words.map(wordsForReview);
      dispatch({ ...actions.FETCH_WORDS, payload });
    })
    .then(() => dispatch(actions.SET_WORD));
};
