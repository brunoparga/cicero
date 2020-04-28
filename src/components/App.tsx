import React from 'react';

import { store } from '../store';
// eslint-disable-next-line no-unused-vars
import { Word } from '../store/types';
import LatinNoun from './LatinNoun';
import './App.css';

export default () => {
  const { state: { word } } = React.useContext(store);

  // Before loading, word is null.
  if (!word) {
    return <h1>Onerans (loading)...</h1>;
  }
  const { questionType } = word as Word;

  let question: React.FunctionComponent;

  // I am actually in doubt about the best way to switch between the various exercise types...
  switch (questionType) {
    case 'LatinNoun':
      question = LatinNoun;
      break;
    default:
      throw new Error();
  }
  return React.createElement('div', { className: 'App' }, React.createElement(question));
};
