import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import { Fab } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div className="App">
      <p className="test">Hello World</p>


      <p>nice</p>
        <div className="addButtonParent">
          <div >
            <Fab className="addButton" color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </div>
        </div>
      <p> nice</p>
    </div>
  );
}

export default App;
