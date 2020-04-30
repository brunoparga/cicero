import React from 'react';

// eslint-disable-next-line no-unused-vars
import { QuestionType } from '../types';
import { LatinNoun } from './LatinNoun';
import { LatinVerb } from './LatinVerb';

type Drill = (drillProps: QuestionType) => React.ReactElement

export const Drill: Drill = (questionType) => {
  // I am actually in doubt about the best way to switch between the various exercise types...
  switch (questionType) {
    case 'LatinNoun':
      return <LatinNoun />;
    case 'LatinVerb':
      return <LatinVerb />;
    default:
      throw new Error();
  }
};
