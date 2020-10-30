import { Adjective } from './adjective';
import { Etcetera } from './etcetera';
import { Noun } from './noun';

const placeholderFunction = () => ['foo', 'bar', 'baz'];
export const functionSelector = {
  Noun,
  Adjective,
  Etcetera,
  Translation: placeholderFunction,
  Verb: placeholderFunction,
};
