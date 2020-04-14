import React from 'react';

import Buttons from './Buttons';
import { store } from '../store';

export default () => {
  const { state: { word } } = React.useContext(store);
  const items = word.options;
  return <Buttons label="Latin" items={items} />;
};
