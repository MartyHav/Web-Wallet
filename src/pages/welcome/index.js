// Library Imports
import _ from "underscore";
import React, { Component } from "react";
import { Line } from "react-chartjs-2";

// Relative Imports
import {
  Container,
  Microcopy,
  Buttons,
  Heading,
  Page,
  Title,
  Scroller,
  Cards,
  Wrapper,
  Subtitle,
  Section,
  Header
} from "./styles";

import Footer from "../../components/footer";
import Content from "../../components/content";
import Link from "../../components/buttons/link";
import Button from "../../components/buttons/button";

import api from "../../constants/data.js";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  state = {
    oracle: api
  };

  handleClick = () => {
    window.scrollTo({
      top: 800,
      behavior: "smooth"
    });
  };

  renderTokens = () => {
    const { oracle } = this.state;

    return oracle.map(info => {
      const { token, ticker, price, change } = info;
      return (
        <Cards key={token}>
          <Header>
            <Section>
              <Title left>{ticker}</Title>
              <Title>{price}</Title>
            </Section>
            <Section>
              <Subtitle>{token}</Subtitle>
              <Subtitle>{change}</Subtitle>
            </Section>
          </Header>
        </Cards>
      );
    });
  };

  render() {
    return (
      <Page>
        <Container>
          <Microcopy>
            <Heading>Stable,</Heading>
            <Heading>Untraceable,</Heading>
            <Heading>Money</Heading>
            <Buttons>
              <Link to="/wallet/create" label="Get Haven Vault" />
              <Button onClick={this.handleClick} label="Learn More" />
            </Buttons>
          </Microcopy>
          <Scroller>
            <Wrapper>{this.renderTokens()}</Wrapper>
          </Scroller>
        </Container>
        <Content ref={this.myRef} />
        <Footer />
      </Page>
    );
  }
}

export default Welcome;
