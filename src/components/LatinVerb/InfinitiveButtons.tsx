import React from 'react';

import { store } from '../../store';
import { active, passive } from '../../grammar/infinitiveSuffixes';
import { actionTypes } from '../../store/reducer';
// eslint-disable-next-line no-unused-vars
import { Word } from '../../types';
import { Buttons } from '../shared/Buttons';
import { Checkbox } from '../shared/Checkbox';

// Buttons to select the genitive suffix, which indicates how the word is inflected, changing
// according to its role in the sentence (subject, object...)
export const InfinitiveButtons: React.FunctionComponent = () => {
  const {
    state: { word, passiveSelected },
    dispatch,
  } = React.useContext(store);

  const { properties } = word as Word;
  const { conjugation, deponent, correctInfinitive } = properties;

  const [suffixes, setSuffixes] = React.useState(active);

  React.useEffect(() => {
    const correctActive = [...active];
    const correctPassive = [...passive];
    if (correctInfinitive && passiveSelected === deponent) {
      correctActive[conjugation] = correctInfinitive;
      correctPassive[conjugation] = correctInfinitive;
    }
    setSuffixes(passiveSelected ? correctPassive : correctActive);
  }, [passiveSelected, conjugation, correctInfinitive, deponent]);

  const toggleDeponent = { type: actionTypes.TOGGLE_DEPONENT };

  const keyUpHandler = (event: React.KeyboardEvent) => {
    if (event.key.toUpperCase() === 'P') {
      dispatch(toggleDeponent);
    }
  };

  const correctAnswer = correctInfinitive || (deponent ? passive : active)[conjugation];

  return (
    <div className="buttons pink-background spaced">
      <Buttons label="Infinitive" items={suffixes} correctAnswer={correctAnswer} />
      <Checkbox
        checked={passiveSelected}
        clickHandler={() => dispatch(toggleDeponent)}
        keyUpHandler={keyUpHandler}
        label="Passive"
      />
    </div>
  );
};
