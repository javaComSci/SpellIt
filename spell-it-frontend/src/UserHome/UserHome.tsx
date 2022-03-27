import { Component } from 'react';
import { WordLists } from '../WordLists/WordLists';
import Navbar from "react-bootstrap/Navbar";

export class UserHome extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return <div>
            <Navbar bg="light" variant="dark">
                Your Word Lists
            </Navbar>
            <WordLists />
        </div>
    }
}