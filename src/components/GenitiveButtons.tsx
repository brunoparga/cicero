import React from 'react';

import { store } from '../store';
import Buttons from './Buttons';
import Checkbox from './Checkbox';
import genitiveSuffixes from '../lib/grammarData';
import './Buttons.css';

export default () => {
  const {
    state: {
      word: {
        number,
        declension,
      },
      pluralSelected,
    },
    dispatch,
  } = React.useContext(store);
  const [suffixes, setSuffixes] = React.useState(genitiveSuffixes.singular);

  React.useEffect(() => {
    if (pluralSelected) {
      setSuffixes(genitiveSuffixes.plural);
    } else {
      setSuffixes(genitiveSuffixes.singular);
    }
  }, [pluralSelected]);

  const action = { type: 'TOGGLE_PLURAL' };

  const keyUpHandler = (event: any) => {
    if (event.key.toUpperCase() === 'P') {
      dispatch(action);
    }
  };

  return (
    <div className="buttons pink-background spaced">
      <Buttons label="Genitive" items={suffixes} correctAnswer="-is" />
      <Checkbox
        checked={pluralSelected}
        clickHandler={() => dispatch(action)}
        keyUpHandler={keyUpHandler}
        label="Plural"
      />
    </div>
  );
};
