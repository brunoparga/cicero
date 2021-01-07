import { Word } from "..";

type UserNotLoggedIn = { message: string };

type UserLoggedIn = { email?: string };

type UserState = UserNotLoggedIn & UserLoggedIn;

type PageState = {
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

type AppState = {
  page: PageState;
  user: UserState;
  word: Word;
  words: Word[];
};

export type { AppState, PageState, UserState };
