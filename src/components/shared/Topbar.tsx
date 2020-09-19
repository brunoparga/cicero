import React from 'react';

import { store } from '../../store';
import { UserState } from '../../types';
import { SignoutButton, UserAccountForm } from '../UserAccountForm';
import './Topbar.css';

export const Topbar: React.FunctionComponent = () => {
  const { state: { user } } = React.useContext(store);
  const { message, email } = user as UserState;
  const text = message || email;

  return (
    <div className="navbar">
      <div className="title white">Cicero</div>
      <div className="white">{text}</div>
      {email ? <SignoutButton /> : <UserAccountForm />}
    </div>
  );
};
