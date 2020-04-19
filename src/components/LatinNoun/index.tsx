import React from 'react';

import { store } from '../../store';
import WordButtons from './WordButtons';
import GenitiveButtons from './GenitiveButtons';
import GenderButtons from './GenderButtons';

export default () => {
  const {
    state: {
      word: {
        english, lemma, declension, gender, number,
      }, revealAnswer,
    },
  } = React.useContext(store);
  const question = (
    <>
      <WordButtons />
      <GenitiveButtons />
      <GenderButtons />
    </>
  );
  if (!revealAnswer) {
    return (
      <>
        <h1>{english}</h1>
        {question}
      </>
    );
  }
  const ordinals = ['1st', '2nd', '3rd', '4th', '5th'];
  const plural = number === 'plural' ? ' plural' : '';
  return (
    <>
      <h1>{english}</h1>
      <span>{`${lemma}, ${ordinals[declension]} declension, ${gender}${plural}`}</span>
    </>
  );
};
