// Library Imports
import React, { Component } from "react";
import { Router, Route } from "react-router-dom";

// Relative Imports

import Welcome from "../../pages/_public/welcome/index.js";
import Create from "../../pages/_auth/create";
import Login from "../../pages/_auth/login";

class Public extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Welcome} />
        <Route path="/wallet/create" exact component={Create} />
        <Route path="/wallet/login" exact component={Login} />
      </div>
    );
  }
}

export default Public;
