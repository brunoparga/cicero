import { Word } from "..";

type UserNotLoggedIn = { message: string };

type UserLoggedIn = { email?: string };

export type UserState = UserNotLoggedIn & UserLoggedIn;

export type PageState = {
  status: "frontPage" | "studying" | "done";
  currentWordIndex: number;
  resultsSaved: boolean;
  guess: {
    [key: string]: boolean;
  };
  passiveSelected: boolean;
  pluralSelected: boolean;
  revealAnswer: boolean;
};

export type AppState = {
  page: PageState;
  user: UserState;
  word: Word | null;
  words: Word[];
};
