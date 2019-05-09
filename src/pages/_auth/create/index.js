// Library Imports
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

// Relative Imports
import { Container } from "./styles";
import Auth from "../../../components/auth";
import Description from "../../../components/inputs/description";

class Create extends Component {
  state = {
    step: 1
  };

  doThis = () => {
    setTimeout(() => {
      alert("Alligator!!!!");
    }, 1000);
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
          width={`step%`}
          nextStep={() => this.setState({ step: step + 1 })}
          prevStep={() => this.setState({ step: step - 1 })}
          information="Before generating a new seed phrase please ensure you’re not on a public or unsecured wifi connection and have a pen and pad or password manager ready."
        >
          {(step === 1 && <div>Step 1</div>) ||
            (step === 2 && (
              <Description
                label={"Seed Phrase"}
                value="whip cactus theme clever relief category crucial decorate ghost veteran owner exile essay turkey spawn transfer potato island add forward script donor marriage choose"
                placeholder="Enter your 24 word seed phrase"
              />
            )) ||
            (step === 3 && (
              <Description
                label={"Seed Phrase"}
                value=""
                placeholder="Confirm your 24 word seed phrase"
              />
            )) ||
            (step === 4 && <Redirect to="/wallet/assets" />)}
        </Auth>
      </Container>
    );
  }
}

export default Create;
