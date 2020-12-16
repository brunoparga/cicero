import React from "react";

import { store } from "../store";

import { Topbar } from "./shared";
import { drill, FrontPage, Summary, Teach } from "./Pages";
import "./App.css";

// Either show a loading screen or the loaded app.
// eslint-disable-next-line func-style
export const App: React.FunctionComponent = () => {
  const {
    state: {
      word,
      page: { status },
    },
  } = React.useContext(store);

  let component;

  if (status === "studying" && !word) {
    component = <h1>Onerans (loading)...</h1>;
  } else if (status === "studying" && word?.learned) {
    component = drill(word?.questionType);
  } else if (status === "studying") {
    component = <Teach />;
  } else if (status === "done") {
    component = <Summary />;
  } else {
    component = <FrontPage />;
  }

  return (
    <>
      <Topbar />
      <div className="App">{component}</div>
    </>
  );
};
