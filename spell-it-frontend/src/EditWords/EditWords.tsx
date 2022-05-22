
import {Component} from 'react';
import DataGrid from 'react-data-grid';
import MakeApiCall from '../Common/TokenFetch';

export class EditWords extends Component <any, any>{
    constructor(props: any) {
        super(props);
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let list = params.get('list');

        this.state = {
            list: list
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

    render() {
        return <div>

        </div>;
    }
}