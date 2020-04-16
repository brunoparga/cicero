import React from 'react';

import { store } from '../store';
import Buttons from './Buttons';
import Checkbox from './Checkbox';
import { singular, plural } from '../lib/genitiveSuffixes';
import './Buttons.css';

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

  const action = { type: 'TOGGLE_PLURAL' };

  const keyUpHandler = (event: any) => {
    if (event.key.toUpperCase() === 'P') {
      dispatch(action);
    }
  };

  const correctAnswer = { singular, plural }[number][declension];

  return (
    <div className="buttons pink-background spaced">
      <Buttons label="Genitive" items={suffixes} correctAnswer={correctAnswer} />
      <Checkbox
        checked={pluralSelected}
        clickHandler={() => dispatch(action)}
        keyUpHandler={keyUpHandler}
        label="Plural"
      />
    </div>
  );
};
