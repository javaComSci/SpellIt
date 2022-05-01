import { Component } from 'react';
import { WordLists } from '../WordLists/WordLists';
import FormDialog from '../AddWordList/FormDialog';

export class UserHome extends Component {
    constructor(props: any) {
        super(props);

        this.state = {}
    }

    render() {
        return <div>
            <WordLists />
            <FormDialog />
        </div>
    }
}