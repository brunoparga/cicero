import { Adjective } from './adjective';
import { Noun } from './noun';

const placeholderFunction = () => ['foo', 'bar', 'baz'];
export const functionSelector = {
  Noun,
  Adjective,
  Etcetera: placeholderFunction,
  Translation: placeholderFunction,
  Verb: placeholderFunction,
};
