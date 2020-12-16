import { NounProperties } from "../../types";
import { singular, plural } from "../../grammar";

function setGenitive(properties: NounProperties): string {
  const { correctGenitive, number, declension } = properties;

  return correctGenitive || { singular, plural }[number][declension];
}

export { setGenitive };
