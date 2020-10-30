import React from 'react';

import { store } from '../../../store';
import { Word } from '../../../types';
import { Answer } from '../../shared';
import { functionSelector } from './helpers';
import './index.css';

export const Teach: React.FunctionComponent = () => {
  const { state: { word } } = React.useContext(store) as { state: { word: Word }};
  // depending on the questionType of the word, a function is selected to generate the right
  // elements for teaching
  const [header, wordType, text] = functionSelector[word.questionType](word);
  return <Answer teach header={header} wordType={wordType} text={text} />;
};
