import React from "react";
import { useForm } from "react-hook-form";

import { UserAccountInputs } from "../../types";

interface PropertyTypes {
  action: string;
  onSigninClick: () => void;
  onSignupClick: () => void;
}

export const UserAccountFormRender: React.FunctionComponent<PropertyTypes> = ({
  action,
  onSigninClick,
  onSignupClick,
}) => {
  const { register, errors } = useForm<UserAccountInputs>();

  return (
    <form>
      <input
        type="text"
        name="email"
        placeholder="Email"
        ref={register({ required: true })}
      />
      {errors.email && <span className="white">This field is required</span>}
      <input
        type="password"
        name="password"
        placeholder="Password"
        ref={register({ required: true })}
      />
      {errors.password && <span className="white">This field is required</span>}
      {action === "signup" && (
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          ref={register({ required: true })}
        />
      )}
      {action === "signup" && errors.confirmPassword && (
        <span className="white">This field is required</span>
      )}
      <button
        type="button"
        className={`btn form-btn ${
          action === "signin" ? "in-focus white" : "not-focused"
        }`}
        onClick={onSigninClick}
      >
        Log in
      </button>
      <button
        type="button"
        className={`btn form-btn ${
          action === "signup" ? "in-focus white" : "not-focused"
        }`}
        onClick={onSignupClick}
      >
        Sign up
      </button>
    </form>
  );
};
