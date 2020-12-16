import { Word } from "../../../types";

function Indeclinable({ lemma, english }: Word): [string, string, string] {
  return [lemma, "Indeclinable word", english];
}

export { Indeclinable };
