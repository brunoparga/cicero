import { NounProperties } from '../../types';
import { setGenitive } from './setGenitive';

it('correctly sets a regular genitive', () => {
  const properties = { number: 'singular', declension: 2 } as NounProperties;
  expect(setGenitive(properties)).toEqual('-is');
});

it('correctly sets an unpredictable genitive', () => {
  const properties = {
    correctGenitive: 'facis',
    number: 'singular',
    declension: 2,
  } as NounProperties;
  expect(setGenitive(properties)).toEqual('facis');
});
