import React from 'react';
import './App.css';

//Import Windows
import './Login.css';
import LoginWindow from './Login.js';
import FilesWindow from './FilesWindow.js';

class App extends React.Component {

    state = {
        debug: false,
        loggedIn: 0,
        loggedUser: null
    }

    loginSuccess = (user) => {
        let logged_user = user;
        this.setState({
            loggedIn: 1,
            loggedUser: logged_user
        });
    }

    render() {
        if (this.state.debug) {
            let test_user = {
                name: "Paola",
                permissions: "rw",
                usedStorage: 15,
                totalStorage: 100
            }

            return <FilesWindow user={test_user} />;

        } else {
            if (this.state.loggedIn === 1) {
                return <FilesWindow user={this.state.loggedUser} />
            } else {
                return <LoginWindow loginSuccess={this.loginSuccess} />
            }
        }
    }
}

export default App;
