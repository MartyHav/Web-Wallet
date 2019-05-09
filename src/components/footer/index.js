// Library Imports
import React from "react";

// Relative Imports
import { Container, Title, Link, Section } from "./styles";

const Footer = () => {
  return (
    <Container>
      <Section>
        <Title>Mining Pools</Title>
        <Link>Fair Pool</Link>
        <Link>Lucky Pool</Link>
        <Link>Solo Pool</Link>
        <Link>Dark Mine</Link>
        <Link>Hero Miners</Link>
        <Link>Fracking Miner</Link>
      </Section>
      <Section>
        <Title>Products</Title>
        <Link>Web Wallet</Link>
        <Link>MacOS Wallet</Link>
        <Link>Windows Wallet</Link>
        <Link>CLI Wallet</Link>
        <Link>iOS Wallet</Link>
        <Link>Android Wallet</Link>
      </Section>
      <Section>
        <Title>Social</Title>
        <Link>Discord</Link>
        <Link>Medium</Link>
        <Link>Twitter</Link>
        <Link>Reddit</Link>
        <Link>Github</Link>
        <Link>Telegram</Link>
      </Section>
      <Section>
        <Title>Exchanges</Title>
        <Link>Bittrex</Link>
        <Link>Upbit</Link>
        <Link>Trade Ogre</Link>
      </Section>
    </Container>
  );
};

export default Footer;
