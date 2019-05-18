// Library Imports
import React, { Component } from "react";
import { Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import history from "./history.js";

// Relative Imports
import Navigation from "./components/navigation";
import PrivateRoutes from "./routes/private/index.js";
import PublicRoutes from "./routes/public/index.js";

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
    auth: false,
    theme: theme.dark
  };

  componentDidMount() {
    this.setState({
      auth: this.props.auth
    });
  }

  switchTheme = theme => {
    this.setState({
      theme: theme
    });
  };

  render() {
    const { theme } = this.state;
    const { auth } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Navigation />
          <PublicRoutes />
          {!auth && history.push("/")}
          <PrivateRoutes />
        </Router>
      </ThemeProvider>
    );
  }
}

export const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(App);
