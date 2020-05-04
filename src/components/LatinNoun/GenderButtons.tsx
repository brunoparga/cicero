import React from 'react';

import { Buttons } from '../shared/Buttons';
import { store } from '../../store';
// eslint-disable-next-line no-unused-vars
import { Word } from '../../types';

// Buttons to select the noun's gender. Nouns that are both masculine and feminine are rare enough
// that it is not worth it coding this as checkboxes rather than radio buttons.
export const GenderButtons: React.FunctionComponent = () => {
  const { state: { word } } = React.useContext(store) as { state: { word: Word }};
  const { gender } = word.properties;
  const answer = gender === 'masculine/feminine' ? 'masc./fem.' : gender;
  const items = ['masculine', 'feminine', 'neuter', 'masc./fem.'];

  return (
    <div className="pink-background">
      <Buttons label="Gender" items={items} correctAnswer={answer} />
    </div>
  );
};
