import { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignedIn } from './SignedIn';

export class AuthLanding extends Component {
    constructor(props: any) {
        super(props);

        this.state = {
            isAuthenticated: true
        };
    }

    render() {
        let loginDiv = <div> <h1> Login </h1></div>;
        let renderObj = !(this.state as any).isAuthenticated ? loginDiv : <SignedIn />;
        return <div>
            {renderObj}
        </div>
    }
}