import React from 'react';

import { store } from '../../store';
import WordButtons from './WordButtons';
import GenitiveButtons from './GenitiveButtons';
import GenderButtons from './GenderButtons';

export default () => {
  const { state: { word: { english } } } = React.useContext(store);
  return (
    <>
      <h1>{english}</h1>
      <WordButtons />
      <GenitiveButtons />
      <GenderButtons />
    </>
  );
};
