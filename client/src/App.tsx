import React, { useState, useEffect } from "react";
import { AppBar } from "@material-ui/core";
import { Typography, ThemeProvider } from "@material-ui/core";
import "./App.css";
import { createTheme } from "@material-ui/core/styles";
import pink from "@material-ui/core/colors/pink";
import teal from "@material-ui/core/colors/teal";
import NoteIcon from "@material-ui/icons/Note";
import Form from "./components/Form";
import TaskCard from "./components/TaskCard";
const axios = require("axios").default;

const primary: string = teal["A700"];

const theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: pink,
  },
});

function App() {
  const [tasks, setTasks] = useState([]);
  const [forceUpdate, setForceUpdate] = useState(false)
  useEffect(() => {
    // Update the document title using the browser API
    axios
      .get("http://localhost:8000/api/tasks")
      .then(function (response: any) {
        // handle success
        console.log(response)        
        setTasks(response.data);
        
      })
      .catch(function (error: any) {
        // handle error
        console.log(error);
      });
  }, [forceUpdate]); // Techno showed me how to not make an infinite update loop :) 



  
  const taskItems = tasks.map((task: any) =>
    <TaskCard key={task._id} tasks={task}/>
  )
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppBar className="appBar" position="static">
          <NoteIcon className="noteIcon" />
          <Typography variant="h5" component="h1">
            Task tracker
          </Typography>
        </AppBar>
        <div style={{ display: "flex", flexWrap: "wrap"}}>
          {taskItems}
        </div>
        <div className="content">
          <Form forceUpdate={forceUpdate} setForceUpdate={setForceUpdate}/>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
