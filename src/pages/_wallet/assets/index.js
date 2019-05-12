// Library Imports
import React, { Component } from "react";

// Relative Imports
import Page from "../../../components/_layout/page";
import Body from "../../../components/_layout/body";
import Menu from "../../../components/_layout/menu";
import Header from "../../../components/_layout/header";
import Status from "../../../components/_layout/status/";
import Card from "../../../components/card";

import data from "../../../constants/data.js";

class Assets extends Component {
  state = {
    status: false,
    token: data
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleState = () => {
    this.setState(state => ({
      status: !state.status
    }));
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
    const { status } = this.state;
    console.log("CREATE", this.props);
    return (
      <Page>
        <Menu />
        <Body>
          <Header title="Assets" description="Lorem impsum" />
          {this.renderTokens()}
        </Body>
        {status ? <Status>Pending transaction</Status> : null}
      </Page>
    );
  }
}

export default Assets;
