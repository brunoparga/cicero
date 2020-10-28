import { Action, UserState } from '../../types';
import { actionTypes } from '..';

export const userReducer = (user: UserState, { type, payload }: Action): UserState => {
  switch (type) {
    case actionTypes.SIGN_IN:
      return user?.email ? user : payload;
    case actionTypes.SIGN_OUT:
      return { message: 'Signed out.' };
    default:
      return user;
  }
};
