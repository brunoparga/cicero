/* eslint-disable no-unused-vars */
import { QuestionType, Word } from '../../types/word';
import { Action } from '../../types';
import { actionTypes } from '../reducer';

export const fetchWords = (dispatch: React.Dispatch<Action>) => {
  fetch('http://localhost:3001/words/')
    .then((res) => res.json())
    .then((words) => {
      const payload = words.map((word: Word): Word => {
        if (['Adjective', 'Noun', 'Verb'].includes(word.questionType)) {
          return word;
        }
        return { ...word, questionType: QuestionType.Etcetera };
      });
      dispatch({ type: actionTypes.SET_WORDS, payload });
    })
    .then(() => dispatch({ type: actionTypes.SET_WORD }));
};
