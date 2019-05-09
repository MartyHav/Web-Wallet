// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container } from "./styles";

class Body extends Component {
  render() {
    return <Container>{this.props.children}</Container>;
  }
}

export default Body;
