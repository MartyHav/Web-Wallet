// Library Imports
import React from "react";

// Relative Imports
import { Container } from "./styles";
import Menu from "../../components/menu";
import Body from "../../components/body";
import Transaction from "../../components/transaction";

const History = () => {
  return (
    <Container>
      <Menu />
      <Body>
        <Transaction
          status="Pending"
          date="April 1, 2019"
          hash=" 25a6….19b7"
          amount="123"
        />
        <Transaction
          status="Pending"
          date="April 1, 2019"
          hash=" 25a6….19b7"
          amount="123"
        />
        <Transaction
          status="Pending"
          date="April 1, 2019"
          hash=" 25a6….19b7"
          amount="123"
        />
        <Transaction
          status="Pending"
          date="April 1, 2019"
          hash=" 25a6….19b7"
          amount="123"
        />
        <Transaction
          status="Pending"
          date="April 1, 2019"
          hash=" 25a6….19b7"
          amount="123"
        />
      </Body>
    </Container>
  );
};

export default History;
