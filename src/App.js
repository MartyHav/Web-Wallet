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

class App extends Component {
  state = {
    auth: true,
    theme: {}
  };

  componentDidMount() {
    this.setState({
      auth: this.props.auth
    });
  }

  render() {
    const { auth } = this.props;
    return (
      <ThemeProvider theme={this.props.theme}>
        <Router history={history}>
          <Navigation />
          <PublicRoutes />
          {!auth && history.push("/wallet/settings")}
          <PrivateRoutes />
        </Router>
      </ThemeProvider>
    );
  }
}

export const mapStateToProps = state => ({
  auth: state.auth,
  theme: state.theme
});

export default connect(mapStateToProps)(App);
