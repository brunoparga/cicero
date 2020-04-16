import React, { useContext } from 'react';

import { store } from '../store';
import WordButtons from './WordButtons';
import GenitiveButtons from './GenitiveButtons';
import GenderButtons from './GenderButtons';
import './App.css';

function App() {
  const { state: { word: { english } } } = useContext(store);
  return (
    <div className="App">
      <h1>{english}</h1>
      <WordButtons />
      <GenitiveButtons />
      <GenderButtons />
    </div>
  );
}

export default App;
