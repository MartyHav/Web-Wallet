// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container, Microcopy, Heading, Page } from "./styles";

import Guides from "../../components/guides/index.js";

import Footer from "../../components/footer";

class Guide extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleClick = () => {
    window.scrollTo({
      top: 700,
      behavior: "smooth"
    });
  };

  render() {
    return (
      <Page>
        <Container>
          <Microcopy>
            <Heading>Haven</Heading>
            <Heading>Technical</Heading>
            <Heading>Guide</Heading>
          </Microcopy>
        </Container>
        <Guides />

        <Footer />
      </Page>
    );
  }
}

export default Guide;
