import { Component } from 'react';
import { Login } from './Login';
import { WordLists } from './WordLists';

export class UserHome extends Component {
    constructor(props: any) {
        super(props);

        this.state = {
            isAuthenticated: false
        };
    }

    render() {
        let renderObj = !(this.state as any).isAuthenticated ? <Login /> : <WordLists />
        return <div>
            <h1> User Home </h1> 
            {renderObj}
        </div>
    }
}