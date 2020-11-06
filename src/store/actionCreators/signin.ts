import React from 'react';

import { Action, UserAccountInputs } from '../../types';
import { actions } from '..';

export const signin = (
  URL: string, formData: UserAccountInputs, dispatch: React.Dispatch<Action>,
) => {
  fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('email', data.email);
      dispatch({ type: actions.SIGN_IN, payload: { email: data.email } });
    });
};
