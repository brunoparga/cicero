import React from "react";

import { QuestionType } from "../../types";
// eslint-disable-next-line import/no-namespace
import * as elements from "../Words";

// Select the correct element to display based on question type
export function drill(questionType: QuestionType): React.ReactElement {
  return React.createElement(elements[questionType]);
}
