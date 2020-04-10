import React, { useContext } from 'react';
import './App.css';

import { store } from '../lib/store';

const buttonize = (list: string[]) => list
  .map((word) => <button type="button">{word}</button>);

function App() {
  const { state: { word }, dispatch } = useContext(store);
  const optsWithLemma = buttonize(word.options.concat([word.lemma]));
  const declensionEndings = buttonize(['-ae', '-ī', 'is', '-ūs', '-eī']);
  const gendersAndNumbers = buttonize(
    ['masc. sg', 'masc. pl', 'fem. sg', 'fem. pl', 'n. sg', 'n. pl'],
  );
  return (
    <div className="App">
      <h1>{word.english}</h1>
      {optsWithLemma}
      <hr />
      {declensionEndings}
      <br />
      {gendersAndNumbers}
    </div>
  );
}

export default App;
