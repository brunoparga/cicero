import { Word } from "../../types";
import { describeVerb, setGenitive } from "..";

function describeWord(word: Word): string {
  const { lemma, properties } = word;

  let header = `Indeclinable: ${lemma}`;

  // Words get here stripped of their parts of speech, as that gets replaced
  // by questionType: Translation. So, we need other ways of determining
  // their part of speech. Simply testing for properties[someRelevantWordProp]
  // does not work, as the properties in question, being TypeScript Enums, can
  // have falsy values (declension/conjugation: 0, deponent: false).
  //
  // One way around this would be to call
  // properties.hasOwnProperty(someRelevantWordProp), but ESLint alerts
  // against using this method directly on an object. Calling it the way this
  // function implements is the recommended solution.
  //
  // It is also worth noting that 'properties' refers to traits a word might
  // have, while Property and prop refer to JS internals. So basically this is
  // testing if the key-value pair set called "properties" contains the key
  // called "prop".
  function hasProperty(property: string): boolean {
    return Object.prototype.hasOwnProperty.call(properties, property);
  }

  // Skip the whole check if the word doesn't even have properties, i.e. is
  // indeclinable
  if (properties) {
    if (hasProperty("declension")) {
      header = `Noun: ${lemma}, ${setGenitive(properties)}`;
    } else if (hasProperty("conjugation")) {
      header = describeVerb(word);
    } else if (hasProperty("suffixes")) {
      const genitive = properties.masculineGenitive || properties.genitive;

      header = `Adjective: ${lemma}, ${genitive}`;
    }
  }

  return header;
}

export { describeWord };
