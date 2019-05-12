// Library Imports
import React, { Component } from "react";
import history from "../../../history.js";
import { connect } from "react-redux";
import { authUser } from "../../../actions/index.js";

// Relative Imports
import { Container } from "./styles";
import Auth from "../../../components/_auth/login";
import Description from "../../../components/inputs/description";
import { Information } from "../../../constants/type.js";

class Login extends Component {
  state = {
    auth: "",
    loading: false
  };

  componentDidMount() {
    this.setState({
      auth: this.props.auth
    });
  }

  handleLogin = () => {
    this.setState({
      auth: true,
      loading: true
    });

    setTimeout(() => {
      this.state.auth
        ? history.push("/wallet/assets")
        : history.push("/wallet/login");
    }, 2500);
  };

  render() {
    return (
      <Container>
        <Auth
          title="Vault Login"
          description="To access your vault please enter your seed phrase"
          link="/wallet/create"
          route="Create a Vault"
          label="Don’t have a Vault?"
          disable={this.state.loading}
          onClick={this.handleLogin}
          loading={this.state.loading}
          information="Before entering your seed phrase please ensure you’re not on a public
        or unsecured wifi connection."
          submit="Submit"
        >
          <Description
            label="Seed Phrase"
            placeholder="Enter your 24 word seed phrase..."
          />
          <Information>
            Before entering your Seed Phrase please ensure you're not on a
            public wifi and no one is looking at your screen.
          </Information>
        </Auth>
      </Container>
    );
  }
}

export const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  null,
  mapStateToProps
)(Login);
