import React from 'react';

import './Button.css';

type Props = {
  content: string;
  clicked: boolean
}

// The button knows whether it is clicked to change its appearance accordingly.
const Button: React.FunctionComponent<Props> = ({ content, clicked }) => (
  <button type="button" className={`item btn ${clicked ? 'active' : 'inactive'}`}>
    {content}
  </button>
);

export default Button;
