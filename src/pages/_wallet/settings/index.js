// Library Imports
import React, { Component } from "react";
import { connect } from "react-redux";
import { selectTheme } from "../../../actions";

// Relative Imports
import Page from "../../../components/_layout/page";
import Body from "../../../components/_layout/body";
import Menu from "../../../components/_layout/menu";
import Header from "../../../components/_layout/header";
import Status from "../../../components/_layout/status/";
import Input from "../../../components/inputs/input";
import Form from "../../../components/inputs/form";
import Theme from "../../../components/inputs/theme";

import { dark, light } from "../../../constants/themes.js";

const options = [
  { theme: "dark", value: "Dark Theme" },
  { theme: "light", value: "Light Theme" }
];

class Settings extends Component {
  state = {
    status: false,
    value: ""
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.setState({
      value: this.props.theme.value
    });
  }

  handleClick = ({ theme, value }) => {
    console.log("THEME", theme);
    if (theme === "light") {
      this.props.selectTheme(light);
      this.setState({
        value: value
      });
    } else if (theme === "dark") {
      this.props.selectTheme(dark);
      this.setState({
        value: value
      });
    } else {
      return null;
    }
  };

  render() {
    const { status, value } = this.state;
    const { seedPhrase, privateKey, spendKey, viewKey } = this.props.user;
    return (
      <Page>
        <Menu />
        <Body>
          <Header title="Settings" description="Lorem impsum" />

          <Form>
            <Theme
              width="true"
              label="Select Theme"
              placeholder="Dark Theme"
              name="value"
              value={value}
              options={options}
              onClick={this.handleClick}
            />
            <Input label="Language" placeholder="Enter amount" />
          </Form>
          <Header title="Private Keys" description="Lorem impsum" />
          <Form span="true">
            <Input
              label="Seed Phrase"
              placeholder="Select Asset"
              width="true"
              value={seedPhrase}
              readOnly
            />
            <Input
              label="Private Key"
              placeholder="Enter amount"
              width="true"
              value={privateKey}
              readOnly
            />
            <Input
              label="Spend Key"
              placeholder="Select Asset"
              width="true"
              value={spendKey}
              readOnly
            />
            <Input
              label="View Key"
              placeholder="Select Asset"
              width="true"
              value={viewKey}
              readOnly
            />
          </Form>
        </Body>
        {status ? <Status>Pending transaction</Status> : null}
      </Page>
    );
  }
}

export const mapStateToProps = state => ({
  theme: state.theme,
  user: state.user
});

export default connect(
  mapStateToProps,
  { selectTheme }
)(Settings);
