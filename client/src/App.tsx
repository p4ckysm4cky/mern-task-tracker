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

const { REACT_APP_BACKEND_URL } = process.env;

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
    const [forceUpdate, setForceUpdate] = useState(false);
    useEffect(() => {
        // Update the document title using the browser API
        axios
            .get(`${REACT_APP_BACKEND_URL}/api/tasks`)
            .then(function (response: any) {
                // handle success
                console.log(response);
                setTasks(response.data);
            })
            .catch(function (error: any) {
                // handle error
                console.log(error);
            });
    }, [forceUpdate]); // Techno showed me how to not make an infinite update loop :)

    // This is probably questionnable
    // but this function allows the child to force parent to rerender
    const forceUpdateFunc = () => {
        setForceUpdate(!forceUpdate);
    };

    const taskItems = tasks.map((task: any) => (
        <TaskCard
            key={task._id}
            task={task}
            forceUpdateFunc={forceUpdateFunc}
        />
    ));
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <AppBar className="appBar" position="static">
                    <NoteIcon className="noteIcon" />
                    <Typography variant="h5" component="h1">
                        Task tracker
                    </Typography>
                </AppBar>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {taskItems}
                </div>
                <div className="content">
                    <Form forceUpdateFunc={forceUpdateFunc} />
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
