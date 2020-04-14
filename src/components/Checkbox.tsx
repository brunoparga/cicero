import React from 'react';

import './Checkbox.css';

type Props = {
  checked: boolean,
  clickHandler: React.MouseEventHandler,
  keyUpHandler: any,
  label: string
}

export default ({
  checked, clickHandler, keyUpHandler, label,
}: Props) => (
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
