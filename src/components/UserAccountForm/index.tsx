import React from 'react';
import { useForm } from 'react-hook-form';

import { store } from '../../store';
import { signin } from '../../store/actions/signin';
import { UserAccountInputs } from '../../types';
import './index.css';

export const UserAccountForm: React.FunctionComponent = () => {
  const { dispatch } = React.useContext(store);

  const [action, setAction] = React.useState('signin');
  const URL = `${process.env.REACT_APP_API_URL}/${action}`;
  const { register, handleSubmit, errors } = useForm<UserAccountInputs>();

  const onSubmit = (formData: UserAccountInputs) => {
    signin(URL, formData, dispatch);
  };

  const onSignupClick = () => {
    setAction('signup');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="email" placeholder="Email" ref={register({ required: true })} />
      {errors.email && <span className="white">This field is required</span>}
      <input
        type="password"
        name="password"
        placeholder="Password"
        ref={register({ required: true })}
      />
      {errors.password && <span className="white">This field is required</span>}
      <button type="submit" className="btn form-btn">Log in</button>
      <button type="button" className="btn form-btn" onClick={onSignupClick}>Sign up</button>
    </form>
  );
};
