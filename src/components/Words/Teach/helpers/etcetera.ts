import { Word } from '../../../../types';

export const Etcetera = (
  { lemma, english }: Word,
): [string, string, string] => [lemma, 'Indeclinable word', english];
