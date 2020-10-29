import React from 'react';

import { store } from '../store';
import { Topbar } from './shared';
import { Drill } from './Words/Drill';
import { Teach } from './Words/Teach';
import { FrontPage } from './FrontPage';
import './App.css';

// Either show a loading screen or the loaded app.
export const App: React.FunctionComponent = () => {
  const { state: { word, page: { studying } } } = React.useContext(store);

  let component;
  if (studying && !word) {
    component = <h1>Onerans (loading)...</h1>;
  } else if (studying && word?.learned) {
    component = Drill(word?.questionType);
  } else if (studying) {
    component = <Teach />;
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
