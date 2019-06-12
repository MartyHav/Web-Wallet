// Library Imports
import React from "react";

class RPC extends React.Component {
  static call_rpc(strURL, strMethod, jsonParams) {
    // NEAC - make a call to the RPC code
    return window
      .fetch(strURL + "/api.php/v1/" + strMethod, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "omit",
        headers: {
          "Content-Type": "application/json"
        },
        redirect: "follow",
        referrer: "no-referrer",
        body: jsonParams
      })
      .then(function(response) {
        if (response.ok) {
          return response.text();
        }
        throw new Error("invalid response");
      })
      .then(function(jsonResponse) {
        return JSON.parse(jsonResponse);
      });
  }

  render() {
    return "";
  }
}

export default RPC;
