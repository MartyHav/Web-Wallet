// Library Imports
import React from "react";

// Relative Imports
import { Container, Cell, Description, Title } from "./styles";

const Content = ({ ref }) => {
  return (
    <>
      <Container>
        <Cell>
          <Title>What is the total Haven (XHV) supply?</Title>
          <Description>
            Haven has a maximum supply of 18,400,000 coins with a target block
            time of 120 seconds. Each block reward is 19.256 XHV and the tail
            coin-emission rate is the same as Monero. Once Offshore is
            implemented, the circulating supply will be unknown due to users
            minting and burning XHV coins.
          </Description>
        </Cell>
        <Cell>
          <Title>Was there a pre-mine or ICO for Haven?</Title>
          <Description>
            The original founders, who are no longer involved in the project
            pre-mined 95,000 XHV coins but no ICO offered at launch.
          </Description>
        </Cell>
        <Cell>
          <Title>How is Haven funded?</Title>
          <Description>
            Haven is funded by a 5% governance fee. The governance fee is taken
            from block rewards and stored in the team’s multi-signature wallet.
            The wallet is visible to the community and requires 2 or more team
            members to transfer funds. (check my knowledge here) The new team is
            committed to transparency and plans to use governance funds on
            development, marketing, legal and exchange listing costs.
          </Description>
        </Cell>
        <Cell>
          <Title>Are my funds private?</Title>
          <Description>
            Yes, Haven uses the same privacy features as Monero. Ring
            Signatures, Ring Confidential Transactions and Stealth Addresses are
            used to keep user wallet balances and transactions, private and
            untraceable. All balances and transactions are private by default.
            <br />
            <br />
            <strong>
              Important: Although Haven transactions are private and anonymous,
              it should not be used for illicit or illegal purposes that violate
              a user’s local or national laws.
            </strong>
          </Description>
        </Cell>
        <Cell>
          <Title>How can I get Haven?</Title>
          <Description>
            Haven is available to buy from a number of exchanges. As a PoW coin
            on the Cryptonight-Haven algorithm, Haven can also be mined. The
            current list of exchanges and mining pools are on our website.
          </Description>
        </Cell>
        <Cell>
          <Title>Can I send Haven to anyone I want? </Title>
          <Description>
            Yes, as long as they have a Haven vault, you can send XHV to anyone
            in the world quickly, securely and privately. You will need to know
            their Haven vault address to do this.
          </Description>
        </Cell>
      </Container>
    </>
  );
};

export default Content;
