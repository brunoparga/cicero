/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import Buttons from './Buttons';
import { store } from '../lib/store';
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
        <div className="checkbox" onClick={() => dispatch(action)} />
        Plural
      </div>
    </div>
  );
};
