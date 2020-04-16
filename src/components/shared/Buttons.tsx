import React from 'react';

// eslint-disable-next-line no-unused-vars
import { Action } from '../../store/types';
import { store } from '../../store';
import Button from './Button';
import './Buttons.css';

type Props = {
  label: string;
  items: string[];
  correctAnswer: string;
  action: Action
}

const Buttons: React.FunctionComponent<Props> = ({
  label, items, correctAnswer, action,
}) => {
  const { dispatch } = React.useContext(store);
  const [selected, setSelected] = React.useState('');

  // Ensure at most one button per row is selected
  const clickHandler = (event: React.SyntheticEvent) => {
    const elt = event.target as HTMLElement;
    if (elt.tagName === 'BUTTON' && elt.innerText === selected) {
      // Clicking an already selected button deselects it
      setSelected('');
    } else if (elt.tagName === 'BUTTON') {
      setSelected(elt.innerText);
      if (elt.innerText === correctAnswer) {
        dispatch(action);
      }
    }
  };

  const keyUpHandler = (event: React.KeyboardEvent) => {
    if (event.key === ' ' || event.key === 'Enter') {
      clickHandler(event as React.SyntheticEvent);
    }
  };

  return (
    // This <div> element has children <button> elements that allow keyboard interaction.
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className="buttons" onClick={clickHandler} onKeyUp={keyUpHandler}>
      <div className="item label">
        {label}
      </div>
      {items.map((item) => <Button content={item} key={item} clicked={item === selected} />)}
    </div>
  );
};

export default Buttons;
