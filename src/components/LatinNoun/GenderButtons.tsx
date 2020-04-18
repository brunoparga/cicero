import React from 'react';

import Buttons from '../shared/Buttons';
import { store } from '../../store';

// Buttons to select the noun's gender. Nouns that are both masculine and feminine are rare enough
// that it is not worth it coding this as checkboxes rather than radio buttons.
export default () => {
  const { state: { word: { gender } } } = React.useContext(store);
  const items = ['masculine', 'feminine', 'neuter', 'masc./fem.'];

  return (
    <div className="pink-background">
      <Buttons label="Gender" items={items} correctAnswer={gender} />
    </div>
  );
};
