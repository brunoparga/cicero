import React from 'react';

import { FormInputPropTypes } from '../../types';
import { RequiredInput } from './RequiredInput';

export const RequiredText: React.FunctionComponent<FormInputPropTypes> = (props) => React
  .createElement(RequiredInput, { ...props, type: 'text' });
