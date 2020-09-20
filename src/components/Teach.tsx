import React from 'react';

import { store } from '../store';
// eslint-disable-next-line no-unused-vars
import { Word } from '../types';
import { singular, plural } from '../grammar';
import { Answer } from './shared/Answer';
import './Teach.css';

export const Teach: React.FunctionComponent = () => {
  const { state: { word } } = React.useContext(store);
  const {
    lemma, english, properties: {
      correctGenitive, gender, number, declension,
    },
  } = word as Word;
  const genitive = correctGenitive || { singular, plural }[number][declension];
  const definition = `${lemma}, ${genitive}`;
  const nounType = `${gender} ${number} noun`;
  return <Answer teach header={definition} wordType={nounType} text={english} />;
};
