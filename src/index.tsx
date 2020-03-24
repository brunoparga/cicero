import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Declension, Gender, GrammaticalNumber } from './grammarCategories';

const word = {
  english: 'boy',
  lemma: 'puer',
  options: ['vir', 'puella', 'mundus'],
  number: GrammaticalNumber.Singular,
  declension: Declension.Second,
  gender: Gender.Masculine,
};

ReactDOM.render(
  <React.StrictMode>
    <App word={word} />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
