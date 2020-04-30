import React from 'react';

import { Question } from '../shared/Question';
import { InfinitiveButtons } from './InfinitiveButtons';

// Present buttons for user to guess which word is the correct Latin translation,
// its genitive suffix and grammatical number.
export const LatinVerbQuestion:
  React.FunctionComponent = () => <Question><InfinitiveButtons /></Question>;
