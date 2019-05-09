// Library Imports
import React from "react";

// Relative Imports
import { Container, Nav, Back, Row } from "./styles";
import { Title, Description } from "../../../constants/type.js";

const Header = ({ title, description, back }) => {
  return (
    <Container>
      <Row>
        {back ? (
          <Nav to="/wallet/assets">
            <Back>« Back</Back>
          </Nav>
        ) : null}
        <Title>{title}</Title>
      </Row>
      <Description>{description}</Description>
    </Container>
  );
};

export default Header;
