import React from 'react';

import { store } from '../../store';
import { singular, plural } from '../../grammar/genitiveSuffixes';
import { types } from '../../store/reducer';

import Buttons from '../shared/Buttons';
import Checkbox from '../shared/Checkbox';

export default () => {
  const {
    state: {
      word: { number, declension },
      pluralSelected,
    },
    dispatch,
  } = React.useContext(store);

  const [suffixes, setSuffixes] = React.useState(singular);

  React.useEffect(() => {
    setSuffixes(pluralSelected ? plural : singular);
  }, [pluralSelected]);

  const togglePlural = { type: types.TOGGLE_PLURAL };

  const keyUpHandler = (event: any) => {
    if (event.key.toUpperCase() === 'P') {
      dispatch(togglePlural);
    }
  };

  const correctAnswer = { singular, plural }[number][declension];

  return (
    <div className="buttons pink-background spaced">
      <Buttons
        label="Genitive"
        items={suffixes}
        correctAnswer={correctAnswer}
        action={{ type: types.TOGGLE_GENITIVE }}
      />
      <Checkbox
        checked={pluralSelected}
        clickHandler={() => dispatch(togglePlural)}
        keyUpHandler={keyUpHandler}
        label="Plural"
      />
    </div>
  );
};
