import { Component } from 'react';
import '../App/App.css';
import { AuthLanding } from '../AuthLanding/AuthLanding';

export class Header extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return <div>
            <header className="App-header">
                <h1> Spell It!</h1>
            </header>
        </div>
    }
}