// Library Imports
import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

// Relative Imports
import App from "./App.js";

// Redux Setup
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }`;

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.querySelector("#root")
);
