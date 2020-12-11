import React from "react";

import { Action } from "../../types";
import { authFetch, wordsForLearn } from "../../helpers";
import { actions } from "..";

async function beginLearnSession(
  dispatch: React.Dispatch<Action>
): Promise<void> {
  const response = await authFetch(
    `${process.env.REACT_APP_API_URL}/words/learn`,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  const words = await response.json();
  const payload = words.map(wordsForLearn);

  dispatch({ ...actions.FETCH_WORDS, payload });
  dispatch(actions.SET_WORD);
}

export { beginLearnSession };
