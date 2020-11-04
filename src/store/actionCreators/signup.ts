import React from 'react';

import { Action, UserAccountInputs } from '../../types';
import { actions } from '..';

export const signup = (
  URL: string, formData: UserAccountInputs, dispatch: React.Dispatch<Action>,
) => {
  fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((payload) => dispatch({ type: actions.SIGN_IN, payload }));
};
