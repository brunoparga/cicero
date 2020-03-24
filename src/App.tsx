import React from 'react';
import './App.css';

import { Declension, Gender, GrammaticalNumber } from './grammarCategories';

interface AppProps {
  word: {
    english: string;
    lemma: string,
    options: string[],
    number: GrammaticalNumber,
    declension: Declension,
    gender: Gender,
  }
}

function App({ word: { english, lemma, options, number, declension, gender } }: AppProps) {
  let optsWithLemma = options.concat([lemma])
  return (
    <div className="App">
      <h1>{english}</h1>
    </div>
  );
}

export default App;
