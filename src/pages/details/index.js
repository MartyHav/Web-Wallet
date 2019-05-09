// Library Imports
import React from "react";

// Relative Imports
import { Container, Chart, Row, Content } from "./styles";
import Menu from "../../components/menu";
import Body from "../../components/body";

import Transaction from "../../components/transaction/index.js";
import Statistic from "../../components/statistic";

const Details = props => {
  const { id } = props.match.params;

  const price = 1.23;
  const amount = 9867.54;
  const value = price * amount;

  return (
    <Container>
      <Menu />
      <Body>
        <Content>
          <Chart>
            <h1>CHART DATA</h1>
          </Chart>
          <Row>
            <Statistic label="Amount" value={amount} />
            <Statistic
              label="Price"
              value={price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
              })}
            />
            <Statistic
              label="Value"
              value={value.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
              })}
            />
          </Row>
        </Content>

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

export default Details;
