// Library Imports
import React from "react";

// Relative Imports
import { Container } from "./styles";
import Menu from "../../components/menu";
import Body from "../../components/body";

import Input from "../../components/inputs/input";

const Settings = () => {
  return (
    <Container>
      <Menu />
      <Body>
        <Input label="Theme" value="Dark Theme" />
        <Input label="Language" value="English" />

        <Input label="Seed Phrase" value="kjasdkjbasd" type="password" />
        <Input label="Private Key" value="kjasdkjbasd" type="password" />
        <Input label="Spend Key" value="kjasdkjbasd" type="password" />
      </Body>
    </Container>
  );
};

export default Settings;
