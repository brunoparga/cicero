import React from 'react';

import { store } from '../../../store';
import { Word } from '../../../types';
import { active, passive } from '../../../grammar';
import { Answer } from '../../shared';

// Prepare the correct answer for presentation
export const VerbAnswer: React.FunctionComponent = () => {
  const {
    state: {
      word: {
        lemma,
        english,
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
  const answer = `${typeOfVerb}: ${lemma}, ${infinitive}, ${perfect || '--'}, ${supine || '--'}`;

  return <Answer header={english} text={answer} />;
};
