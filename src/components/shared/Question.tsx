import React from 'react';

import { WordButtons } from './private';

type Props = { header: string, label?: string }

export const Question: React.FunctionComponent<Props> = ({ header, label = 'Latin', children }) => (
  <>
    <h1>{header}</h1>
    <WordButtons label={label} />
    {children}
  </>
);
