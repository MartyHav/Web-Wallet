// Library Imports
import React from "react";

// Relative Imports
import { Container, Item, Separator } from "./styles";

const Tab = ({
  onClick,
  firstLabel,
  secondLabel,
  first,
  second,
  firstClick,
  secondClick
}) => {
  return (
    <Container>
      <Item active={first} onClick={firstClick}>
        {firstLabel}
      </Item>
      <Separator />
      <Item active={second} onClick={secondClick}>
        {secondLabel}
      </Item>
    </Container>
  );
};

export default Tab;
