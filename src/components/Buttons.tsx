import React from 'react';

import Button from './Button';
import './Buttons.css';

type Props = {
  label: string;
  items: string[];
}

const Buttons: React.FunctionComponent<Props> = ({ label, items }) => (
  <div className="buttons">
    <div className="item label">
      {label}
    </div>
    {items.map((item) => <Button content={item} key={item} />)}
  </div>
);

export default Buttons;
