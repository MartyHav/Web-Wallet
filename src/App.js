// Library Imports
import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import history from "./history.js";

// Relative Imports
import Navigation from "./components/navigation";
import Assets from "./pages/_wallet/assets";
import Exchange from "./pages/_wallet/exchange";
import Transfer from "./pages/_wallet/transfer";
import Settings from "./pages/_wallet/settings";
import Details from "./pages/_wallet/details";

import Create from "./pages/_auth/create";
import Login from "./pages/_auth/login";

import Welcome from "./pages/_public/welcome";
import Faq from "./pages/_public/faq";

const theme = {
  dark: {
    body_navigation: "#26282C",
    body_background: "#36393F",
    body_foreground: "#2B2E32",
    type_primary: "#8A8D90",
    type_secondary: "#fffff"
  },
  light: {
    navigation: "#fafafa",
    body_navigation: "#fff",
    background: "#cccccc",
    foreground: "#ddddd"
  }
};

class App extends Component {
  state = {
    auth: true,
    theme: theme.dark
  };

  render() {
    const { auth, theme } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <div>
            <Navigation auth={auth} />
            <Route path="/" exact component={Welcome} />
            <Route path="/faq" exact component={Faq} />
            <Route path="/wallet/create" exact component={Create} />
            <Route path="/wallet/login" exact component={Login} />
            <Route path="/wallet/assets" exact component={Assets} />
            <Route path="/wallet/assets/:id" exact component={Details} />
            <Route path="/wallet/exchange" exact component={Exchange} />
            <Route path="/wallet/transfer" exact component={Transfer} />
            <Route path="/wallet/history" exact component={History} />
            <Route path="/wallet/settings" exact component={Settings} />
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export const mapStateToProps = state => ({
  theme: state.theme
});

export default connect(mapStateToProps)(App);
