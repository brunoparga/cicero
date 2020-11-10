import React from 'react';

import { actions, endStudySession, store } from '../store';
import { AppStateWithDispatch } from '../types';

type VoidFunction = () => void;

// Returns a click handler function that dispatches the appropriate actions
const createClickHandler = (context: AppStateWithDispatch, teach: boolean): VoidFunction => {
  const { state: { words, page: { currentWordIndex } }, dispatch } = context;
  const lastWord = currentWordIndex === words.length - 1;

  return () => {
    const learnWord = { type: actions.LEARN_WORD };
    const nextWord = { type: actions.SET_WORD };

    if (teach) {
      dispatch(learnWord);
    }
    if (lastWord) {
      endStudySession(words, dispatch);
    } else {
      dispatch(nextWord);
    }
  };
};

// Provide the Answer component with two things it needs: whether this is the last word of the study
// session, and a click handler that dispatches the appropriate actions.
export const useAnswerActions = (teach: boolean): [boolean, VoidFunction] => {
  const context = React.useContext(store);
  const { words, page: { currentWordIndex } } = context.state;
  const lastWord = currentWordIndex === words.length - 1;
  const clickHandler = createClickHandler(context, teach);
  return [lastWord, clickHandler];
};
