import React from 'react';

import { store } from '../../../store';
import { Word } from '../../../types';
import { singular, plural } from '../../../grammar';
import { Answer } from '../../shared';

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
