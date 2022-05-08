import { PublicClientApplication, SilentRequest, AuthenticationResult, Configuration, LogLevel, AccountInfo, InteractionRequiredAuthError, RedirectRequest, PopupRequest, EndSessionRequest } from "@azure/msal-browser";
import { msalConfig, loginRequest } from "../authConfig";

export default function MakeApiCall(api: string, httpMethod: string, data: object) {
    return TokenFetch()
        .then((token) => {
            Fetch(api, httpMethod, data, token) 
        });
}

function Fetch(api: string, httpMethod: string, data: object, accessToken: any) {
    console.log("TOKEN",accessToken)
    if (httpMethod == "GET") {
        fetch(api, {
            method: "GET",
            headers: new Headers({
                'Authorization': `Bearer ${accessToken}`,
                "accepts":"application/json"
            }), 
        })
        .then((res) => {
            if (res.status !== 200) {
                throw new Error(res.statusText)
            }
            else {
                return res;
            }
        });
    }
    else if (httpMethod == "POST") {
        fetch(api, {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            })
        .then( (res) => { 
            if (res.status !== 200) {
                throw new Error(res.statusText)
            }
            else {
                return res;
            }
        });
    }
}

export function TokenFetch() {
    const myMSALObj = new PublicClientApplication(msalConfig);
    var account = myMSALObj.getAllAccounts()[0];

    const request = {
        ...loginRequest,
        account: account
    };

    return myMSALObj.acquireTokenSilent(request)
        .catch(error => {
            console.warn("silent token acquisition fails. acquiring token using popup");
            // fallback to interaction when silent call fails
            return myMSALObj.acquireTokenPopup(request)
                .then(tokenResponse => {
                    console.log(tokenResponse);
                    return tokenResponse;
                }).catch(error => {
                    console.error(error);
                });
            })
}


