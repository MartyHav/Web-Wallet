// Library Imports
import React, { Component } from "react";
import history from "../../../history.js";

// Relative Imports
import Auth from "../../../components/_auth/create/index.js";
import Placeholder from "../../../components/_create/placeholder";
import CreateSeed from "../../../components/_create/create_seed";
import VerifySeed from "../../../components/_create/verify_seed";
import { Container } from "./styles";

const seed =
  "whip cactus theme clever relief category crucial decorate ghost veteran owner exile essay turkey spawn transfer potato island add forward script donor marriage choose";

class Create extends Component {
  state = {
    step: 1,
    error: "",
    verify_seed: "",
    seedPhrase: ""
  };

  componentDidMount() {
    // When component loads go fetch the Seed Phrase. Then setState with the response
    // Doing it here makes it seem faster to the user as it's preloaded
    this.setState({
      seedPhrase: seed
    });
  }

  nextStep = () => {
    const { step, seedPhrase, verify_seed } = this.state;
    const valid = seedPhrase === verify_seed;
    const stepThree = step === 3;

    if (step < 3) {
      this.setState({ step: step + 1 });
    } else if (stepThree && !valid) {
      this.setState({ error: "Seed Phrase is incorrect" });
      setTimeout(() => {
        this.setState({ error: "" });
      }, 2000);
    } else if (stepThree && valid) {
      this.setState({
        loading: true
      });
      setTimeout(() => {
        history.push("/wallet/assets");
      }, 2500);
    } else {
      return this.setState({ step: step + 1 });
    }
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleSwitch = () => {
    const { step, seedPhrase, verify_seed, error } = this.state;

    switch (step) {
      case 1:
        return <Placeholder />;
      case 2:
        return <CreateSeed value={seedPhrase} readOnly={true} />;
      case 3:
        return (
          <VerifySeed
            label="Verify Seed Phrase"
            name="verify_seed"
            value={verify_seed}
            error={error}
            onChange={this.handleChange}
            loading={this.state.loading}
          />
        );
      default:
    }
  };

  render() {
    const { step, loading } = this.state;

    return (
      <Container>
        <Auth
          title="Create a Vault"
          description="To create a new vault please generate a new seed phrase."
          step={step}
          link="/wallet/login"
          route="Sign In!"
          label="Have a Vault already?"
          submit="Generate"
          loading={loading}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
        >
          <div>{this.handleSwitch()}</div>
        </Auth>
      </Container>
    );
  }
}

export default Create;
