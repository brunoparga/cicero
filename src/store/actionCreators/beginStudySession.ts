import React from 'react';

import { Action, QuestionType, Word } from '../../types';
import { actionTypes } from '..';

const processWord = (word: Word): Word => {
  // IDEA: write question type in the back-end (pro: easy on the front, con:
  // hard with teach and translate)
  if (word.learned && Math.random() < 0.3) {
    return { ...word, questionType: QuestionType.Translation };
  } if (word.properties?.indeclinable) {
    return { ...word, questionType: QuestionType.Indeclinable };
  } if (['Adjective', 'Noun', 'Verb'].includes(word.questionType)) {
    return word;
  } if (['Numeral', 'Pronoun'].includes(word.questionType) && word.properties) {
    return { ...word, questionType: QuestionType.Adjective };
  }
  return { ...word, questionType: QuestionType.Indeclinable };
};

export const beginStudySession = (dispatch: React.Dispatch<Action>) => {
  fetch(`${process.env.REACT_APP_API_URL}/words`)
    .then((res) => res.json())
    .then((words) => {
      const payload = words.map(processWord);
      dispatch({ type: actionTypes.FETCH_WORDS, payload });
    })
    .then(() => dispatch({ type: actionTypes.SET_WORD }));
};
