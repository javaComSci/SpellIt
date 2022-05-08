import { Component, useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import { useTable } from 'react-table';
import WordListTable from '../Common/Table';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ProfileContent from "../Common/TokenFetcher";

export class WordLists extends Component <any, any>{

    constructor(props: any) {
        super(props);

        this.state = {
            isLoading: true,
            wordLists: []
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
            navigateToPractice: e
        })
    }

    onWordListClickDelete = (e: any) => {
        console.log(e)
        this.setState({
            navigateToPractice: e
        })
    }

    render() {
        if ((this.state as any).isLoading) {
            return <div>
                <p> Fetching data. Please wait... </p>
                <ProfileContent setData={this.setData} setError={this.setError} api={"/wordlists"} httpMethod={"GET"} data={{}}/>
            </div>
        }

        if ((this.state as any).error) {
            return <div> <p> There was an error fetching your data. </p></div>
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