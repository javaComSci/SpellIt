import { Component, useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import { useTable } from 'react-table';
import WordListTable from '../Common/Table';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

export class WordLists extends Component <any, any>{

    constructor(props: any) {
        super(props);

        this.state = {
            isLoading: true,
            wordLists: []
        }
    }

    fetchWordLists() {
        fetch("/wordlists")
            .then(res => {
                return res.json()
            })
            .then(
                (result) => {
                    this.setState({
                        isLoading: false,
                        wordLists: result
                    });
                },
                (error) => {
                    console.log(error)
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
    
    onWordListClick = (e: any) => {
        console.log(e)
        this.setState({
            navigatePage: e
        })
    }

    render() {
        if ((this.state as any).isLoading) {
            return <div> <p> Fetching data. Please wait... </p></div>
        }

        if ((this.state as any).error) {
            return <div> <p> There was an error fetching your data. </p></div>
        }

        if ((this.state as any).navigatePage) {
            return  <Link to="/practice">YES</Link>
        }
        return <div> 
            <WordListTable rows={this.state.wordLists} onWordListClick={this.onWordListClick}/>
        </div>
    }
}