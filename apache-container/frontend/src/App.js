import React from 'react';
import './App.css';

//Import Windows
import './Login.css';
import LoginWindow from './Login.js';
import FilesWindow from './FilesWindow.js';

class App extends React.Component {

    render() {
        // return <FilesWindow />
        return <LoginWindow />
    }

}

export default App;
