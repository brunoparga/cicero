import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { App } from "./components/App";
import { unregister } from "./serviceWorker";
import { StateProvider } from "./store";

ReactDOM.render(
  <React.StrictMode>
    {/* This app uses a no-Redux approach to state management, with Context
    and Hooks */}
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.querySelector("#root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();
