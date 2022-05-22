import { Component, useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import { useTable } from 'react-table';
import WordListTable from '../Common/Table';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ProfileContent from "../Common/TokenFetcher";
import MakeApiCall from '../Common/TokenFetch';
import { Navigate } from "react-router-dom";

export class WordLists extends Component <any, any>{

    constructor(props: any) {
        super(props);

        this.state = {
            loadingCount: this.props.loadingCount, 
            wordLists: []
        }
    }

    componentDidMount() {
        MakeApiCall("/wordlists", "GET", {})
            .then((data) => {
                return data!.json();
            })
            .then((res) => {
                this.setState({
                    wordLists: res,
                    error: undefined
                })
            })
            .catch ((err) => {
                console.log(err)
                this.setState({
                    wordLists: [],
                    error: err
                })
            })
      }

    componentDidUpdate(prevProps: any) {
        if (prevProps.loadingCount !== this.props.loadingCount) {
            MakeApiCall("/wordlists", "GET", {})
            .then((data) => {
                return data!.json();
            })
            .then((res) => {
                this.setState({
                    wordLists: res,
                    error: undefined
                })
            })
            .catch ((err) => {
                console.log(err)
                this.setState({
                    wordLists: [],
                    error: err
                })
            })
        }
      }

    setData = (data: any) => {
        data.json()
        .then((res: any) => 
            this.setState({
                isLoading: false,
                wordLists: res
            })
        );
        
    }

    setError = (error: any) => {
        this.setState({
            isLoading: false,
            error: error
        });
    }
    
    onWordListClickPractice = (e: any) => {
        console.log(e)
        this.setState({
            navigateToPractice: e
        })
    }

    onWordListClickUpdate = (e: any) => {
        console.log(e)
        this.setState({
            navigateToEdit: e
        })
    }

    onWordListClickDelete = (e: any) => {
        MakeApiCall("/wordlist/" + e, "DELETE", {})
            .then((res) => {
                let updatedWordLists = (this.state as any).wordLists.filter((word: any) => word.wordListId != e)
                this.setState({
                    wordLists: updatedWordLists,
                    error: undefined
                })
            })
            .catch ((err) => {
                this.setState({
                    wordLists: [],
                    error: err
                })
            })
    }

    render() {
        if ((this.state as any).error) {
            return <div> <p> There was an error fetching your data. </p></div>
        }

        if ((this.state as any).navigateToEdit) {
            let navigateTo = "/editwords/?list=" + (this.state as any).navigateToEdit;
            return <Navigate to={navigateTo} replace={true}/>
        }

        return <div> 
            <WordListTable
                rows={this.state.wordLists}
                onWordListClickPractice={this.onWordListClickPractice}
                onWordListClickUpdate={this.onWordListClickUpdate}
                onWordListClickDelete={this.onWordListClickDelete}/>
        </div>
    }
}