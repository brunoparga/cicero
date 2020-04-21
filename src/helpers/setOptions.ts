import shuffle from './shuffle';

export default (options: string[], lemma: string): string[] => {
  if (options.includes(lemma)) {
    return options;
  }
  return shuffle(options.concat([lemma]));
};
