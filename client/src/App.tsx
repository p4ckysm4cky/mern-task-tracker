import React from 'react';

import { AppBar } from '@material-ui/core';
import { Typography, ThemeProvider } from '@material-ui/core';
import './App.css';
import { createTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import teal from '@material-ui/core/colors/teal';
import NoteIcon from '@material-ui/icons/Note';
import Form from "./components/Form"
const axios = require('axios').default

const primary: string = teal["A700"]

const theme = createTheme({
  palette: {
    primary: {
      main: primary
    },
    secondary: pink
  },
});





function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppBar className="appBar" position="static">
          <NoteIcon className="noteIcon"/>
          <Typography variant="h5" component="h1">        
            Task tracker
          </Typography>
        </AppBar>




        <div className="content">
            <Form/>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
