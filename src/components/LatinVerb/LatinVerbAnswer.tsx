import React from 'react';

import { store } from '../../store';
// eslint-disable-next-line no-unused-vars
import { Word } from '../../types';
import { active, passive } from '../../grammar/infinitiveSuffixes';
import { Answer } from '../shared/Answer';
import '../shared/Answer.css';

// Prepare the correct answer for presentation
export const LatinVerbAnswer: React.FunctionComponent = () => {
  const {
    state: {
      word: {
        lemma,
        properties: {
          conjugation, perfect, supine, deponent, correctInfinitive,
        },
      },
    },
  } = React.useContext(store) as { state: { word: Word } };

  // Pick the correct infinitive ending from the suffixes of the correct voice. Deponent verbs have
  // passive voice suffixes.
  const infinitive = correctInfinitive || (deponent ? passive : active)[conjugation];
  const typeOfVerb = deponent ? 'Deponent verb' : 'Verb';
  const answer = `${typeOfVerb}: ${lemma}, ${infinitive}, ${perfect} ${supine}`;

  return <Answer text={answer} />;
};
