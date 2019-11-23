import React from 'react';
import logo from './new_logo.png';

class LoginWindow extends React.Component {

    getUserData = (e) => {
        var usr = document.getElementById("user_field"),
            pass = document.getElementById("pass_field"),
            msg = document.getElementById("login_msg");

        var auth_request = `http://localhost:8001/users/u=${usr.value}&p=${pass.value}`;

        fetch(auth_request).then((response) => {
            console.log("Response: " + http.responseText);
            this.handleResponse(usr, pass, msg, http.responseText);
        }).then((data) => {
            console.log("Data: " + data);
        }).catch(() => {
            console.log("Failed");
            this.showMessage("No se puede conectar con el servicio de autenticación, inténtelo de nuevo", msg);
        });
    }

    handleResponse(usr, pass, msg, response) {
        var json = JSON.parse(response);
        console.log("JSON: " + JSON.stringify(json));

        switch (json.status) {
            case "success":
                //Parse and get user info
                let user = {
                    name: json.user,
                    permissions: json.permissions,
                    usedStorage: 15,
                    totalStorage: 100
                }
                this.props.loginSuccess(user);
                break;

            case "password_incorrect":
                //Show error message
                pass.value = "";
                this.showMessage("Contraseña incorrecta", msg);
                break;
                
            case "failed":
                usr.value = "";
                pass.value = "";
                this.showMessage("Usuario o contraseña incorrectos", msg);
                break;

            default:
                this.showMessage("No se puede conectar con el servicio de autenticación, inténtelo de nuevo", msg);
                break;
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