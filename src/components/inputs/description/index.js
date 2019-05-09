// Library Imports
import React from "react";

// Relative Imports
import { Container, Field, Labels } from "./styles";
import { Label, Error } from "../../../constants/type.js";

const Description = ({ placeholder, label, error, value }) => {
  return (
    <Container>
      <Labels>
        <Label>{label}</Label>
        <Error>{error}</Error>
      </Labels>
      <Field placeholder={placeholder} value={value} />
    </Container>
  );
};

export default Description;
