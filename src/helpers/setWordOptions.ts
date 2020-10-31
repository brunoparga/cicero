import { shuffle } from '.';

export const setWordOptions = (options: string[], lemma: string): string[] => {
  if (options.includes(lemma)) {
    return options;
  }
  return shuffle(options.concat([lemma]));
};
