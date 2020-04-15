import React from 'react';

import './Button.css';

type Props = {
  content: string;
  clicked: boolean
}

const Button: React.FunctionComponent<Props> = ({ content, clicked }) => (
  <button type="button" className={`item btn ${clicked ? 'active' : 'inactive'}`}>
    {content}
  </button>
);

export default Button;
