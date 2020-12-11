import React from "react";

import { QuestionType } from "../../types";

type DrillElement = (drillProperties: QuestionType) => React.ReactElement;

// Select the correct element to display based on question type
export const drill: DrillElement = (questionType) =>
  React.createElement(questionType);
