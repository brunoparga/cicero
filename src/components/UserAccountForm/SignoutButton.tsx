import React from 'react';

import { actionTypes, store } from '../../store';
import '../shared/Topbar.css';

export const SignoutButton: React.FunctionComponent = () => {
  const { dispatch } = React.useContext(store);
  const handleClick = () => dispatch({ type: actionTypes.SIGN_OUT });
  return <button type="button" className="btn form-btn" onClick={handleClick}>Log out</button>;
};
