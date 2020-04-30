import React from 'react';

import { Question } from '../shared/Question';
import { GenitiveButtons } from './GenitiveButtons';
import { GenderButtons } from './GenderButtons';

// Present buttons for user to guess which word is the correct Latin translation,
// its genitive suffix and grammatical number.
export const LatinNounQuestion: React.FunctionComponent = () => (
  <Question>
    <GenitiveButtons />
    <GenderButtons />
  </Question>
);
