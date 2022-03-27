import { useMsal } from "@azure/msal-react";
import Button from "react-bootstrap/Button";

function handleLogout(instance: any) {
    instance.logoutPopup().catch((e:any) => {
        console.error(e);
    });
}

export const SignOut = () => {
    const { instance } = useMsal();

    return (
        <Button variant="secondary" className="ml-auto" onClick={() => handleLogout(instance)}>Sign out</Button>
    );
}