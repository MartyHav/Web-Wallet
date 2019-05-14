// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container, Haven, Logo, Brand, Button } from "./styles.js";
import Icon from "../../assets/haven.svg";

class Navigation extends Component {
  render() {
    return (
      <Container>
        <Brand to="/">
          <Logo src={Icon} />
          <Haven>HAVEN</Haven>
        </Brand>
        <Button to="/wallet/login">Login</Button>
      </Container>
    );
  }
}

export default Navigation;
