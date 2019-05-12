// Library Imports
import React, { Component } from "react";
import { connect } from "react-redux";
import { authUser } from "../../actions/index.js";

// Relative Imports
import { Container, Haven, Logo, Brand, Button, Theme } from "./styles.js";
import Icon from "../../assets/haven.svg";

class Navigation extends Component {
  logoutUser = () => {
    const auth = false;
    authUser(auth);
  };
  render() {
    const { auth, onClick } = this.props;
    return (
      <Container>
        <Brand to="/">
          <Logo src={Icon} />
          <Haven>HAVEN</Haven>
        </Brand>

        {auth ? (
          <Theme onClick={this.logoutUser}>Logout</Theme>
        ) : (
          <Button to="/wallet/login">Login</Button>
        )}
      </Container>
    );
  }
}

export default Navigation;
// export default connect(mapStateToProps)(Navigation);
