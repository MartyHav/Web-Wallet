/**
 * RPCProvider is an API-Wrapper for RPC-Calls
 */
import {RPC_BASE_URL, RPC_REQUEST_INIT} from "./constants/rpc";

export default class RPCProvider  {



    login (params) {
        return this.runRpcCall('login', {...params, mode:'seed'});
    }


    getBalance(params) {
        return this.runRpcCall('get_balance', params);
    }


    runRpcCall(strMethod, params) {

        const jsonParams = JSON.stringify(params);
        // NEAC - make a call to the RPC code
        return fetch(RPC_BASE_URL + strMethod, {...RPC_REQUEST_INIT, body: jsonParams}  )
            .then(function(response) {
                if (response.ok) {
                    return response.text();
                }
                throw new Error("invalid response");
            }.bind(this))
            .then(function(jsonResponse) {
                return JSON.parse(jsonResponse);
            }.bind(this));
    };


}
