// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container, FormContainer, Information, Content } from "./styles";
import Menu from "../../components/menu";
import Body from "../../components/body";

import Tab from "../../components/tab";
import Input from "../../components/inputs/input";
import Select from "../../components/inputs/select";

class Exchange extends Component {
  state = {
    first: true,
    second: false,
    onshore_from_asset: "XHV",
    onshore_from_amount: "",
    onshore_to_asset: "xUSD",
    onshore_to_amount: "",
    offshore_from_asset: "xUSD",
    offshore_from_amount: "",
    offshore_to_asset: "XHV",
    offshore_to_amount: ""
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
      onshore_from_asset,
      onshore_from_amount,
      onshore_to_asset,
      onshore_to_amount,
      // Offshore
      offshore_from_asset,
      offshore_from_amount,
      offshore_to_asset,
      offshore_to_amount
    } = this.state;
    return (
      <Container>
        <Menu />
        <Body>
          <Tab
            firstLabel="Onshore"
            secondLabel="Offshore"
            first={this.state.first}
            second={this.state.second}
            firstClick={() => this.setState({ first: true, second: false })}
            secondClick={() => this.setState({ first: false, second: true })}
          />
          <Content>
            {this.state.first ? (
              <>
                <FormContainer>
                  <Select
                    name="onshore_from_asset"
                    type="select"
                    label="From Asset"
                    value={onshore_from_asset}
                    placeholder="Select from token"
                    onChange={this.handleChange}
                  >
                    Select
                  </Select>
                  <Input
                    name="onshore_from_amount"
                    type="number"
                    value={onshore_from_amount}
                    label="From Amount"
                    placeholder={`Enter ${onshore_from_amount} amount`}
                    onChange={this.handleChange}
                  />
                  <Input
                    name="onshore_to_asset"
                    value={onshore_to_asset}
                    label="To Asset"
                    placeholder="Select to token"
                    onChange={this.handleChange}
                  />
                  <Input
                    name="onshore_to_amount"
                    type="number"
                    value={onshore_to_amount}
                    label="To Amount"
                    placeholder={`Enter ${onshore_to_amount} amount`}
                    onChange={this.handleChange}
                  />
                </FormContainer>
                <Information>
                  You are going to convert. This transaction will cost 0.00055
                  XHV ($0.0002 USD) and will take approximately 120 seconds.
                  Before sending please double check the amount and the address
                  as this transaction is irreversible once submitted.
                </Information>
              </>
            ) : (
              <>
                <FormContainer>
                  <Input
                    name="offshore_from_asset"
                    label="From Asset"
                    value={offshore_from_asset}
                    placeholder="Select from token"
                    onChange={this.handleChange}
                  />
                  <Input
                    name="offshore_from_amount"
                    type="number"
                    value={offshore_from_amount}
                    label="From Amount"
                    placeholder={`Enter ${offshore_from_amount} amount`}
                    onChange={this.handleChange}
                  />
                  <Input
                    name="offshore_to_asset"
                    value={offshore_to_asset}
                    label="To Asset"
                    placeholder="Select to token"
                    onChange={this.handleChange}
                  />
                  <Input
                    name="offshore_to_amount"
                    type="number"
                    value={offshore_to_amount}
                    label="To Amount"
                    placeholder={`Enter ${offshore_to_amount} amount`}
                    onChange={this.handleChange}
                  />
                </FormContainer>
                <Information>
                  This transaction will cost 0.00055 XHV ($0.0002 USD) and will
                  take approximately 120 seconds. Before sending please double
                  check the amount and the address as this transaction is
                  irreversible once submitted.
                </Information>
              </>
            )}
          </Content>
        </Body>
      </Container>
    );
  }
}

export default Exchange;
