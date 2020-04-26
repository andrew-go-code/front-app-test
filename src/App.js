import React from 'react';
import './App.css';
import Main from "./main/Main";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <div className="App">
        <AppBar className="AppBar" position="static">
            <Toolbar>
                <Typography variant="h6">
                    Администратор ролевой политики (Демо)
                </Typography>
            </Toolbar>
        </AppBar>
      <Main />
    </div>
  );
}

export default App;
