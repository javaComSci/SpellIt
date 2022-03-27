import { SignIn } from '../AuthLanding/SignIn';
import { SignOut } from '../AuthLanding/SignOut';
import { useIsAuthenticated } from "@azure/msal-react";
import Navbar from "react-bootstrap/Navbar";

export const PageLayout = (props: any) => {
    const isAuthenticated = useIsAuthenticated();
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <a className="navbar-brand" href="/">Spell It!</a>
                { isAuthenticated ? <SignOut /> : <SignIn /> }
            </Navbar>
            {props.children}
        </div>
    );
};