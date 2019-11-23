import React from 'react'

//App logo
import logo from './new_logo.png';

//Custom components
import UserGreeting from './components/user-greeting.js';
import './components/user-greeting.css';
import StorageIndicator from './components/storage-indicator.js';
import './components/storage-indicator.css';
import UploadModal from './components/modal.js';
import './components/modal.css';

import Files from './components/files.js';
import './components/files.css';


class FilesWindow extends React.Component {
    // this.props.user;


    state = {
        files: []
    }

    componentDidMount() {
        //TODO retrieve use files from mysql database and populate files var.
        console.log("Retrieving files..");

        // Get the modal
        var modal = document.getElementById("modal-container");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("modal-close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal.style.display = "none";   
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
        } 

        var requestString = "http://localhost:9080/files/" + this.props.user.name; 

        console.log("Sending request to " + requestString);

        const http = new XMLHttpRequest();
        http.open("GET", requestString, true);
        http.send();

        http.onload = () => {
            console.log("Response: " + http.responseText);
        }
        http.ontimeout = () => {
            console.log("Request timeout");
        }
        // http.onreadystatechange = () => {
        //     console.log("[INFO] Connected successfully to mysql jdbc service");
        //     console.log(http.responseText);
        //     if (http.readyState === 4 && http.status === 200) {
        //         console.log(http.responseText);
        //         // this.handleResponse(usr, pass, msg, http.responseText);
        //     } else {
        //         console.log("Not ready");
        //     }
        // }
        // http.ontimeout = () => {
        //     console.log("[ERROR] Could not connect to mysql jdbc service")
        // }


        // fetch(requestString).then(function(response) {
        //         console.log(response.responseText);
    
        //     }).catch(function() {
        //         console.log("Failed to retrieve files..");
        //     });
    }

    openUploadModal() {
        console.log("Showing modal...");

        var modal = document.getElementById("modal-container");
        modal.style.display = "block";
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
                <div className="content-wrapper">
                    <UploadModal />
                    <div className="files-container">
                        <div className="file-header">
                            <div className="file-item">
                                <div className="file-name">
                                    <span>Nombre</span>
                                </div>
                            </div>
                            <div className="files-controls">
                                <button className="modal-button" onClick={this.openUploadModal}>Subir</button>
                            </div>
                        </div>
                        <div className="files" id="files-container">
                            <Files files={this.state.files} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default FilesWindow;