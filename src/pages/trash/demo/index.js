// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container, Sidebar, Content, Card, Status, Header } from "./styles";

class Demo extends Component {
  state = {
    status: false
  };

  handleState = () => {
    this.setState(state => ({
      status: !state.status
    }));
  };

  render() {
    return (
      <Container>
        <Sidebar>
          Side bar
          <button onClick={this.handleState}>
            {this.state.status ? "Transaction On" : "Transaction Off"}
          </button>
        </Sidebar>
        <Content>
          <Header>Header</Header>
          <Card>Card 1</Card>
          <Card>Card 2</Card>
          <Card>Card 2</Card>
          <Card>Card 2</Card>
        </Content>
        {this.state.status ? <Status>A transaction is pending</Status> : null}
      </Container>
    );
  }
}

export default Demo;
