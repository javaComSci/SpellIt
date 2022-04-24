import { loginRequest } from "../authConfig";
import { useMsal } from "@azure/msal-react";
import { useState, useEffect } from 'react';

export default function ProfileContent(props: any) {
    const { instance, accounts, inProgress } = useMsal();
    const [accessToken, setAccessToken] = useState<any | null>(null);
    const [data, setData] = useState<any | null>(null);
    const [error, setError] = useState<any | null>(null);

    const name = accounts[0] && accounts[0].name;

    function RequestAccessToken() {
        const request = {
            ...loginRequest,
            account: accounts[0]
        };

        instance.acquireTokenSilent(request).then((response) => {
            setAccessToken(response.accessToken);
        }).catch((e) => {
            instance.acquireTokenPopup(request).then((response) => {
                setAccessToken(response.accessToken);
            });
        });
    }

    function Fetch(api: string, httpMethod: string, data: object) {
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
                    props.setData(res);
                }
            })
            .catch(err => {
                console.log(err);
                props.setError(err);
            });
        }
    }

    useEffect(() => {
        let isSubscribed = true;
        if (accessToken) {
            if (!data && !error) {
                Fetch(props.api, props.httpMethod, props.data)   
            }
            else {
                if (isSubscribed) {
                    data ? props.setData(data) : props.setError(error);
                }
            }
        }   
        else {
            RequestAccessToken();
        }
        return () => {isSubscribed = false}
    }, [accessToken, data, error]);

    return (
        <>
        </>
    );
};