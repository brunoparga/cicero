import { Word } from "../../types";
import { describeVerb, setGenitive } from "..";

function setHeader(word: Word): string {
  const { properties } = word;

  if ("declension" in properties) {
    return `Noun: ${word.lemma}, ${setGenitive(properties)}`;
  }

  if ("conjugation" in properties) {
    return describeVerb({ ...word, properties });
  }

  if ("suffixes" in properties) {
    return `Adjective: ${word.lemma}, ${
      properties.masculineGenitive || properties.genitive
    }`;
  }

  return "";
}

function describeWord(word: Word): string {
  return setHeader(word) || `Indeclinable: ${word.lemma}`;
}

export { describeWord };
