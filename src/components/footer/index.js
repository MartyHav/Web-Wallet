// Library Imports
import React from "react";

// Relative Imports
import { Container, Title, Internal, External, Section } from "./styles";

const Footer = () => {
  return (
    <Container>
      <Section>
        <Title>Mining Pools</Title>
        <External href="http://cryptoknight.cc/haven/" target="_blank">
          Fair Pool
        </External>
        <External href="https://xhv.luckypool.io/" target="_blank">
          Lucky Pool
        </External>
        <External href="https://xhv.solopool.org/" target="_blank">
          Solo Pool
        </External>
        <External href="https://xhv.dark-mine.su/" target="_blank">
          Dark Mine
        </External>
        <External href="https://haven.herominers.com/" target="_blank">
          Hero Miners
        </External>
        <External href="http://pool.haven.frackingminer.com/" target="_blank">
          Fracking Miner
        </External>
        <External
          href="http://pool.mineallcrypto.com/pool/?symbol=XHV"
          target="_blank"
        >
          Mine All Crypto
        </External>
      </Section>
      <Section>
        <Title>Social</Title>
        <External href="https://discordapp.com/invite/vWQ2GZX" target="_blank">
          Discord
        </External>
        <External href="https://medium.com/@havencurrency" target="_blank">
          Medium
        </External>
        <External href="https://twitter.com/HavenProtocol" target="_blank">
          Twitter
        </External>
        <External
          href="https://www.reddit.com/r/havenprotocol/"
          target="_blank"
        >
          Reddit
        </External>
        <External href="https://github.com/haven-protocol-org" target="_blank">
          Github
        </External>
        <External
          href="https://web.telegram.org/#/im?p=s1273047334_13986713956461503950"
          target="_blank"
        >
          Telegram
        </External>
      </Section>
      <Section>
        <Title>Products</Title>
        <External href="https://github.com/haven-protocol-org/haven-legacy/releases/download/3.2.2/haven-macOS-gui-3.2.2.zip">
          Mac Wallet
        </External>
        <External href="https://github.com/haven-protocol-org/haven-legacy/releases/download/3.2.2/haven-windows-gui-3.2.2b.zip">
          Windows Wallet
        </External>
        <External href="https://github.com/haven-protocol-org/haven-legacy/releases/download/3.2.2/haven-linux-x64-3.2.2-cli.tar.gz">
          Linux Wallet
        </External>
        <External href="https://github.com/haven-protocol-org/haven-legacy/releases">
          CLI Wallet
        </External>
        <Internal to="/wallet/create">Web Wallet</Internal>
      </Section>

      <Section>
        <Title>Exchanges</Title>
        <External
          href="https://bittrex.com/Market/Index?MarketName=BTC-XHV"
          target="_blank"
        >
          Bittrex
        </External>
        <External
          href="https://www.tokok.com/market?symbol=XHV_BTC"
          target="_blank"
        >
          TokTok
        </External>
        <External
          href="https://upbit.com/exchange?code=CRIX.UPBIT.BTC-XHV"
          target="_blank"
        >
          Upbit
        </External>
        <External href="https://tradeogre.com/exchange/BTC-XHV" target="_blank">
          Trade Ogre
        </External>
      </Section>
    </Container>
  );
};

export default Footer;
