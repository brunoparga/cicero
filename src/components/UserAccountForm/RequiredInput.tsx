import React from 'react';
import { useForm } from 'react-hook-form';

import { FormInputPropTypes, UserAccountInputs } from '../../types';

type PropTypes = FormInputPropTypes & { type: string; }

export const
  RequiredInput: React.FunctionComponent<PropTypes> = ({ type, name, error }) => {
    const { register } = useForm<UserAccountInputs>();
    const place = name[0].toUpperCase().concat(name.slice(1));

    return (
      <>
        <input type={type} name={name} placeholder={place} ref={register({ required: true })} />
        {error && <span className="white">This field is required</span>}
      </>
    );
  };
