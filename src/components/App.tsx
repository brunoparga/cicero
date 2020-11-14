import React from 'react';

import { actions, store } from '../store';
import { Topbar } from './shared';
import * as Pages from './Pages';
import './App.css';

// Either show a loading screen or the loaded app.
export const App: React.FunctionComponent = () => {
  const { state: { word, page: { status } }, dispatch } = React.useContext(store);

  const storedEmail = localStorage.getItem('email');
  if (storedEmail) {
    dispatch({ ...actions.SIGN_IN, payload: { email: storedEmail } });
  }

  let component;
  if (status === 'studying' && !word) {
    component = <h1>Onerans (loading)...</h1>;
  } else if (status === 'studying' && word?.learned) {
    component = Pages.Drill(word?.questionType);
  } else if (status === 'studying') {
    component = <Pages.Teach />;
  } else if (status === 'done') {
    component = <Pages.Summary />;
  } else {
    component = <Pages.FrontPage />;
  }

  return (
    <>
      <Topbar />
      <div className="App">{component}</div>
    </>
  );
};
