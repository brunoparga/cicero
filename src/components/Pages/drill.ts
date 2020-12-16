import React from "react";

import { QuestionType } from "../../types";

type DrillElement = (drillProperties: QuestionType) => React.ReactElement;

// Select the correct element to display based on question type
// eslint-disable-next-line func-style
export const drill: DrillElement = (questionType) =>
  React.createElement(questionType);
