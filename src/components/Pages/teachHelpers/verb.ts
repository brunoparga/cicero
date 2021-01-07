import { VerbProperties, Word } from "../../../types";
import { describeVerb } from "../../../helpers";

function Verb(
  word: Word & { properties: VerbProperties }
): [string, string, string] {
  const verbDescription = describeVerb(word);

  return [word.lemma, verbDescription, word.english];
}

export { Verb };
