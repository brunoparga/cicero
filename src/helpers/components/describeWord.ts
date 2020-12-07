import { Word } from '../../types';
import { describeVerb, setGenitive } from '..';

export const describeWord = (word: Word): string => {
  const { lemma, properties } = word;
  let header = `Indeclinable: ${lemma}`;
  // Skip the whole check if the word doesn't even have properties, i.e. is indeclinable
  if (properties) {
    // Words get here stripped of their parts of speech, as that gets replaced by
    // questionType: Translation. So, we need other ways of determining their part of speech. Simply
    // testing for properties[someRelevantWordProp] does not work, as the properties in question,
    // being TypeScript Enums, can have falsy values (declension/conjugation: 0, deponent: false).
    // One way around this would be to call properties.hasOwnProperty(someRelevantWordProp), but
    // ESLint alerts against using this method directly on an object. Calling it the way this
    // function implements is the recommended solution.
    //
    // It is also worth noting that 'properties' refers to traits a word might have, while Property
    // and prop refer to JS internals. So basically this is testing if the key-value pair set called
    // "properties" contains the key called "prop".
    const hasProp = (prop: string): boolean => Object.prototype
      .hasOwnProperty.call(properties, prop);
    if (hasProp('declension')) {
      header = `Noun: ${lemma}, ${setGenitive(properties)}`;
    } else if (hasProp('conjugation')) {
      header = describeVerb(word);
    } else if (hasProp('suffixes')) {
      const genitive = properties.masculineGenitive || properties.genitive;
      header = `Adjective: ${lemma}, ${genitive}`;
    }
  }
  return header;
};
