// eslint-disable-next-line no-unused-vars
import { Action } from '../types';
import { types } from './reducer';

export const setWordAction = (dispatch: React.Dispatch<Action>, id: number) => {
  fetch(`http://localhost:3001/words/${id}`)
    .then((res) => res.json())
    .then((payload) => {
      dispatch({ type: types.SET_WORD, payload });
    });
};
