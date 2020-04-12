import React from 'react';

import Buttons from './Buttons';
import { store } from '../lib/store';

export default () => {
  const { state: { pluralSelected } } = React.useContext(store);
  let suffixes = ['-ae', '-ī', '-is', '-ūs', '-eī'];
  if (pluralSelected) {
    suffixes = ['-ārum', '-ōrum', '-(i)um', '-uum', '-ērum'];
  }
  return <Buttons label="Genitive" items={suffixes} />;
};
