import React from 'react';

import Buttons from '../shared/Buttons';
import { store } from '../../store';
import { types } from '../../store/reducer';

export default () => {
  const { state: { word: { lemma, options } } } = React.useContext(store);
  return (
    <div className="pink-background">
      <Buttons
        label="Latin"
        items={options}
        correctAnswer={lemma}
        action={{ type: types.TOGGLE_WORD }}
      />
    </div>
  );
};
