// Library Imports
import React, { Component } from "react";
import history from "../../../history.js";

// Relative Imports
import Auth from "../../../components/auth";
import Description from "../../../components/inputs/description";
import Placeholder from "../../../components/_create/placeholder";
import CreateSeed from "../../../components/_create/create_seed";
import VerifySeed from "../../../components/_create/verify_seed";
import { Container } from "./styles";
import { Information } from "../../../constants/type.js";

const seed = [
  "whip",
  "cactus",
  "theme",
  "clever",
  "relief",
  "category",
  "crucial",
  "decorate",
  "ghost",
  "veteran",
  "owner",
  "exile",
  "essay",
  "turkey",
  "spawn",
  "transfer",
  "potato",
  "island",
  "add",
  "forward",
  "script",
  "donor",
  "marriage",
  "choose"
];

class Create extends Component {
  state = {
    step: 1,
    error: "",
    verify_seed: "",
    seedPhrase:
      "whip cactus theme clever relief category crucial decorate ghost veteran owner exile essay turkey spawn transfer potato island add forward script donor marriage choose"
  };

  nextStep = () => {
    const { step, seedPhrase, verify_seed } = this.state;
    const valid = seedPhrase === verify_seed;

    if (step < 3) {
      this.setState({
        step: step + 1
      });
    } else if (step === 3 && !valid) {
      this.setState({
        error: "Sorry, seed is invalid"
      });
    } else if (step === 3 && !valid) {
      history.push("/wallet/assets");
    } else {
      return null;
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
            onChange={this.handleChange}
            error={error}
          />
        );
      default:
    }
  };

  render() {
    const { step } = this.state;

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
