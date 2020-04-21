import React from 'react';

import { store } from '../../store';
import { singular, plural } from '../../grammar/genitiveSuffixes';
import { types } from '../../store/reducer';
// eslint-disable-next-line no-unused-vars
import { Word } from '../../store/types';

import Buttons from '../shared/Buttons';
import Checkbox from '../shared/Checkbox';

// Buttons to select the genitive suffix, which indicates how the word is inflected, changing
// according to its role in the sentence (subject, object...)
export default () => {
  const {
    state: { word, pluralSelected },
    dispatch,
  } = React.useContext(store);

  const [suffixes, setSuffixes] = React.useState(singular);

  React.useEffect(() => {
    setSuffixes(pluralSelected ? plural : singular);
  }, [pluralSelected]);

  const togglePlural = { type: types.TOGGLE_PLURAL };

  const keyUpHandler = (event: React.KeyboardEvent) => {
    if (event.key.toUpperCase() === 'P') {
      dispatch(togglePlural);
    }
  };

  const { number, declension } = word as Word;
  const correctAnswer = { singular, plural }[number][declension];

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