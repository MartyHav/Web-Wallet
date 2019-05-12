// Library Imports
import React, { Component } from "react";
import history from "../../../history.js";
import { connect } from "react-redux";

// Relative Imports
import { Container } from "./styles";
import Auth from "../../../components/_auth/login";
import Description from "../../../components/inputs/description";

class Login extends Component {
  state = {
    auth: ""
  };

  handleLogin = () => {
    history.push("/wallet/assets");
  };

  render() {
    return (
      <Container>
        <Auth
          title="Vault Login"
          description="To access your vault please enter your seed phrase or private key"
          link="/wallet/create"
          route="Create a Vault"
          label="Don’t have a Vault?"
          onClick={this.handleLogin}
          information="Before entering your seed phrase please ensure you’re not on a public
        or unsecured wifi connection."
          submit="Submit"
        >
          <Description
            label="Seed Phrase"
            placeholder="Enter your 24 word seed phrase..."
          />
        </Auth>
      </Container>
    );
  }
}

export const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Login);
