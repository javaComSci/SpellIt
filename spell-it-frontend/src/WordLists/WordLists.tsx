import { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export class WordLists extends Component {
    constructor(props: any) {
        super(props);

        this.state = {
            isLoading: true,
            wordLists: []
        }
    }

    fetchWordLists() {
        // TODO: Change this to wordlists
        fetch("https://localhost:5001/wordlist")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoading: false,
                        wordLists: result.items
                    });
                },
                (error) => {
                    this.setState({
                        isLoading: false,
                        error: error
                    });
                }
            )
    }

    componentDidMount() {
        this.fetchWordLists();
    }
    
    render() {
        if ((this.state as any).isLoading) {
            return <div> <p> Fetching data. Please wait... </p></div>
        }

        if ((this.state as any).error) {
            return <div> <p> There was an error fetching your data. </p></div>
        }

        return <div> <h1> (this.state as any).wordLists </h1> </div>
    }
}