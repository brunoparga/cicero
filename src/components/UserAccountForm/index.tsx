import React from 'react';
import { FieldError, useForm } from 'react-hook-form';

import { store } from '../../store';
import { signin } from '../../store/actions/signin';
import { UserAccountInputs } from '../../types';
import { RequiredText } from './RequiredText';
import { RequiredPassword } from './RequiredPassword';
import './index.css';

export const UserAccountForm: React.FunctionComponent = () => {
  const { dispatch } = React.useContext(store);

  const [action, setAction] = React.useState('signin');
  const URL = `${process.env.REACT_APP_API_URL}/${action}`;
  const { handleSubmit, errors } = useForm<UserAccountInputs>();

  const onSubmit = (formData: UserAccountInputs) => {
    signin(URL, formData, dispatch);
  };

  const onSignupClick = () => {
    setAction('signup');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RequiredText name="email" error={errors.email as FieldError} />
      <RequiredPassword name="password" error={errors.password as FieldError} />
      {action === 'signup'
        && <RequiredPassword name="confirmPassword" error={errors.confirmPassword as FieldError} />}
      <button type="submit" className="btn form-btn">Log in</button>
      <button type="button" className="btn form-btn" onClick={onSignupClick}>Sign up</button>
    </form>
  );
};
