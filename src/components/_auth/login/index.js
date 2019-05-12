// Library Imports
import React from "react";

// Relative Imports
import { Title, Description, Information } from "../../../constants/type.js";
import {
  Container,
  Main,
  Header,
  Buttons,
  Submit,
  Footer,
  Cancel,
  Body,
  Route,
  Label,
  Progress,
  Step,
  Back
} from "./styles";

const Auth = ({
  title,
  description,
  route,
  link,
  label,
  information,
  submit,
  cancel,
  step,
  width,
  nextStep,
  prevStep,
  children,
  loading
}) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Header>
      <Main>
        <Body>{children}</Body>
        <Buttons>
          <Submit onClick={nextStep}>Login</Submit>
        </Buttons>
      </Main>
      <Footer>
        <Label>{label}</Label>
        <Route to={link}>{route}</Route>
      </Footer>
    </Container>
  );
};

export default Auth;
