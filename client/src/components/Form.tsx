import React from "react"
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function Form(props: any) {
    const [open, setOpen] = React.useState(true);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    // const handleClose = () => {
    //   onClose(selectedValue);
    // };
  


    return(
      <div>
        <div className="addButtonParent">
          <Fab  className="addButton" color="primary" aria-label="add" onClick={handleClickOpen}>
            <AddIcon />
          </Fab>
       </div>
        <Dialog fullWidth={true} aria-labelledby="simple-dialog-title" open={open} onClose={handleClose}>
            <DialogTitle >Add New Task</DialogTitle>
            <TextField style={{margin: 10}} label="Title*" />
            <TextField
              style={{margin: 10}}
              label="Description"
              multiline
              rows={6}
            />
        </Dialog>
        </div>
    )
}

export default Form

