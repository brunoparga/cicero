// eslint-disable-next-line no-unused-vars
import { Word } from './word';

export type UserState = {
  email: string;
  token: string;
}

export type AppState = {
  user: UserState | null;
  pluralSelected: boolean;
  guess: {
    [key: string]: boolean;
  };
  revealAnswer: boolean;
  passiveSelected: boolean;
  word: Word | null;
  words: Word[]
};
