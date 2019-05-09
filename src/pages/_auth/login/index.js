// Library Imports
import React from "react";
import history from "../../../history.js";

// Relative Imports
import { Container } from "./styles";
import Auth from "../../../components/auth";
import Description from "../../../components/inputs/description";

const Login = () => {
  return (
    <Container>
      <Auth
        title="Vault Login"
        description="To access your vault please enter your seed phrase or private key"
        link="/wallet/create"
        route="Create a Vault"
        label="Don’t have a Vault?"
        onClick={() => {
          history.push("/wallet/assets");
        }}
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
};

export default Login;
