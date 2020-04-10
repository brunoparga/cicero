import React, { useContext } from 'react';
import './App.css';

import { store } from '../lib/store';
import Buttons from './Buttons';

function App() {
  const { state: { word } } = useContext(store);
  return (
    <div className="App">
      <h1>{word.english}</h1>
      <Buttons items={word.options.concat([word.lemma])} />
      <hr />
      <Buttons items={['-ae', '-ī', 'is', '-ūs', '-eī']} />
      <br />
      <Buttons items={['masc. sg', 'masc. pl', 'fem. sg', 'fem. pl', 'n. sg', 'n. pl']} />
    </div>
  );
}

export default App;
