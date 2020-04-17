import React from 'react';

import { store } from '../../store';
import Buttons from '../shared/Buttons';

export default () => {
  const { state: { word: { lemma, options } } } = React.useContext(store);
  return (
    <div className="pink-background">
      <Buttons label="Latin" items={options} correctAnswer={lemma} />
    </div>
  );
};
