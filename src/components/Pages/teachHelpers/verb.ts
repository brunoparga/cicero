import { Word } from "../../../types";
import { describeVerb } from "../../../helpers";

export const Verb = (word: Word): [string, string, string] => {
  const verbDescription = describeVerb(word);

  return [word.lemma, verbDescription, word.english];
};
