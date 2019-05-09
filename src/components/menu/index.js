// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container, Item, MenuColumn, Balance } from "./styles";

class Menu extends Component {
  render() {
    return (
      <Container>
        <Balance>
          <h1>$183,382.38</h1>
        </Balance>
        <MenuColumn>
          <Item to="/wallet/assets">Assets</Item>
          <Item to="/wallet/exchange">Swap</Item>
          <Item to="/wallet/transfer">Transfer</Item>
          <Item to="/wallet/history">History</Item>
          <Item to="/wallet/settings">Settings</Item>
        </MenuColumn>
      </Container>
    );
  }
}

export default Menu;
