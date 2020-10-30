import React from 'react';

import { store } from '../../../store';
import { Word } from '../../../types';
import { Answer } from '../../shared';
import { Noun } from './helpers';
import './index.css';

const floof = { Noun };

export const Teach: React.FunctionComponent = () => {
  const { state: { word } } = React.useContext(store) as { state: { word: Word }};
  const [header, wordType, text] = floof[word?.questionType](word);
  return <Answer teach header={header} wordType={wordType} text={text} />;
};
