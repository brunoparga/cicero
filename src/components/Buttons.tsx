import React from 'react';

import Button from './Button';
import './Buttons.css';

type Props = {
  label: string;
  items: string[];
} & Partial<DefaultProps>

const defaultProps = { shuffle: false };

type DefaultProps = Readonly<typeof defaultProps>;

const Buttons: React.FunctionComponent<Props> = ({ label, items, shuffle }) => {

  return (
    <div className="buttons">
      <div className="item label">
        {label}
        {': '}
      </div>
      {items.map((item) => <Button content={item} clicked={false} key={item} />)}
    </div>
  )
};

export default Buttons