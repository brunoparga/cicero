import React from 'react';
import { useForm } from 'react-hook-form';

import { signin, signup, store } from '../../store';
import { UserAccountInputs } from '../../types';
import './index.css';

export * from './SignoutButton';

export const UserAccountForm: React.FunctionComponent = () => {
  const { dispatch } = React.useContext(store);

  const [action, setAction] = React.useState('signin');
  const URL = `${process.env.REACT_APP_API_URL}/${action}`;
  const { register, watch, errors } = useForm<UserAccountInputs>();

  const onSigninClick = () => {
    if (action === 'signin') {
      const signinData = { email: watch('email'), password: watch('password') };
      signin(URL, signinData, dispatch);
    } else {
      setAction('signin');
    }
  };

  const onSignupClick = () => {
    if (action === 'signup') {
      const signupData = {
        email: watch('email'),
        password: watch('password'),
        confirmPassword: watch('confirmPassword'),
      };
      signup(URL, signupData, dispatch);
    } else {
      setAction('signup');
    }
  };

  return (
    <form>
      <input type="text" name="email" placeholder="Email" ref={register({ required: true })} />
      {errors.email && <span className="white">This field is required</span>}
      <input
        type="password"
        name="password"
        placeholder="Password"
        ref={register({ required: true })}
      />
      {errors.password && <span className="white">This field is required</span>}
      {action === 'signup' && (
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm password"
        ref={register({ required: true })}
      />
      )}
      {action === 'signup'
      && errors.confirmPassword
      && <span className="white">This field is required</span>}
      <button
        type="button"
        className={`btn form-btn ${action === 'signin' ? 'in-focus white' : 'not-focused'}`}
        onClick={onSigninClick}
      >
        Log in
      </button>
      <button
        type="button"
        className={`btn form-btn ${action === 'signup' ? 'in-focus white' : 'not-focused'}`}
        onClick={onSignupClick}
      >
        Sign up
      </button>
    </form>
  );
};
