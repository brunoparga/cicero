import React from 'react';

import { store } from '../../store';
import Buttons from '../shared/Buttons';

// Buttons to select the correct Latin word for the given English word.
// Future plan: replace English with any user-selected language.
export default () => {
  const { state: { word: { lemma, options } } } = React.useContext(store);
  return (
    <div className="pink-background">
      <Buttons label="Latin" items={options} correctAnswer={lemma} />
    </div>
  );
};
