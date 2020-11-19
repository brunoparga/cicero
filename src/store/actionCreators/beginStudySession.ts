import React from 'react';

import { Action } from '../../types';
import { authFetch, processWord } from '../../helpers';
import { actions } from '..';

export const beginStudySession = (dispatch: React.Dispatch<Action>): void => {
  authFetch(`${process.env.REACT_APP_API_URL}/words`, {
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .then((words) => {
      const payload = words.map(processWord);
      dispatch({ ...actions.FETCH_WORDS, payload });
    })
    .then(() => dispatch(actions.SET_WORD));
};
