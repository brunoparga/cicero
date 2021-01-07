import React from "react";

import { actions, store } from "../../../store";
import { active, passive } from "../../../grammar";
import { Action, PageState, VerbProperties } from "../../../types";
import { Buttons, Checkbox } from "../../shared";
import { useInfinitives } from "../../../hooks/useInfinitives";

// Buttons to select the infinitive suffix, which indicates how the verb is
// conjugated
// eslint-disable-next-line func-style
export const InfinitiveButtons: React.FunctionComponent = () => {
  const {
    state: {
      word: {
        properties: { conjugation, deponent, correctInfinitive },
      },
      page: { passiveSelected },
    },
    dispatch,
  } = React.useContext(store) as {
    state: {
      word: { properties: VerbProperties };
      page: PageState;
    };
    dispatch: React.Dispatch<Action>;
  };
  const suffixes = useInfinitives();

  function keyUpHandler(event: React.KeyboardEvent) {
    if (event.key.toUpperCase() === "P") {
      dispatch(actions.TOGGLE_DEPONENT);
    }
  }

  const correctAnswer =
    correctInfinitive || (deponent ? passive : active)[conjugation];

  return (
    <div className="buttons pink-background spaced">
      <Buttons
        label="Infinitive"
        items={suffixes}
        correctAnswer={correctAnswer}
      />
      <Checkbox
        checked={passiveSelected}
        clickHandler={() => dispatch(actions.TOGGLE_DEPONENT)}
        keyUpHandler={keyUpHandler}
        label="Passive"
      />
    </div>
  );
};
