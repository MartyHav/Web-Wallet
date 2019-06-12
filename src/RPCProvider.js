/**
 * RPCProvider is an API-Wrapper for RPC-Calls
 */
export default class RPCProvider  {


    RPC_BASE_URL = "https://nelliekins.zapto.org/api.php/v1/";

    REQUEST_INIT = {
        method:"POST",
        mode:"cors",
        cache:"no-cache",
        credentials: 'omit',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrer: 'no-referrer'
    };


    login (params) {
        return this.runRpcCall('login', {...params, mode:'seed'});
    }


    getBalance(params) {
        return this.runRpcCall('get_balance', params);
    }


    runRpcCall(strMethod, params) {

        const jsonParams = JSON.stringify(params);
        // NEAC - make a call to the RPC code
        return fetch(this.RPC_BASE_URL + strMethod, {...this.REQUEST_INIT, body: jsonParams}  )
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
