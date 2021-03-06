import { PublicClientApplication, SilentRequest, AuthenticationResult, Configuration, LogLevel, AccountInfo, InteractionRequiredAuthError, RedirectRequest, PopupRequest, EndSessionRequest } from "@azure/msal-browser";
import { msalConfig, loginRequest } from "../authConfig";


const myMSALObj = new PublicClientApplication(msalConfig);
var account = myMSALObj.getAllAccounts()[0];

const request = {
    ...loginRequest,
    account: account
};


export default function MakeApiCall(api: string, httpMethod: string, data: object) {
    return myMSALObj.acquireTokenSilent(request)
        .then(tokenResponse => {
            return tokenResponse.idToken;
        })
        .then(accessToken => {
            return Fetch(api, httpMethod, data, accessToken);
        })
        .catch(error => {
            console.warn("silent token acquisition fails. acquiring token using popup");
            // fallback to interaction when silent call fails
            return myMSALObj.acquireTokenPopup(request)
                .then(tokenResponse => {
                    let accessToken= tokenResponse.idToken;
                    return Fetch(api, httpMethod, data, accessToken);
                });
            })
}

function Fetch(api: string, httpMethod: string, data: object, accessToken: any) {
    if (httpMethod == "GET") {
        return fetch(api, {
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
        return fetch(api, {
            method: "post",
            headers: {
                'Authorization': `Bearer ${accessToken}`,
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
    else if (httpMethod == "DELETE") {
        console.log("going to fetch the data")
        return fetch(api, {
            method: "delete",
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(data)
            })
        .then( (res) => { 
            console.log("RETURN")
            if (res.status !== 200) {
                throw new Error(res.statusText)
            }
            else {
                console.log("IN post return")
                return res;
            }
        });
    }
}

export function TokenFetch(api: string, httpMethod: string, data: object) {
    
}


