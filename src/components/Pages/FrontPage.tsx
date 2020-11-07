import React from 'react';
import { actions, beginStudySession, store } from '../../store';
import '../shared/private/Button.css';
import './FrontPage.css';

export const FrontPage: React.FunctionComponent = () => {
  const { dispatch } = React.useContext(store);
  const clickHandler = () => {
    beginStudySession(dispatch);
    dispatch({ type: actions.SET_STATUS, payload: 'studying' });
  };
  return (
    <div className="front-page-container">
      <h4>Welcome to Cicero!</h4>
      <p>
        This is a Latin language learning app. It is based on the list of the ~1500 most common
        words found in Classical Latin texts.
      </p>
      <p>
        As you learn, Cicero will remember which words you&apos;ve already studied and suggest new
        ones for your review.
      </p>
      <button type="button" className="item btn answer-btn white active big" onClick={clickHandler}>
        STUDY
      </button>
    </div>
  );
};