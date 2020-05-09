import React from 'react';

import { store } from '../store';
import { Drill } from './Drill';
import { Teach } from './Teach';
import './App.css';

// Either show a loading screen or the loaded app.
export const App: React.FunctionComponent = () => {
  const { state: { word } } = React.useContext(store);

  // Before loading, word is null.
  if (!word) {
    return <h1>Onerans (loading)...</h1>;
  }

  return (
    <div className="App">
      {(word.learned ? Drill(word.questionType) : <Teach />)}
    </div>
  );
};
