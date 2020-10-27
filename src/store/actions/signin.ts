import React from 'react';

import { Action, UserAccountInputs } from '../../types';
import { actionTypes } from '.';

export const signin = (
  URL: string, formData: UserAccountInputs, dispatch: React.Dispatch<Action>,
) => {
  fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((payload) => dispatch({ type: actionTypes.SIGN_IN, payload }));
};
