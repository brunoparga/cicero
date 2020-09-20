import React from 'react';
import { FieldError, useForm } from 'react-hook-form';

import { store } from '../../store';
import { signin } from '../../store/actions/signin';
import { signup } from '../../store/actions/signup';
import { UserAccountInputs } from '../../types';
import { RequiredText } from './RequiredText';
import { RequiredPassword } from './RequiredPassword';
import './index.css';

export const UserAccountForm: React.FunctionComponent = () => {
  const { dispatch } = React.useContext(store);

  const [action, setAction] = React.useState('signin');
  const URL = `${process.env.REACT_APP_API_URL}/${action}`;
  const { errors } = useForm<UserAccountInputs>();

  const onSigninClick = () => {
    console.log(watch('email'));
    if (action === 'signin') {
      signin(URL, { email: watch('email'), password: watch('password') }, dispatch);
    } else {
      setAction('signin');
    }
  };

  const onSignupClick = (formData: any) => {
    if (action === 'signup') {
      signup(URL, formData, dispatch);
    } else {
      setAction('signup');
    }
  };

  return (
    <form>
      <RequiredText name="email" error={errors.email as FieldError} />
      <RequiredPassword name="password" error={errors.password as FieldError} />
      {action === 'signup'
        && <RequiredPassword name="confirmPassword" error={errors.confirmPassword as FieldError} />}
      <button type="button" className="btn form-btn" onClick={onSigninClick}>Log in</button>
      <button type="button" className="btn form-btn" onClick={onSignupClick}>Sign up</button>
    </form>
  );
};
