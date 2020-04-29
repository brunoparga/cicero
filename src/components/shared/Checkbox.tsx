import React from 'react';

import './Checkbox.css';

type Props = {
  checked: boolean,
  clickHandler: React.MouseEventHandler,
  keyUpHandler: React.KeyboardEventHandler,
  label: string
}

export const Checkbox: React.FunctionComponent<Props> = ({
  checked, clickHandler, keyUpHandler, label,
}) => (
  <div className="checkbox-container">
    <div
      role="checkbox"
      aria-label={label}
      aria-checked={checked}
      tabIndex={0}
      className="checkbox"
      onClick={clickHandler}
      onKeyUp={keyUpHandler}
    >
      <div className={checked ? 'checked' : 'unchecked'}>X</div>
    </div>
    <div>
      {label}
    </div>
  </div>
);
