import React from 'react';

import { store } from '../../store';
// eslint-disable-next-line no-unused-vars
import { Word } from '../../store/types';
import Buttons from '../shared/Buttons';

// Buttons to select the correct Latin word for the given English word.
// Future plan: replace English with any user-selected language.
export default () => {
  const { state: { word } } = React.useContext(store) as { state: { word: Word }};

  return (
    <div className="pink-background">
      <Buttons label="Latin" items={word.options} correctAnswer={word.lemma} />
    </div>
  );
};
