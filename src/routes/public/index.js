// Library Imports
import React, { Component } from "react";
import { Router, Route } from "react-router-dom";

// Relative Imports

import Welcome from "../../components/pages/welcome/index.js";
import Create from "../../components/pages/create/index.js";
import Login from "../../components/pages/login/index.js";

class Private extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Welcome} />
        <Route path="/create" exact component={Create} />
        <Route path="/login" exact component={Login} />
      </div>
    );
  }
}

export default Private;
