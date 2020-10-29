import { Word } from '..';

type UserNotLoggedIn = { message: string; }
type UserLoggedIn = { email?: string; token?: string; }
export type UserState = UserNotLoggedIn & UserLoggedIn;

export type PageState = {
  studying: boolean;
  guess: {
    [key: string]: boolean;
  };
  passiveSelected: boolean;
  pluralSelected: boolean;
  revealAnswer: boolean;
}

export type AppState = {
  page: PageState;
  user: UserState;
  word: Word | null;
  words: Word[]
};
