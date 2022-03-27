import { Component } from 'react';
import { SignedIn } from './SignedIn';
import { SignIn } from './SignIn';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import Button from "react-bootstrap/Button";
import { useIsAuthenticated } from "@azure/msal-react";
import Navbar from "react-bootstrap/Navbar";

export const AuthLanding = (props: any) => {
    const isAuthenticated = useIsAuthenticated();
    console.log(isAuthenticated);

    return (
        <div>
            { isAuthenticated ? <SignedIn />: <SignIn /> }
        </div>
    );
};