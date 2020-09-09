/* eslint-disable no-unused-vars */
import { QuestionType, Word } from '../../types/word';
import { Action } from '../../types';
import { actionTypes } from '../reducer';

const processWord = (word: Word): Word => {
  // IDEA: write question type in the back-end (pro: easy on the front, con:
  // hard with teach and translate)
  if (word.properties?.indeclinable) {
    return { ...word, questionType: QuestionType.Etcetera };
  } if (['Adjective', 'Noun', 'Verb'].includes(word.questionType)) {
    return word;
  } if (['Numeral', 'Pronoun'].includes(word.questionType)) {
    return { ...word, questionType: QuestionType.Adjective };
  }
  return { ...word, questionType: QuestionType.Etcetera };
};

export const fetchWords = (dispatch: React.Dispatch<Action>) => {
  fetch(process.env.REACT_APP_API_URL as string)
    .then((res) => res.json())
    .then((words) => {
      const payload = words.map(processWord);
      dispatch({ type: actionTypes.SET_WORDS, payload });
    })
    .then(() => dispatch({ type: actionTypes.SET_WORD }));
};
