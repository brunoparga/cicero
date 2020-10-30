import React from 'react';

import { store } from '../store';
import { Topbar } from './shared';
import { Drill } from './Words/Drill';
import { Teach } from './Words/Teach';
import { FrontPage } from './FrontPage';
import './App.css';
import { Summary } from './Words/Summary';

// Either show a loading screen or the loaded app.
export const App: React.FunctionComponent = () => {
  const { state: { word, page: { status } } } = React.useContext(store);

  let component;
  if (status === 'studying' && !word) {
    component = <h1>Onerans (loading)...</h1>;
  } else if (status === 'studying' && word?.learned) {
    component = Drill(word?.questionType);
  } else if (status === 'studying') {
    component = <Teach />;
  } else if (status === 'done') {
    component = <Summary />;
  } else {
    component = <FrontPage />;
  }

  return (
    <>
      <Topbar />
      <div className="App">{component}</div>
    </>
  );
};
