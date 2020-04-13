import React from 'react';

import Buttons from './Buttons';
import shuffle from '../lib/shuffle';
import { store } from '../store';

export default () => {
  const { state: { word } } = React.useContext(store);
  const items = shuffle(word.options.concat([word.lemma]));
  return <Buttons label="Latin" items={items} />;
};
