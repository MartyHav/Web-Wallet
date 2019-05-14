// Library Imports
import React, { Component } from "react";
import { connect } from "react-redux";
import { authUser } from "../../actions/index.js";
import history from "../../history.js";

// Relative Imports
import { Container, Haven, Logo, Brand, Button, Logout } from "./styles.js";
import Icon from "../../assets/haven.svg";

class Navigation extends Component {
  handleLogout = () => {
    this.props.authUser(false);
    history.push("/");
  };

  render() {
    const { auth } = this.props;
    return (
      <Container>
        <Brand to="/">
          <Logo src={Icon} />
          <Haven>HAVEN</Haven>
        </Brand>
        {auth === false ? (
          <Button to="/wallet/login">Login</Button>
        ) : (
          <Logout onClick={this.handleLogout}>Logout</Logout>
        )}
      </Container>
    );
  }
}

export const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { authUser }
)(Navigation);
