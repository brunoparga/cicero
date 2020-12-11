import { Word } from "../../../types";

export const Indeclinable = ({
  lemma,
  english,
}: Word): [string, string, string] => [lemma, "Indeclinable word", english];
