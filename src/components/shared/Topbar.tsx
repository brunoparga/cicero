import React from 'react';
import './Topbar.css';

export const Topbar: React.FunctionComponent = () => {
  const [action] = React.useState('signin');
  return (
    <div className="navbar">
      <div className="title">Cicero</div>
      <form action={`${process.env.REACT_APP_API_URL}/${action}`} method="post">
        <button type="submit" className="navbar-btn">Sign in</button>
      </form>
    </div>
  );
};
