import React from 'react';

import { WordButtons } from '../shared/WordButtons';

type Props = { header: string, label: string }

export const Question: React.FunctionComponent<Props> = ({ header, label, children }) => (
  <>
    <h1>{header}</h1>
    <WordButtons label={label} />
    {children}
  </>
);
