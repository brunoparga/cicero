// eslint-disable-next-line no-unused-vars
import { AppState } from '../types';

type SetGuessPayload = {
  property: 'latin' | 'genitive' | 'gender',
  value: boolean,
}

export default (state: AppState, { property, value }: SetGuessPayload) => {
  const { guess } = state;
  guess[property] = value;
  return { ...state, guess };
};
