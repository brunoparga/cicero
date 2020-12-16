import { shuffle } from "./private/shuffle";

function setWordOptions(options: string[], lemma: string): string[] {
  if (options.includes(lemma)) {
    return options;
  }

  return shuffle(options.concat([lemma]));
}

export { setWordOptions };
