// eslint-disable-next-line no-unused-vars
import { Word } from './word';

type UserNotLoggedIn = { message: string; }
type UserLoggedIn = { email?: string; token?: string; }
export type UserState = UserNotLoggedIn & UserLoggedIn;

export type AppState = {
  user: UserState;
  pluralSelected: boolean;
  guess: {
    [key: string]: boolean;
  };
  revealAnswer: boolean;
  passiveSelected: boolean;
  word: Word | null;
  words: Word[]
};
