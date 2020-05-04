// eslint-disable-next-line no-unused-vars
import { Word } from './word';

export type AppState = {
  pluralSelected: boolean;
  guess: {
    [key: string]: boolean;
  };
  revealAnswer: boolean;
  passiveSelected: boolean;
  word: Word | null;
  words: Word[]
};
