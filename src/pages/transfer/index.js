// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container, FormContainer, Information, Content } from "./styles";
import Menu from "../../components/menu";
import Body from "../../components/body";

import Tab from "../../components/tab";
import Input from "../../components/inputs/input/index.js";

class Transfer extends Component {
  state = {
    first: true,
    second: false,
    send_recipient: "",
    send_amount: "",
    send_asset: "XHV",
    receive_recipient: "",
    receive_amount: "",
    receive_asset: "XHV"
  };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  render() {
    const {
      send_asset,
      send_amount,
      send_recipient,
      receive_recipient,
      receive_amount,
      receive_asset
    } = this.state;
    return (
      <Container>
        <Menu />
        <Body>
          <Tab
            firstLabel="Send"
            secondLabel="Receive"
            first={this.state.first}
            second={this.state.second}
            firstClick={() => this.setState({ first: true, second: false })}
            secondClick={() => this.setState({ first: false, second: true })}
          />
          <Content>
            {this.state.first ? (
              <>
                <FormContainer>
                  <Input
                    name="send_asset"
                    label="Send Asset"
                    value={send_asset}
                    placeholder="Select from token"
                    onChange={this.handleChange}
                  />
                  <Input
                    name="send_amount"
                    type="number"
                    value={send_amount}
                    label="Send Amount"
                    placeholder={`Enter ${send_amount} amount`}
                    onChange={this.handleChange}
                  />
                  <Input
                    name="send_recipient"
                    value={send_recipient}
                    label="Send Recipient"
                    placeholder="Enter recipient address"
                    onChange={this.handleChange}
                  />
                </FormContainer>
                <Information>
                  You are going to send {send_amount} {send_asset} to{" "}
                  {send_recipient}. This transaction will cost 0.00055 XHV
                  ($0.0002 USD) and will take approximately 120 seconds. Before
                  sending please double check the amount and the address as this
                  transaction is irreversible once submitted.
                </Information>
              </>
            ) : (
              <>
                <FormContainer>
                  <Input
                    name="receive_asset"
                    label="Receive Asset"
                    value={receive_asset}
                    placeholder="Select from token"
                    onChange={this.handleChange}
                  />
                  <Input
                    name="receive_amount"
                    type="number"
                    value={receive_amount}
                    label="Recieve Amount"
                    placeholder={`Enter ${send_amount} amount`}
                    onChange={this.handleChange}
                  />
                  <Input
                    name="receive_recipient"
                    value={receive_recipient}
                    label="Receive Recipient"
                    placeholder="Enter recipient address"
                    onChange={this.handleChange}
                  />
                </FormContainer>
                <Information>
                  You are going to send {receive_amount} {receive_asset} to{" "}
                  {receive_recipient}. This transaction will cost 0.00055 XHV
                  ($0.0002 USD) and will take approximately 120 seconds. Before
                  sending please double check the amount and the address as this
                  transaction is irreversible once submitted.
                </Information>
              </>
            )}
          </Content>
        </Body>
      </Container>
    );
  }
}

export default Transfer;
