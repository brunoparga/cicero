import React from 'react';

import { store } from '../../../store';
import { Word } from '../../../types';
import { Answer } from '../../shared';
import { describeAdjective } from '../../../helpers';

// Prepare the correct answer for presentation
export const AdjectiveAnswer: React.FunctionComponent = () => {
  const {
    state: { word, word: { english } },
  } = React.useContext(store) as { state: { word: Word } };
  const text = describeAdjective(word);
  return <Answer header={english} text={text} />;
};
