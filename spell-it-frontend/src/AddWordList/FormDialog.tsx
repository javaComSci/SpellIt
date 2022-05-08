import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MakeApiCall from '../Common/TokenFetch';

// start out with open = false, save = false
// user clicks save
// open = false, save = true
// backend call is made to save
// 

export default function FormDialog(props: any) {
  const [openSave, setOpenSave] = React.useState({open: false, save: false});

  let wordListName: string =  "";

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleSave = () => {
  //   setSave(true);
  // }

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const handleClose = () => {
    setOpenSave({open: false, save: false})
  };

  const handleClickOpen = () => {
    setOpenSave({open: true, save: false})
  };

  const handleSave = () => {
    var elementId = "listTitle";
    wordListName = (document.getElementById(elementId) as HTMLInputElement).value;
    setOpenSave({open: false, save: true})
  }

  const handleSaveDone = () => {
    setOpenSave({open: false, save: false})
  }

  if (openSave.save == true) {
    MakeApiCall("/wordlist", "POST", {name: wordListName});
    handleSaveDone();
  }

  console.log("REndering", openSave)
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Word List
      </Button>
      <Dialog open={openSave.open} onClose={handleClose}>
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