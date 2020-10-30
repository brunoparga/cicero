import { Adjective } from './adjective';
import { Indeclinable } from './indeclinable';
import { Noun } from './noun';
import { Verb } from './verb';

export const functionSelector = {
  Noun,
  Adjective,
  Indeclinable,
  // This does nothing, since no Translation words can get here. But the type system requires it.
  Translation: () => ['', '', ''],
  Verb,
};
