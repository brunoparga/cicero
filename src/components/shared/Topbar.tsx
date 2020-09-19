import React from 'react';

import { store } from '../../store';
import { UserAccountForm } from '../UserAccountForm';
import './Topbar.css';

export const Topbar: React.FunctionComponent = () => {
  const { state: { user } } = React.useContext(store);
  const rightSide = user ? <div className="white">{user.email}</div> : <UserAccountForm />;

  return (
    <div className="navbar">
      <div className="title white">Cicero</div>
      {rightSide}
    </div>
  );
};
