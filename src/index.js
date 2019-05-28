// Library Imports
import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
// import * as serviceWorker from "./serviceWorker";
// Relative Imports
import App from "./App.js";

// Redux Setup
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";
import interRegular from "./assets/fonts/Inter-Regular.ttf";
import semiBold from "./assets/fonts/Inter-SemiBold.ttf";
import interBold from "./assets/fonts/Inter-Bold.ttf";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-family: 'Inter-Regular', 'Inter-Bold', serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: 'zero' 1

    @font-face {
     font-family: 'Inter-Regular';
     src: url(${interRegular});
  }

    @font-face {
     font-family: 'Inter-SemiBold';
     src: url(${semiBold});
  }

    @font-face {
     font-family: 'Inter-Bold';
     src: url(${interBold});
  }

  }`;

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.querySelector("#root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
