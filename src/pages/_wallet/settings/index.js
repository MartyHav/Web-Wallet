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

const options = [
  { theme: "theme.dark", value: "Dark Theme" },
  { theme: "theme.light", value: "Light Theme" }
];

const dark = {
  body_navigation: "#26282C",
  body_background: "#36393F",
  body_foreground: "#2B2E32",
  type_primary: "#8A8D90",
  type_secondary: "#fffff"
};
const light = {
  body_navigation: "#fff",
  body_background: "#fff",
  body_foreground: "#fff",
  type_primary: "#fff",
  type_secondary: "#fff"
};

class Settings extends Component {
  state = {
    status: false,
    value: "Dark Theme"
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleClick = ({ theme, value }) => {
    if (theme === "theme.light") {
      this.props.selectTheme(light);
      this.setState({
        value: value
      });
    } else if (theme === "theme.dark") {
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

    return (
      <Page>
        <Menu />
        <Body span>
          <Header title="Settings" description="Lorem impsum" />

          <Form span="true">
            <Theme
              label="Select Theme"
              placeholder="Dark Theme"
              name="value"
              value={value}
              options={options}
              onClick={this.handleClick}
            />
            <Input label="Language" placeholder="Enter amount" width="true" />
          </Form>
          <Header title="Private Keys" description="Lorem impsum" />
          <Form span="true">
            <Input
              label="Seed Phrase"
              placeholder="Select Asset"
              width="true"
            />
            <Input
              label="Private Key"
              placeholder="Enter amount"
              width="true"
            />
            <Input label="Spend Key" placeholder="Select Asset" width="true" />
            <Input label="View Key" placeholder="Select Asset" width="true" />
          </Form>
        </Body>
        {status ? <Status>Pending transaction</Status> : null}
      </Page>
    );
  }
}

export const mapStateToProps = state => ({
  theme: state.theme
});

export default connect(
  mapStateToProps,
  { selectTheme }
)(Settings);
