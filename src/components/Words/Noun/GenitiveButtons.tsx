import React from "react";

import { actions, store } from "../../../store";
import { Action, NounProperties, PageState } from "../../../types";
import { useGenitives } from "../../../hooks/useGenitives";
import { Buttons, Checkbox } from "../../shared";
import { setGenitive } from "../../../helpers";

// Buttons to select the genitive suffix, which indicates how the word is
// inflected, changing according to its role in the sentence (subject,
// object...)
// eslint-disable-next-line func-style
export const GenitiveButtons: React.FunctionComponent = () => {
  const {
    state: {
      word: { properties },
      page: { pluralSelected },
    },
    dispatch,
  } = React.useContext(store) as {
    state: {
      word: { properties: NounProperties };
      page: PageState;
    };
    dispatch: React.Dispatch<Action>;
  };
  const correctAnswer = setGenitive(properties);
  const suffixes = useGenitives();

  function keyUpHandler(event: React.KeyboardEvent) {
    if (event.key.toUpperCase() === "P") {
      dispatch(actions.TOGGLE_PLURAL);
    }
  }

  return (
    <div className="buttons pink-background spaced">
      <Buttons
        label="Genitive"
        items={suffixes}
        correctAnswer={correctAnswer}
      />
      <Checkbox
        checked={pluralSelected}
        clickHandler={() => dispatch(actions.TOGGLE_PLURAL)}
        keyUpHandler={keyUpHandler}
        label="Plural"
      />
    </div>
  );
};
