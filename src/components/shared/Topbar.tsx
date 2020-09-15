import React from 'react';
import { useForm } from 'react-hook-form';
import './Topbar.css';

type Inputs = {
  email: string,
  password: string,
};

export const Topbar: React.FunctionComponent = () => {
  const [action] = React.useState('signin');
  const URL = `${process.env.REACT_APP_API_URL}/${action}`;
  const { register, handleSubmit, errors } = useForm<Inputs>();

  const onSubmit = (formData: any) => {
    fetch(URL, {
      method: 'POST',
      headers: { ContentType: 'application/json' },
      body: JSON.stringify(formData),
    });
  };
  return (
    <div className="navbar">
      <div className="title">Cicero</div>
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
