import React from 'react';

import Button from './Button';
import shuffle from '../lib/shuffle';
import './Buttons.css';

type Props = {
  label: string;
  items: string[];
} & Partial<DefaultProps>

const defaultProps = { mustShuffle: false };

type DefaultProps = Readonly<typeof defaultProps>;

const Buttons: React.FunctionComponent<Props> = ({ label, items, mustShuffle }) => {
  let buttonContents = items;
  if (mustShuffle) {
    buttonContents = shuffle(items);
  }
  return (
    <div className="buttons">
      <div className="item label">
        {label}
        {': '}
      </div>
      {buttonContents.map((item) => <Button content={item} clicked={false} key={item} />)}
    </div>
  );
};

export default Buttons;
