import React from 'react';

import './Checkbox.css';

type Props = {
  checked: boolean,
  handler: () => any,
  label: string
}

export default ({ checked, handler, label }: Props) => (
  <div className="checkbox-container">
    <div
      role="checkbox"
      aria-label={label}
      aria-checked={checked}
      tabIndex={0}
      className="checkbox"
      onClick={handler}
      onKeyDown={handler}
    >
      <div className={checked ? 'checked' : 'unchecked'}>X</div>
    </div>
    <div>
      {label}
    </div>
  </div>
);
