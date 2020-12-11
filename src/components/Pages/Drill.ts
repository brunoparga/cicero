import React from "react";

import { QuestionType } from "../../types";
import { questionType as elements_questionType } from "../Words";

// eslint-disable-next-line no-unused-vars
type DrillElement = (drillProperties: QuestionType) => React.ReactElement;

// Select the correct element to display based on question type
export const Drill: DrillElement = (questionType) =>
  React.createElement(elements_questionType);
