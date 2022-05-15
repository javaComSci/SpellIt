import { Component } from 'react';
import { WordLists } from '../WordLists/WordLists';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MakeApiCall from '../Common/TokenFetch';
import React from 'react';

export class UserHome extends Component {
    constructor(props: any) {
        super(props);

        (this as any).textRef = React.createRef();

        this.state = {
            update: 1,
            openDialog: false
        }
    }

    handleClickOpen = () => {
        this.setState({
            openDialog: true
        })
    }

    handleClose = () => {
        this.setState({
            openDialog: false
        })
    }

    handleSave = (e: any) => {
        var wordListName = (this as any).textRef.current.value;
        console.log(wordListName)
        MakeApiCall("/wordlist", "POST", {name: wordListName})
            .then(() => {
                this.setState({
                    openDialog: false,
                    update: (this.state as any).update + 1
                })
            })
        
    }

    render() {
        if ((this.state as any).error) {
            return <div> There was an error adding a new word list. Refresh the page to get current lists </div>
        }
        return <div>
            <WordLists loadingCount={(this.state as any).update}/>
            <div>
                <Button variant="outlined" onClick={this.handleClickOpen}>
                    Add Word List
                </Button>
                <Dialog open={(this.state as any).openDialog} onClose={this.handleClose}>
                    <DialogTitle>Add Word List</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        To add a word list, please enter the title that you'd like to use for the list.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="listTitle"
                        label="Word List Title"
                        fullWidth
                        variant="standard"
                        inputRef={(this as any).textRef}
                    />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleClose}>Cancel</Button>
                    <Button onClick={this.handleSave}>Create Word List</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    }
}