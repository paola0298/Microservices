import React from 'react'

//App logo
import logo from './new_logo.png';

//Custom components
import UserGreeting from './components/user-greeting.js';
import './components/user-greeting.css';
import StorageIndicator from './components/storage-indicator.js';
import './components/storage-indicator.css';

import Files from './components/files.js';
import './components/files.css'

class FilesWindow extends React.Component {
    state = {
        files: []
    }

    componentDidMount() {
        //TODO retrieve use files from mysql database and populate files var.
        console.log("Retrieving files..");
    }

    render () {
        return (
        <div className="App">
            <div className="header">
                <div className="logo-container">
                    <img src={logo} alt="Logo" />
                    <h1>Microservices</h1>
                </div>
            </div>
            <div className="content">
                <div className="sidebar">
                    <UserGreeting name={this.props.user.name}/>
                    <div className="separator" />
                    <StorageIndicator percentage={this.props.user.usedStorage} total={this.props.user.totalStorage} />
                </div>
                <div className="files-container">
                    <div className="file-header">
                        <div className="file-item">
                            <div className="file-name">
                                <span>Nombre</span>
                            </div>
                        </div>
                        <div className="files-controls">
                            <i className="fas fa-upload"></i>
                            <form method="post" encType="multipart/form-data">
                                <input type="file" name="new_file"/>
                                <input type="submit" name="Submit" />    
                            </form>
                        </div>
                    </div>
                    <div className="files" id="files-container">
                        <Files files={this.state.files} />
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default FilesWindow;