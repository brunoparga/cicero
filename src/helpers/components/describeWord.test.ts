import { Word } from '../../types';
import { describeWord } from './describeWord';

it('describes indeclinable words', () => {
  const word = { lemma: 'atque' } as Word;
  expect(describeWord(word)).toBe('Indeclinable: atque');
});

it('describes nouns', () => {
  const word = { lemma: 'Caesar', properties: { number: 'singular', declension: 2 } } as Word;
  expect(describeWord(word)).toBe('Noun: Caesar, -is');
});

it('describes verbs', () => {
  const word = {
    lemma: 'edō',
    properties: {
      conjugation: 2,
      correctInfinitive: '-ere (or ēsse)',
      perfect: 'ēdī',
      supine: 'ēsum',
      deponent: false,
    },
  } as Word;
  expect(describeWord(word)).toBe('Verb: edō, -ere (or ēsse), ēdī, ēsum');
});

it('describes Type I adjectives', () => {
  const word = {
    lemma: 'āter',
    properties: {
      masculineGenitive: '-trī',
      suffixes: '1st/2nd (-er)',
    },
  } as Word;
  expect(describeWord(word)).toBe('Adjective: āter, -trī');
});

it('describes Type II adjectives', () => {
  const word = {
    lemma: 'vēlōx',
    properties: {
      genitive: '-ōcis',
      suffixes: '3rd (all equal)',
    },
  } as Word;
  expect(describeWord(word)).toBe('Adjective: vēlōx, -ōcis');
});
