// Library Imports
import React from "react";

// Relative Imports
import { Container, Amount } from "./styles";

const Overview = ({ amount }) => {
  return (
    <Container>
      <Amount>{amount}</Amount>
    </Container>
  );
};

export default Overview;
