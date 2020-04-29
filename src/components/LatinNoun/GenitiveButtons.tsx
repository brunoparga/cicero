import React from 'react';

import { store } from '../../store';
import { singular, plural } from '../../grammar/genitiveSuffixes';
import { types } from '../../store/reducer';
// eslint-disable-next-line no-unused-vars
import { Word } from '../../store/types';

import { Buttons } from '../shared/Buttons';
import { Checkbox } from '../shared/Checkbox';

// Buttons to select the genitive suffix, which indicates how the word is inflected, changing
// according to its role in the sentence (subject, object...)
export const GenitiveButtons: React.FunctionComponent = () => {
  const {
    state: { word, pluralSelected },
    dispatch,
  } = React.useContext(store);

  const { properties: { correctGenitive, declension, number } } = word as Word;

  const [suffixes, setSuffixes] = React.useState(singular);

  React.useEffect(() => {
    const correctSingular = [...singular];
    const correctPlural = [...plural];
    const correctNumberSelected = pluralSelected === (number === 'plural');
    if (correctGenitive && correctNumberSelected) {
      correctSingular[declension] = correctGenitive;
      correctPlural[declension] = correctGenitive;
    }
    setSuffixes(pluralSelected ? correctPlural : correctSingular);
  }, [pluralSelected, correctGenitive, declension, number]);

  const togglePlural = { type: types.TOGGLE_PLURAL };

  const keyUpHandler = (event: React.KeyboardEvent) => {
    if (event.key.toUpperCase() === 'P') {
      dispatch(togglePlural);
    }
  };

  const correctAnswer = correctGenitive || { singular, plural }[number][declension];

  return (
    <div className="buttons pink-background spaced">
      <Buttons label="Genitive" items={suffixes} correctAnswer={correctAnswer} />
      <Checkbox
        checked={pluralSelected}
        clickHandler={() => dispatch(togglePlural)}
        keyUpHandler={keyUpHandler}
        label="Plural"
      />
    </div>
  );
};
