import React from 'react';

import { store } from '../store';
import { Drill } from './Drill';
import './App.css';

export const App: React.FunctionComponent = () => {
  const { state: { word } } = React.useContext(store);

  // Before loading, word is null.
  if (!word) {
    return <h1>Onerans (loading)...</h1>;
  }

  return (
    <div className="App">
      {Drill(word.questionType)}
    </div>
  );
};
