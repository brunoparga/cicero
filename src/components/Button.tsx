import React from 'react';

import './Button.css';

type Props = {
  content: string;
}

const Button: React.FunctionComponent<Props> = ({ content }) => {
  const [clicked, setClicked] = React.useState(false);
  return (
    <button
      type="button"
      className={`item btn ${clicked ? 'active' : 'inactive'}`}
      onClick={() => setClicked(!clicked)}
    >
      {content}
    </button>
  );
};

export default Button;
