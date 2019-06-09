export const RPC_BASE_URL =  "https://nelliekins.zapto.org/api.php/v1/";


export const RPC_REQUEST_INIT = {
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
