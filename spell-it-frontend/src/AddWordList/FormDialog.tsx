import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ProfileContent from "../Common/TokenFetcher";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [save, setSave] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSave = () => {
    setSave(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  if (save) {
    console.log("SAVE IS CLIKED")
    return <ProfileContent api={"/wordlists"} httpMethod={"GET"} data={{}}/>
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Word List
      </Button>
      <Dialog open={open} onClose={handleClose}>
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
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Create Word List</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}