import React from 'react';

import { store } from '../../store';
import { UserAccountForm } from '../UserAccountForm';
import './Topbar.css';

export const Topbar: React.FunctionComponent = () => {
  const { state: { user } } = React.useContext(store);
  const message = user?.message || user?.email;

  return (
    <div className="navbar">
      <div className="title white">Cicero</div>
      <div className="white">{message}</div>
      {!user?.email && <UserAccountForm />}
    </div>
  );
};
