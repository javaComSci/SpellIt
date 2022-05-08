import { Component } from 'react';
import { WordLists } from '../WordLists/WordLists';
import FormDialog from '../AddWordList/FormDialog';

export class UserHome extends Component {
    constructor(props: any) {
        super(props);

        this.state = {
            update: 1
        }
    }

    onAddition = () => {
        console.log("On addition")
        this.setState({
            update: (this.state as any).update + 1
        })
    }

    onError = () => {
        this.setState({
            error: true
        })
    }

    render() {
        if ((this.state as any).error) {
            return <div> There was an error adding a new word list. Refresh the page to get current lists </div>
        }
        return <div>
            <WordLists />
            <FormDialog onAddition={this.onAddition}/>
        </div>
    }
}