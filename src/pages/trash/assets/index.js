// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container, Cards, Overview } from "./styles";
import Menu from "../../components/menu";
import Body from "../../components/body";
import Header from "../../components/_layout/header/index.js";

import Card from "../../components/card/index.js";
import data from "../../constants/data.js";

class Assets extends Component {
  state = {
    token: data
  };

  renderTokens = () => {
    const { token } = this.state;
    return token.map(data => {
      const { token, ticker, price, change } = data;
      return (
        <Card
          key={token}
          tokenName={token}
          ticker={ticker}
          price={price}
          change={change}
        />
      );
    });
  };

  render() {
    return (
      <Container>
        <Menu />
        <Body>
          <Cards>
            <Overview>
              <h1>$183,382.38</h1>
            </Overview>
            {this.renderTokens()}
          </Cards>
        </Body>
      </Container>
    );
  }
}

export default Assets;
