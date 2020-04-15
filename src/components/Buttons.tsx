/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import Button from './Button';
import './Buttons.css';

type Props = {
  label: string;
  items: string[];
}

const Buttons: React.FunctionComponent<Props> = ({ label, items }) => {
  const [selected, setSelected] = React.useState('');

  // Ensure at most one button per row is selected
  const clickHandler = (event: React.MouseEvent) => {
    const elt = event.target as HTMLElement;
    if (elt.tagName === 'BUTTON' && elt.innerText === selected) {
      // Clicking an already selected button deselects it
      setSelected('');
    } else if (elt.tagName === 'BUTTON') {
      setSelected(elt.innerText);
    }
  };

  return (
    <div className="buttons" onClick={clickHandler}>
      <div className="item label">
        {label}
      </div>
      {items.map((item) => <Button content={item} key={item} clicked={item === selected} />)}
    </div>
  );
};

export default Buttons;
