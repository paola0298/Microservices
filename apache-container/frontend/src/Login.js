import React from 'react';
import logo from './new_logo.png';

class LoginWindow extends React.Component {
    
    getUserData() {
        var usr = document.getElementById("user_field");
        var pass = document.getElementById("pass_field");
        var msg = document.getElementById("login_msg");
        console.log("User: " + usr.value + ",\nPass: " + pass.value + ".");

        //TODO connect to nodejs container to verify user
        var response = "";
        if (response === "Success") {
            //Load files window
        } else {
            //Show error msg
            usr.value = "";
            pass.value = "";
            msg.value = "Error al iniciar sesión";
            msg.style.visibility = "visible";
        }
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
                            <span id="login_msg">Usuario o contraseña incorrectos</span>
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