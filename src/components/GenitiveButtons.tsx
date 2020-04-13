import React from 'react';

import Buttons from './Buttons';
import { store } from '../store';
import genitiveSuffixes from '../lib/grammarData';
import './Buttons.css';
import './GenitiveButtons.css';

export default () => {
  const { state: { pluralSelected }, dispatch } = React.useContext(store);
  const [suffixes, setSuffixes] = React.useState(genitiveSuffixes.singular);

  React.useEffect(() => {
    if (pluralSelected) {
      setSuffixes(genitiveSuffixes.plural);
    } else {
      setSuffixes(genitiveSuffixes.singular);
    }
  }, [pluralSelected]);

  const action = { type: 'TOGGLE_PLURAL' };
  return (
    <div className="buttons">
      <Buttons label="Genitive" items={suffixes} />
      <div>
        <div
          role="checkbox"
          aria-label="Plural"
          aria-checked={pluralSelected}
          tabIndex={0}
          className="checkbox"
          onClick={() => dispatch(action)}
          onKeyDown={() => dispatch(action)}
        />
        Plural
      </div>
    </div>
  );
};
