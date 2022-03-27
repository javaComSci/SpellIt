import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import Button from "react-bootstrap/Button";

function handleLogin(instance: any) {
    instance.loginPopup(loginRequest).catch((e: any) => {
        console.error(e);
    });
}

export const SignIn = () => {
    const { instance } = useMsal();

    return (
        <Button variant="secondary" className="ml-auto" onClick={() => handleLogin(instance)}>Sign in</Button>
    );
}