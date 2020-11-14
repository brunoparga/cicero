import React from 'react';

import { actions, store } from '../../store';
import '../shared/Topbar.css';

export const SignoutButton: React.FunctionComponent = () => {
  const { dispatch } = React.useContext(store);
  const handleClick = () => {
    localStorage.clear();
    dispatch(actions.SIGN_OUT);
  };
  return <button type="button" className="btn form-btn" onClick={handleClick}>Log out</button>;
};
