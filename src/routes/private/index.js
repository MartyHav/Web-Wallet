// Library Imports
import React, { Component } from "react";
import { Router, Route } from "react-router-dom";

// Relative Imports

import Assets from "../../components/pages/assets/index.js";
import Details from "../../components/pages/details/index.js";
import Exchange from "../../components/pages/exchange/index.js";
import Transfer from "../../components/pages/transfer/index.js";
import History from "../../components/pages/history/index.js";
import Settings from "../../components/pages/settings/index.js";

class Private extends Component {
  render() {
    return (
      <div>
        <Route path="/wallet/assets" exact component={Assets} />
        <Route path="/wallet/assets/:id" exact component={Details} />
        <Route path="/wallet/exchange" exact component={Exchange} />
        <Route path="/wallet/transfer" exact component={Transfer} />
        <Route path="/wallet/history" exact component={History} />
        <Route path="/wallet/settings" exact component={Settings} />
      </div>
    );
  }
}

export default Private;
