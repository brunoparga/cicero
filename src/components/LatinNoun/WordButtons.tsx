import React from 'react';

import Buttons from '../shared/Buttons';
import { store } from '../../store';

export default () => {
  const { state: { word: { lemma, options } } } = React.useContext(store);
  return (
    <div className="pink-background">
      <Buttons label="Latin" items={options} correctAnswer={lemma} />
    </div>
  );
};
