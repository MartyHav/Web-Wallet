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

const seed =
  "whip cactus theme clever relief category crucial decorate ghost veteran owner exile essay turkey spawn transfer potato island add forward script donor marriage choose";

class Login extends Component {
  state = {
    auth: "",
    loading: false,
    seed_phrase: "",
    error: ""
  };

  componentDidMount() {
    // Comes form Redux
    const { auth } = this.props;
    this.setState({
      auth: auth
    });
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleLogin = () => {
    // Deconstruct state
    const { seed_phrase, auth } = this.state;
    // Simply the validation
    const valid = seed_phrase === seed;

    // If invalid set an error state for 2 seconds
    if (valid === false) {
      this.setState({ error: "Sorry, wrong seed. " });
      setTimeout(() => {
        this.setState({ error: "" });
      }, 2000);
    } else if (valid === true) {
      // If valid then set the state to loading and auth to true
      console.log("is valid", valid);
      this.setState({
        loading: true,
        auth: true
      });

      // After 2.5s redirect the user. This is to simulate aysnc request
      setTimeout(() => {
        this.state.auth && history.push("/wallet/assets");
        // Also push true into Redux for App.js to use
        this.props.authUser(true);
      }, 2500);
    }
  };

  render() {
    const { seed_phrase, error, loading } = this.state;

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
          loading={loading}
          information="Before entering your seed phrase please ensure you’re not on a public
        or unsecured wifi connection."
          submit="Submit"
        >
          <Description
            label="Seed Phrase"
            placeholder="Enter your 24 word seed phrase..."
            name="seed_phrase"
            value={seed_phrase}
            error={error}
            onChange={this.handleChange}
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
  mapStateToProps,
  { authUser }
)(Login);
