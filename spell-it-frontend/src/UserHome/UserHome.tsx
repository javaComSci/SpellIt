import { Component } from 'react';
import { WordLists } from '../WordLists/WordLists';
import { Header } from '../Header/Header';

export class UserHome extends Component {
    constructor(props: any) {
        super(props);

        this.state = {
            isAuthenticated: false
        };
    }

    render() {
        return <div>
            <Header />
            <h1> User Home </h1> 
            <WordLists />
        </div>
    }
}