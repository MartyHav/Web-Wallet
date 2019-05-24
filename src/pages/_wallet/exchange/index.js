// Library Imports
import React, { Component } from "react";
import history from "../../../history.js";

// Relative Imports
import Page from "../../../components/_layout/page";
import Body from "../../../components/_layout/body";
import Menu from "../../../components/_layout/menu";
import Header from "../../../components/_layout/header";
import Status from "../../../components/_layout/status/";
import Input from "../../../components/inputs/input";
import Form from "../../../components/inputs/form";
import Footer from "../../../components/inputs/footer";
import Dropdown from "../../../components/inputs/dropdown";

import { Container } from "./styles";

const options = [
  { asset: "Haven Token", ticker: "XHV" },
  { asset: "United States Dollar", ticker: "xUSD" },
  { asset: "Australian Dollar", ticker: "xAUD" }
];

class Exchange extends Component {
  state = {
    status: false,
    send_asset: "Select Asset",
    send_amount: "",
    send_ticker: "",
    receive_asset: "Select Asset",
    receive_amount: "",
    receive_ticker: "",
    time: 7
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });

    /*
    const sendAmount =
    const sendRate =
    const recieveAmount =
    const recieveRate =

    if (sending) {
    const exchangeAmount - sendAmount * recieveRate
    this.setState({
      sendAmount: sendAmount,
      exchangeAmount: exchangeAmount
    });
  } else if (receiving)
    const exchangeAmount = recieveAmount / sendRate
    this.setState({
      sendAmount: sendAmount,
      exchangeAmount: exchangeAmount
    });
  };
  */
  };

  setSendAsset = ({ asset, ticker }) => {
    // Call back function from Dropdown
    this.setState({
      send_asset: asset,
      send_ticker: ticker
    });
  };

  setReceiveAsset = ({ asset, ticker }) => {
    // Call back function from Dropdown
    this.setState({
      receive_asset: asset,
      receive_ticker: ticker
    });
  };

  handleSubmit = () => {
    const { send_ticker } = this.state;
    setTimeout(() => this.setState({ status: true, loading: true }), 500);
    setInterval(() => this.setState({ time: this.state.time - 1 }), 1000);
    setTimeout(() => history.push(`/wallet/assets/${send_ticker}`), 7000);
  };

  render() {
    const {
      status,
      send_asset,
      send_amount,
      send_ticker,
      receive_asset,
      receive_ticker
    } = this.state;

    const xhv = 0.45;
    const to = send_amount * xhv;

    return (
      <Page>
        <Menu />
        <Body>
          <Header title="Exchange " description="Lorem impsum" />
          <Form onSubmit={this.handleSubmit}>
            <Dropdown
              label="From Asset"
              placeholder="Select Asset"
              name="send_asset"
              ticker={send_ticker}
              value={send_asset}
              options={options}
              onClick={this.setSendAsset}
            />
            <Input
              label="Send Amount"
              placeholder="Enter amount"
              type="number"
              name="send_amount"
              value={send_amount}
              onChange={this.handleChange}
            />
            <Dropdown
              label="Receive Asset"
              placeholder="Select Asset"
              name="receive_asset"
              value={receive_asset}
              ticker={receive_ticker}
              options={options}
              onClick={this.setReceiveAsset}
            />
            <Input
              label="Receeve Amount"
              placeholder="Enter amount"
              name="receive_amount"
              type="number"
              value={to.toFixed(4)}
              onChange={this.handleChange}
            />
          </Form>
          <Container>
            <Footer
              onClick={this.handleSubmit}
              label="Exchange"
              validated={true}
            />
          </Container>
        </Body>
        {status && (
          <Status>
            <span role="img" aria-label="Money">
              💸
            </span>
            Congrats, your exchange was submitted. Redirecting you in{" "}
            {this.state.time}'s
          </Status>
        )}
      </Page>
    );
  }
}

export default Exchange;
