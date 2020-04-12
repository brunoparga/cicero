import React, { useContext } from 'react';
import './App.css';

import { store } from '../lib/store';
import Buttons from './Buttons';

function App() {
  const { state: { word, pluralSelected } } = useContext(store);
  let genitiveSuffixes = ['-ae', '-ī', '-is', '-ūs', '-eī'];
  if (pluralSelected) {
    genitiveSuffixes = ['-ārum', '-ōrum', '-(i)um', '-uum', '-ērum'];
  }
  return (
    <div className="App">
      <h1>{word.english}</h1>
      <Buttons label="Latin" items={word.options.concat([word.lemma])} mustShuffle />
      <Buttons label="Genitive" items={genitiveSuffixes} />
      <Buttons label="Gender" items={['masculine', 'feminine', 'neuter', 'masc./fem.']} />
    </div>
  );
}

export default App;
