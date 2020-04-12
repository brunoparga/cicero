import React, { useContext } from 'react';
import './App.css';

import { store } from '../lib/store';
import Buttons from './Buttons';
import WordButtons from './WordButtons';
import GenitiveButtons from './GenitiveButtons';

function App() {
  const { state: { word: { english } } } = useContext(store);
  return (
    <div className="App">
      <h1>{english}</h1>
      <WordButtons />
      <GenitiveButtons />
      <Buttons label="Gender" items={['masculine', 'feminine', 'neuter', 'masc./fem.']} />
    </div>
  );
}

export default App;
