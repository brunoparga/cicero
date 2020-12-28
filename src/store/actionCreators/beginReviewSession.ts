import React from "react";

import { Action } from "../../types";
import { authFetch, wordsForReview } from "../../helpers";
import { actions } from "..";

async function beginReviewSession(
  dispatch: React.Dispatch<Action>
): Promise<void> {
  const response = await authFetch(
    `${process.env.REACT_APP_API_URL}/words/review`,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  const words = await response.json();
  const payload = words.map(wordsForReview);

  dispatch({ ...actions.SET_WORDS, payload });
  dispatch(actions.SET_WORD);
}

export { beginReviewSession };
