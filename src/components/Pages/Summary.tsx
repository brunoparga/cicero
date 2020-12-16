import React from "react";

import { actions, store } from "../../store";
import { Word } from "../../types";
import "./Summary.css";

// eslint-disable-next-line func-style
export const Summary: React.FunctionComponent = () => {
  const {
    state: {
      words,
      page: { resultsSaved },
    },
    dispatch,
  } = React.useContext(store);

  function formatWord(word: Word): React.ReactNode {
    return (
      <li key={word.lemma} className="left">
        <strong>{word.lemma}</strong>
        {": "}
        <em>{word.english}</em>
        {" - "}
        {word.questionType}
      </li>
    );
  }

  function clickHandler() {
    return dispatch({ ...actions.SET_STATUS, payload: "frontPage" });
  }

  return (
    <div className="answer-container">
      <div>
        <h4>Study session finished. Well done!</h4>
        <p>Here are the words you studied:</p>
        <ol>{words.map(formatWord)}</ol>
      </div>
      <button
        type="button"
        className={`next white btn ${!resultsSaved && !words && "gray"}`}
        onClick={clickHandler}
        disabled={!resultsSaved && !words}
      >
        <span className="big">&gt;</span>
        <br />
        Done
      </button>
    </div>
  );
};
