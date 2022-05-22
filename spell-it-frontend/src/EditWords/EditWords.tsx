import {Component} from 'react';
import WordTable from '../Common/WordTable';
import MakeApiCall from '../Common/TokenFetch';

export class EditWords extends Component <any, any>{
    constructor(props: any) {
        super(props);
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let list = params.get('list');

        this.state = {
            list: list,
            words: []
        }
    }

    componentDidMount() {
        MakeApiCall("/wordlist/" + (this.state as any).list, "GET", {})
            .then((data) => {
                return data!.json();
            })
            .then((res) => {
                this.setState({
                    words: res,
                    error: undefined
                })
            })
            .catch ((err) => {
                console.log(err)
                this.setState({
                    words: [],
                    error: err
                })
            })
      }

    onWordDelete = (e: any) => {
        MakeApiCall("/word/" + e, "DELETE", {})
            .then((res) => {
                let updatedWords = (this.state as any).words.filter((word: any) => word.wordId != e)
                this.setState({
                    words: updatedWords,
                    error: undefined
                })
            })
            .catch ((err) => {
                this.setState({
                    words: [],
                    error: err
                })
            })
    }

    onWordAdd = (e: any, wordListId: any) => {
        MakeApiCall("/word", "POST", {name: e, wordListId: wordListId })
            .then((data) => {
                return data!.json();
            })
            .then((res) => {
                this.setState({
                    words: res,
                    error: undefined
                })
            })
            .catch ((err) => {
                console.log(err)
                this.setState({
                    words: [],
                    error: err
                })
            })
    }

    render() {
        return <div>
             <WordTable
                rows={this.state.words}
                onWordDelete={this.onWordDelete}
                onWordAdd={this.onWordAdd}
                wordListId={this.state.list}/>;
        </div>;
    }
}