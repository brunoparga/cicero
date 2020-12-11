import React from "react";

import { Action, Word } from "../../types";
import { authFetch } from "../../helpers";
import { actions } from "..";

async function endStudySession(
  words: Word[],
  dispatch: React.Dispatch<Action>
): Promise<void> {
  // Using this action at the last word changes the page state to 'done'
  dispatch(actions.SET_WORD);

  // Record the results in the DB, including the token
  const body = JSON.stringify(words.map((word) => word.id));

  await authFetch(`${process.env.REACT_APP_API_URL}/words`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
  });
  dispatch(actions.RESULTS_SAVED);
}

export { endStudySession };
