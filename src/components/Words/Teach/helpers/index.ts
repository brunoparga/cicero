import { Adjective } from './adjective';
import { Etcetera } from './etcetera';
import { Noun } from './noun';
import { Verb } from './verb';

export const functionSelector = {
  Noun,
  Adjective,
  Etcetera,
  // This does nothing, since no Translation words can get here. But the type system requires it.
  Translation: () => ['', '', ''],
  Verb,
};
