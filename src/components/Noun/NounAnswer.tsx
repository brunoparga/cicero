import React from 'react';

import { store } from '../../store';
// eslint-disable-next-line no-unused-vars
import { Word } from '../../types';
import { singular, plural } from '../../grammar/genitiveSuffixes';
import { Answer } from '../shared/Answer';

// Prepare the correct answer for presentation
export const NounAnswer: React.FunctionComponent = () => {
  const {
    state: {
      word: {
        lemma,
        english,
        properties: {
          number, gender, declension, correctGenitive,
        },
      },
    },
  } = React.useContext(store) as { state: { word: Word } };

  // Pick the correct declension ending from the suffixes of the correct number
  const genitive = correctGenitive || { singular, plural }[number][declension];
  const answer = `${lemma}, ${genitive}, ${gender} ${number} noun`;

  return <Answer header={english} text={answer} />;
};
