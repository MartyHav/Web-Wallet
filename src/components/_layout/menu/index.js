// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container, Balance, Item } from "./styles";

class Menu extends Component {
  render() {
    return (
      <Container>
        <Balance>$1,234.56</Balance>
        <Item to="/wallet/assets">Assets</Item>
        <Item to="/wallet/exchange">Exchange</Item>
        <Item to="/wallet/transfer">Transfer</Item>
        <Item to="/wallet/settings">Settings</Item>
      </Container>
    );
  }
}

export default Menu;
