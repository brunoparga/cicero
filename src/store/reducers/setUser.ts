// eslint-disable-next-line no-unused-vars
import { AppState } from '../../types';

type SuccessPayload = {
  email: string;
  token: string;
}

type FailurePayload = { message: string; }
type SetUserPayload = SuccessPayload & FailurePayload

export const setUser = (state: AppState, { message, email, token }: SetUserPayload) => {
  if (message || state.user) { return state; }
  return { ...state, user: { email, token } };
};
