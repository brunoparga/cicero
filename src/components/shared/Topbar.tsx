import React from 'react';

import { useForm } from 'react-hook-form';
import { store } from '../../store';
import { signin } from '../../store/actions/signin';
import { UserAccountInputs } from '../../types';
import './Topbar.css';

export const Topbar: React.FunctionComponent = () => {
  const { state: { user }, dispatch } = React.useContext(store);
  let email;
  if (user) {
    email = user.email;
  }

  const [action] = React.useState('signin');
  const URL = `${process.env.REACT_APP_API_URL}/${action}`;
  const { register, handleSubmit, errors } = useForm<UserAccountInputs>();

  const onSubmit = (formData: UserAccountInputs) => {
    signin(URL, formData, dispatch);
  };

  return (
    <div className="navbar">
      <div className="title">Cicero</div>
      <div className="email">{email}</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="email" placeholder="Email" ref={register({ required: true })} />
        {errors.email && <span>This field is required</span>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={register({ required: true })}
        />
        {errors.password && <span>This field is required</span>}
        <button type="submit" className="navbar-btn">Sign in</button>
      </form>
    </div>
  );
};
