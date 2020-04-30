// eslint-disable-next-line no-unused-vars
import { AppState } from '../../types';

type SetGuessPayload = {
  property: string,
  value: boolean
}

export const setGuess = (state: AppState, { property, value }: SetGuessPayload) => {
  const { guess } = state;
  guess[property] = value;
  return { ...state, guess };
};
