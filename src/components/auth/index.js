// Library Imports
import React from "react";

// Relative Imports
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
import { Title, Description, Information } from "../../constants/type.js";

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
  children
}) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Header>
      <Main>
        <Body>
          <Progress>
            <Step width={step} />
          </Progress>
          {children}
        </Body>
        <Buttons>
          {step === 1 ? (
            <Cancel to="/">Cancel</Cancel>
          ) : (
            <Back onClick={prevStep}>Back</Back>
          )}
          <Submit onClick={nextStep}>
            {(step === 1 && "Next") ||
              (step === 2 && "Verify") ||
              (step === 3 && "Confirm") ||
              (step === 4 && "Signing In")}
          </Submit>
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
