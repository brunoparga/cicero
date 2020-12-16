import React from "react";

import { WordButtons } from "./private";

type Properties = { header: string; label?: string };

// eslint-disable-next-line func-style
export const Question: React.FunctionComponent<Properties> = ({
  header,
  label = "Latin",
  children,
}) => (
  <>
    <h1>{header}</h1>
    <WordButtons label={label} />
    {children}
  </>
);
