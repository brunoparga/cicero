// eslint-disable-next-line no-unused-vars
import { Word } from './word';

type BaseAppState = {
  pluralSelected: boolean;
  guess: {
    [key: string]: boolean;
  };
  revealAnswer: boolean;
  passiveSelected: boolean;
};

export type AppState = {
  word: Word | null;
  words: Word[]
} & BaseAppState;
