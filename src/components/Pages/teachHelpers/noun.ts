import { NounProperties, Word } from "../../../types";
import { setGenitive } from "../../../helpers";

function Noun(
  word: Word & { properties: NounProperties }
): [string, string, string] {
  const { lemma, english, properties } = word;
  const header = `${lemma}, ${setGenitive(properties)}`;
  const description = `${properties.gender} ${properties.number} noun`;

  return [header, description, english];
}

export { Noun };
