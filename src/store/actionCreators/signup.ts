import React from "react";

import { Action, UserAccountInputs } from "../../types";
import { actions } from "..";
import { storeToken } from "../../helpers";

export const signup = (
  URL: string,
  formData: UserAccountInputs,
  dispatch: React.Dispatch<Action>
): void => {
  fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((token) => {
      const email = storeToken(token);

      dispatch({ ...actions.SIGN_IN, payload: { email } });
    });
};
