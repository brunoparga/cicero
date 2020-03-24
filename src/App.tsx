import React from 'react';
import './App.css';

// eslint-disable-next-line no-unused-vars
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

const buttonize = (list: string[]) => list
  .map((word) => <button type="button">{word}</button>);

function App({
  word: {
    english, lemma, options, declension, gender,
  },
}: AppProps) {
  const optsWithLemma = buttonize(options.concat([lemma]));
  const declensionEndings = buttonize(['-ae', '-ī', 'is', '-ūs', '-eī']);
  const gendersAndNumbers = buttonize(
    ['masc. sg', 'masc. pl', 'fem. sg', 'fem. pl', 'n. sg', 'n. pl'],
  );
  return (
    <div className="App">
      <h1>{english}</h1>
      {optsWithLemma}
      <hr />
      {declensionEndings}
      <br />
      {gendersAndNumbers}
    </div>
  );
}

export default App;
