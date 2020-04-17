import React from 'react';

import Buttons from '../shared/Buttons';
import { store } from '../../store';

export default () => {
  const { state: { word: { gender } } } = React.useContext(store);
  const items = ['masculine', 'feminine', 'neuter', 'masc./fem.'];

  return (
    <div className="pink-background">
      <Buttons label="Gender" items={items} correctAnswer={gender} />
    </div>
  );
};
