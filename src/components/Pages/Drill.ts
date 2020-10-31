import React from 'react';

import { QuestionType } from '../../types';
import * as elements from '../Words';

// eslint-disable-next-line no-unused-vars
type DrillElement = (drillProps: QuestionType) => React.ReactElement

// Select the correct element to display based on question type
export const Drill: DrillElement = (questionType) => React.createElement(elements[questionType]);
