// Library Imports
import React from "react";

// Relative Imports
import { Container, Haven, Logo, Brand, Button } from "./styles.js";
import Icon from "../../assets/haven.svg";

const Navigation = props => {
  const { auth } = props;

  return (
    <Container>
      <Brand to="/">
        <Logo src={Icon} />
        <Haven>HAVEN</Haven>
      </Brand>

      {auth ? (
        <Button to="/">Logout</Button>
      ) : (
        <Button to="/wallet/login">Login</Button>
      )}
    </Container>
  );
};

export default Navigation;
