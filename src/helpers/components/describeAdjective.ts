import { Word } from "../../types";

function describeAdjective(word: Word): string {
  const {
    lemma,
    properties: {
      feminine,
      neuter,
      masculineGenitive,
      genitive,
      suffixes,
      indeclinable,
    },
  } = word;

  if (indeclinable) {
    return "Indeclinable adjective";
  }

  switch (suffixes) {
    case "1st/2nd (-us)":
    case "1st/2nd (-er)":
      return `Adjective: masculine ${lemma}, ${masculineGenitive} / feminine ${feminine} / neuter ${neuter}`;
    case "3rd (-er/-ris/-re)":
      return `Adjective: masculine ${lemma} / feminine ${feminine} / neuter ${neuter}, genitive ${genitive}`;
    case "3rd (-is/-e)":
      return `Adjective: masculine, feminine ${lemma} / neuter ${neuter}, genitive ${genitive}`;

    default:
      return `Adjective: ${lemma}, ${genitive}`;
  }
}

export { describeAdjective };
