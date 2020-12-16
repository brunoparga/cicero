import { Word } from "../../../types";
import { describeAdjective } from "../../../helpers";

function Adjective(word: Word): [string, string, string] {
  const adjectiveDescription = describeAdjective(word);

  return [word.lemma, adjectiveDescription, word.english];
}

export { Adjective };
