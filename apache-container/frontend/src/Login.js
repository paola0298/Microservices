import React from 'react';
import logo from './new_logo.png';

class LoginWindow extends React.Component {

    getUserData = (e) => {

        var usr = document.getElementById("user_field");
        var pass = document.getElementById("pass_field");
        var msg = document.getElementById("login_msg");

        //TODO connect to nodejs container to verify user
        
        const http = new XMLHttpRequest();
        http.open("GET", `//authorization:8080/users/u=${usr.value}&p=${pass.value}`, true);
        http.send();
        http.onreadystatechange = () => {
            console.log("[INFO] Connected successfully to authentication service");
            console.log(http.responseText);
            if (http.readyState === 4 && http.status === 200) {
                console.log(http.responseText);
                this.handleResponse(usr, pass, msg, http.responseText);
            } else {
                console.log("Not ready");
            }
        }
        http.ontimeout = () => {
            console.log("[ERROR] Could not connect to authentication service")
        }
    }

    handleResponse(usr, pass, msg, response) {
        // console.log("Response:" + response);
        var json = JSON.parse(response);
        console.log("JSON: " + JSON.stringify(json));

        console.log("Status: " + json.status);

        if (json.status === "success") {

            //Parse and get user info
            let user = {
                name: json.user,
                permissions: json.permissions,
                usedStorage: 15,
                totalStorage: 100
            }

            this.props.loginSuccess(user);

        } else if (json.status === "password_incorrect") {
            //Show error msg
            // console.log("Password incorrect");
            pass.value = "";
            this.showMessage("Contraseña incorrecta", msg);
        } else {
            // console.log("Login failed");
            usr.value = "";
            pass.value = "";
            this.showMessage("Usuario o contraseña incorrectos", msg);
        }
    }

    showMessage(text, span) {
        span.style.visibility = "hidden";
        while (span.firstChild) {
            span.removeChild(span.firstChild);
        }
        span.appendChild(document.createTextNode(text));
        span.style.visibility = "visible";
    }

    render() {
        return (
            <div className="main-container">
                <div className="login-container">
                    <div className="login-wrapper">
                        <div className="logo-wrapper">
                            <img src={logo} className="logo" alt="Microservices logo"/>
                            <h1>Microservices</h1>
                        </div>
                        <div className="login-control">
                            <h4>Usuario</h4>
                            <input type="text" className="user-field" name="user" id="user_field"/>
                        </div>
                        <div className="login-control">
                            <h4>Contraseña</h4>
                            <input type="password" className="password-field" name="password" id="pass_field"/>
                        </div>
                        <div className="login-msg">
                            <span id="login_msg"></span>
                        </div>
                        <button className="login-button" onClick={this.getUserData}>
                            Ingresar
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginWindow;