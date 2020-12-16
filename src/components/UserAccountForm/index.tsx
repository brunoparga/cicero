import React from "react";
import { useForm } from "react-hook-form";

import { signin, signup, store } from "../../store";
import { UserAccountInputs } from "../../types";

import "./index.css";
import { UserAccountFormRender } from "./UserAccountFormRender";

// eslint-disable-next-line func-style
export const UserAccountForm: React.FunctionComponent = () => {
  const { dispatch } = React.useContext(store);

  const [action, setAction] = React.useState("signin");
  const actionURL = `${process.env.REACT_APP_API_URL}/${action}`;
  const { watch } = useForm<UserAccountInputs>();

  function onSigninClick() {
    if (action === "signin") {
      const signinData = { email: watch("email"), password: watch("password") };

      signin(actionURL, signinData, dispatch);
    } else {
      setAction("signin");
    }
  }

  function onSignupClick() {
    if (action === "signup") {
      const signupData = {
        email: watch("email"),
        password: watch("password"),
        confirmPassword: watch("confirmPassword"),
      };

      signup(actionURL, signupData, dispatch);
    } else {
      setAction("signup");
    }
  }

  return (
    <UserAccountFormRender
      action={action}
      onSigninClick={onSigninClick}
      onSignupClick={onSignupClick}
    />
  );
};

export { SignoutButton } from "./SignoutButton";
