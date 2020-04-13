import React from 'react';

import './Checkbox.css';

type Props = {
  checked: boolean,
  handler: () => any,
  label: string
}

export default ({ checked, handler, label }: Props) => (
  <div>
    <div
      role="checkbox"
      aria-label={label}
      aria-checked={checked}
      tabIndex={0}
      className="checkbox"
      onClick={handler}
      onKeyDown={handler}
    />
    {label}
  </div>
);
