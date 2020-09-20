import React from 'react';

// eslint-disable-next-line no-unused-vars
import { Word } from '../types';
import { store } from '../store';
import { singular, plural } from '../grammar';

export const useSuffixes = (): string[] => {
  const { state: { word, pluralSelected } } = React.useContext(store);
  const { properties: { correctGenitive, declension, number } } = word as Word;

  const [suffixes, setSuffixes] = React.useState(singular);

  React.useEffect(() => {
    const correctSingular = [...singular];
    const correctPlural = [...plural];
    const correctNumberSelected = pluralSelected === (number === 'plural');
    if (correctGenitive && correctNumberSelected) {
      correctSingular[declension] = correctGenitive;
      correctPlural[declension] = correctGenitive;
    }
    setSuffixes(pluralSelected ? correctPlural : correctSingular);
  }, [pluralSelected, correctGenitive, declension, number]);

  return suffixes;
};
