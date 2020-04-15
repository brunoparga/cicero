import React, { useContext } from 'react';

import { store } from '../store';
import Buttons from './Buttons';
import WordButtons from './WordButtons';
import GenitiveButtons from './GenitiveButtons';
import './App.css';

function App() {
  const { state: { word: { english } } } = useContext(store);
  return (
    <div className="App">
      <h1>{english}</h1>
      <div className="pink-background">
        <WordButtons />
      </div>
      <GenitiveButtons />
      <div className="pink-background">
        <Buttons
          label="Gender"
          items={['masculine', 'feminine', 'neuter', 'masc./fem.']}
          correctAnswer="masculine"
        />
      </div>
    </div>
  );
}

export default App;
