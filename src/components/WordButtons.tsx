import React from 'react';

import Buttons from './Buttons';
import { store } from '../store';

export default () => {
  const { state: { word: { lemma, options } } } = React.useContext(store);
  return <Buttons label="Latin" items={options} correctAnswer={lemma} />;
};
