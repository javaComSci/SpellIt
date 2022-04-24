import { Component } from 'react';
import { WordLists } from '../WordLists/WordLists';
import Navbar from "react-bootstrap/Navbar";
import { Button, Container, Nav } from 'react-bootstrap';

export class UserHome extends Component {
    constructor(props: any) {
        super(props);

        this.state = {}
    }

    addWordList = (e: any) => {
        this.setState({
            navigateToAddWordList: e
        })
    }

    render() {
        if ((this.state as any).navigateToAddWordList) {

        }
        else {
            return <div>
                <Navbar bg="light" variant="light">
                    Your Word Lists
                    <Button variant="outline-primary">Add Word List</Button>
                </Navbar>
                <WordLists />
            </div>
        }
    }
}