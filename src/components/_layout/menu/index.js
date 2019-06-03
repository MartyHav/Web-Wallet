// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container, Overview, Item, Value, Wrapper, Amount } from "./styles";

class Menu extends Component {
  render() {
    return (
      <Container>
        <Overview>
          <Wrapper>
            <Amount>$1,234.56</Amount>
            <Value>Total Balance (USD)</Value>
          </Wrapper>
        </Overview>

        <Item to="/wallet/assets">Assets</Item>
        <Item to="/wallet/exchange">Exchange</Item>
        <Item to="/wallet/transfer">Transfer</Item>
        <Item to="/wallet/settings">Settings</Item>
      </Container>
    );
  }
}

export default Menu;
