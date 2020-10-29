import React from 'react';
import { actionTypes, fetchWords, store } from '../store';

export const FrontPage: React.FunctionComponent = () => {
  const { dispatch } = React.useContext(store);
  const clickHandler = () => {
    fetchWords(dispatch);
    dispatch({ type: actionTypes.TOGGLE_STUDYING });
  };
  return <button type="button" onClick={clickHandler}>STUDY</button>;
};
