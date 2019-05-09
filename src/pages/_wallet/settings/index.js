// Library Imports
import React, { Component } from "react";

// Relative Imports
import Page from "../../../components/_layout/page";
import Body from "../../../components/_layout/body";
import Menu from "../../../components/_layout/menu";
import Header from "../../../components/_layout/header";
import Status from "../../../components/_layout/status/";
import Input from "../../../components/inputs/input";
import Form from "../../../components/inputs/form";

class Exchange extends Component {
  state = {
    status: false
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { status } = this.state;
    return (
      <Page>
        <Menu />
        <Body span>
          <Header title="Settings" description="Lorem impsum" />
          <Form span="true">
            <Input label="Theme" placeholder="Select Asset" width="true" />
            <Input label="Language" placeholder="Enter amount" width="true" />
          </Form>
          <Header title="Private Keys" description="Lorem impsum" />
          <Form span="true">
            <Input
              label="Seed Phrase"
              placeholder="Select Asset"
              width="true"
            />
            <Input
              label="Private Key"
              placeholder="Enter amount"
              width="true"
            />
            <Input label="Spend Key" placeholder="Select Asset" width="true" />
            <Input label="View Key" placeholder="Select Asset" width="true" />
          </Form>
        </Body>
        {status ? <Status>Pending transaction</Status> : null}
      </Page>
    );
  }
}

export default Exchange;
