import { Action, UserState } from '../../types';

export const userReducer = (user: UserState, { type, payload }: Action): UserState => {
  switch (type) {
    case 'SIGN_IN':
      return user.email ? user : payload as UserState;
    case 'SIGN_OUT':
      return { message: 'Signed out.' };
    default:
      return user;
  }
};
