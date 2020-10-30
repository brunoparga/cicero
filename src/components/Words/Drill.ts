import React from 'react';

import { QuestionType } from '../../types';
import { Adjective } from './Adjective';
import { Indeclinable } from './Indeclinable';
import { Noun } from './Noun';
import { Translation } from './Translation';
import { Verb } from './Verb';

// eslint-disable-next-line no-unused-vars
type DrillElement = (drillProps: QuestionType) => React.ReactElement

// Select the correct element to display based on question type
export const Drill: DrillElement = (questionType) => {
  const elements = {
    Adjective, Indeclinable, Noun, Translation, Verb,
  };
  return React.createElement(elements[questionType]);

  // The way above seems clear and simple. Its only disadvantage is that the elements object needs
  // to grow for every new question type and I'd like to avoid that.

  // The code below shall be left up as a testament to my failure. I have no idea why it causes a
  // memory leak (something to do with the effect).

  // const basic: React.FunctionComponent = () => <span />;
  // const [element, setElement] = React.useState<React.FunctionComponent>(basic);

  // React.useEffect(() => {
  //   const setElt = async () => {
  //     const elt = await import(`./${questionType}`);
  //     setElement(elt[questionType]);
  //   };
  //   setElt();
  // }, [questionType, element]);

  // return React.createElement(element);
};