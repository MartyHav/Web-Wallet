// Library Imports
import React from "react";

// Relative Imports
import { Container, Image, Words, Description, LearnMore } from "./styles";
import { Header } from "../../constants/type.js";

const Content = ({ ref }) => {
  return (
    <>
      <Container ref={ref}>
        <Image>First </Image>
        <Words>
          <Header>
            What is <br />
            Haven Protocol?
          </Header>
          <Description>
            Haven is a multi-asset protocol offering diversified investments
            across a range of assets. The assets such as Haven (XHV), United
            States Dollar (xUSD), Swiss Francs (xCHF) and Gold (xGOLD) enable
            users to take part in and offset market volatility.
          </Description>
          <Description>
            All Haven asset exchanges occur within the Haven vault, without a
            third party. All Haven transactions are private, anonymous and
            completely untraceable.
          </Description>
          <LearnMore to="/guide">Read the Technical Guide</LearnMore>
        </Words>
      </Container>
      <Container reverse>
        <Image reverse>First </Image>
        <Words reverse>
          <Header>
            How does <br />
            Haven work?
          </Header>
          <Description>
            Haven utilizes a mint and burn protocol available within the Haven
            vault. Once you own XHV, the coin can be burned for the stable
            digital asset, xUSD. You are also able to mint xUSD back to the
            volatile coin, XHV.
          </Description>
          <Description>
            The value of XHV will always fluctuate, but 1 xUSD will always be
            equal to 1 USD worth of XHV. Investors can choose to hold the
            volatile coin, XHV, or lock in their portfolio value in xUSD
          </Description>
          <LearnMore to="/guide">Read the Technical Guide</LearnMore>
        </Words>
      </Container>
      <Container>
        <Image>First </Image>
        <Words>
          <Header>
            Why should I <br />
            use Haven?
          </Header>
          <Description>
            Haven offers a unique solution to the risks of storing value in
            crypto-currencies. The mint and burn protocol allows the asset,
            xUSD, to remain stable without the use of fiat backing
          </Description>
          <Description>
            As a Monero fork, Haven is private by default and all balances and
            transactions are anonymous. The price stability of Haven's assets
            gives investors exposure to market volatility, when they choose it.
          </Description>
          <LearnMore to="/guide">Read the Technical Guide</LearnMore>
        </Words>
      </Container>
    </>
  );
};

export default Content;
