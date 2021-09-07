import React from "react"
import Dialog from '@material-ui/core/Dialog';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import SaveIcon from '@material-ui/icons/Save';
const axios = require('axios').default;

const {REACT_APP_BACKEND_URL} = process.env

function Form(props: any) {
    const [open, setOpen] = React.useState(false);
    const [taskTitle, setTaskTitle] = React.useState("")
    const [taskTitleError, setTaskTitleError] = React.useState(false)
    const [taskDescription, setTaskDescription] = React.useState("")

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setTaskTitleError(false)
      setOpen(false)
      setTaskTitle("")
      setTaskDescription("")
    };


    const handleSubmit = () => {
      if (taskTitle.length === 0) {
        setTaskTitleError(true)
      } else {
        let taskObject = {
          title: taskTitle,
          description: taskDescription
        }
        console.log(taskObject)
        axios.post(`${REACT_APP_BACKEND_URL}/api/tasks`, taskObject)
        .then(function (response: any) {
          console.log(response);
          handleClose()
          // ghetto way of updating parent
          props.forceUpdateFunc()
        })
        .catch(function (error: any) {
          setTaskTitleError(false)
          console.log(error);
        })
      }
    }
  


    return(
      <div>
        <div className="addButtonParent">
          <Fab  className="addButton" color="primary" aria-label="add" onClick={handleClickOpen}>
            <AddIcon />
          </Fab>
       </div>
        <Dialog fullWidth={true} aria-labelledby="simple-dialog-title" open={open} onClose={handleClose}>
            <DialogTitle >Add New Task</DialogTitle>
            <TextField 
              style={{margin: 10}} 
              label="Title*" 
              value={taskTitle}
              error={taskTitleError}
              onChange={(e) => setTaskTitle(e.target.value)}
            
            />
            <TextField
              style={{margin: 10}}
              label="Description"
              multiline
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              rows={6}
            />
            <DialogActions>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                startIcon={<SaveIcon/>}
              >
                Save
              </Button>

            </DialogActions>
        </Dialog>
        </div>
    )
}

export default Form

