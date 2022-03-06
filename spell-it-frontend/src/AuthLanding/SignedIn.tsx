import { Component } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './SignedIn.css';
import { useNavigate } from "react-router-dom";

export class SignedIn extends Component {
    // const navigate = useNavigate();

    constructor(props: any) {
        super(props);
    }

    render() {
        return <div>
            <h1> You are already successfully signed in, would you like to continue as this user? </h1> 
            <Link to="/userHome">YES</Link>
            <Link to="/">NO</Link>
        </div>
    }
}