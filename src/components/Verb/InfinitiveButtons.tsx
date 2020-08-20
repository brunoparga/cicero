import React from 'react';

import { store } from '../../store';
import { active, passive } from '../../grammar/infinitiveSuffixes';
import { actionTypes } from '../../store/reducer';
// eslint-disable-next-line no-unused-vars
import { Word } from '../../types';
import { Buttons } from '../shared/Buttons';
import { Checkbox } from '../shared/Checkbox';
import { Conjugation } from '../../grammar/grammarCategories';

// Buttons to select the infinitive suffix, which indicates how the verb is conjugated
export const InfinitiveButtons: React.FunctionComponent = () => {
  const {
    state: { word, passiveSelected },
    dispatch,
  } = React.useContext(store);

  const { properties } = word as Word;
  const { conjugation, deponent, correctInfinitive } = properties;

  const [suffixes, setSuffixes] = React.useState(active);

  React.useEffect(() => {
    setSuffixes((suff) => {
      if (suff.length !== 4) { return [...active] }
      if (conjugation === Conjugation.Irregular) {
        const pos = Math.floor(Math.random() * 3)
        const newSuffixes = [...suffixes]
        newSuffixes.splice(pos, 0, correctInfinitive)
        return newSuffixes
      }
      // The few verbs that have a correctInfinitive but are not in the 'Irregular' conjugation
      // (e.g. dō) are all active, so no need to worry about deponent verbs here.
      const correctActive = [...active];
      correctActive[conjugation] = correctInfinitive;
      return correctActive;
    })
  }, [conjugation, correctInfinitive]);

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
