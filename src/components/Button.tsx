import React from 'react';

import './Button.css';

type Props = {
  content: string;
} & Partial<DefaultProps>

const defaultProps = { clicked: false };

type DefaultProps = Readonly<typeof defaultProps>;

const Button: React.FunctionComponent<Props> = ({ content, clicked }) => {
  const className = `item btn ${clicked ? 'active' : 'inactive'}`;
  return <div className={className}>{content}</div>;
};

export default Button;
