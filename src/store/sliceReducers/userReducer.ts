import { Action, UserState } from '../../types';
import { actions } from '..';

export const userReducer = (user: UserState, { type, payload }: Action): UserState => {
  switch (type) {
    case actions.SIGN_IN:
      return user?.email ? user : payload;
    case actions.SIGN_OUT:
      return { message: 'Signed out.' };
    default:
      return user;
  }
};
