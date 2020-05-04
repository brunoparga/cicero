// eslint-disable-next-line no-unused-vars
import { Action } from '../../types';
import { actionTypes } from '../reducer';

export const fetchWords = (dispatch: React.Dispatch<Action>) => {
  fetch('http://localhost:3001/words/')
    .then((res) => res.json())
    .then((payload) => {
      dispatch({ type: actionTypes.SET_WORDS, payload });
    })
    .then(() => dispatch({ type: actionTypes.SET_WORD }));
};
