import React from 'react';

import { store } from '../store';
import Buttons from './Buttons';
import Checkbox from './Checkbox';
import genitiveSuffixes from '../lib/grammarData';
import './Buttons.css';

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
      <Checkbox checked={pluralSelected} handler={() => dispatch(action)} label="Plural" />
    </div>
  );
};
