import React from 'react';

import Buttons from '../shared/Buttons';
import { store } from '../../store';

export default () => {
  const { state: { word: { gender } } } = React.useContext(store);

  return (
    <div className="pink-background">
      <Buttons
        label="Gender"
        items={['masculine', 'feminine', 'neuter', 'masc./fem.']}
        correctAnswer={gender}
      />
    </div>
  );
};
