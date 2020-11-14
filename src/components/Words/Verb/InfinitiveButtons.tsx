import React from 'react';

import { actions, store } from '../../../store';
import { active, passive } from '../../../grammar';
import { Word } from '../../../types';
import { Buttons, Checkbox } from '../../shared';
import { useInfinitives } from '../../../hooks/useInfinitives';

// Buttons to select the infinitive suffix, which indicates how the verb is conjugated
export const InfinitiveButtons: React.FunctionComponent = () => {
  const { state: { word, page: { passiveSelected } }, dispatch } = React.useContext(store);
  const { properties: { conjugation, deponent, correctInfinitive } } = word as Word;
  const suffixes = useInfinitives();

  const keyUpHandler = (event: React.KeyboardEvent) => {
    if (event.key.toUpperCase() === 'P') { dispatch(actions.TOGGLE_DEPONENT); }
  };

  const correctAnswer = correctInfinitive || (deponent ? passive : active)[conjugation];

  return (
    <div className="buttons pink-background spaced">
      <Buttons label="Infinitive" items={suffixes} correctAnswer={correctAnswer} />
      <Checkbox
        checked={passiveSelected}
        clickHandler={() => dispatch(actions.TOGGLE_DEPONENT)}
        keyUpHandler={keyUpHandler}
        label="Passive"
      />
    </div>
  );
};
