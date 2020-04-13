// eslint-disable-next-line no-unused-vars
import { AppState, Action } from './types';

export default (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'TOGGLE_PLURAL':
      return { ...state, pluralSelected: !state.pluralSelected };
    default:
      throw new Error();
  }
};
