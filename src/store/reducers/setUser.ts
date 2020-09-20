import { AppState } from '../../types';

type SuccessPayload = {
  email: string;
  token: string;
}

type FailurePayload = { message: string; }
type SetUserPayload = SuccessPayload & FailurePayload

export const setUser = (state: AppState, user: SetUserPayload) => {
  if (state.user?.email) { return state; }
  return { ...state, user };
};
