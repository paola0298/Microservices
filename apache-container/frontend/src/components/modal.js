import React from 'react';

class UploadModal extends React.Component {
    
    // uploadFile = () => {
    //     var input = document.getElementById("file-selector-input");
    //     // var userinput = document.getElementById("username-input");

    //     var data = new FormData();
    //     data.append("file", input.files[0]);
    //     data.append("user", this.props.user);
    //     console.log(this.props.user);

    //     fetch("http://localhost:9080/upload", {
    //         method: "POST",
    //         body: data
    //     }).then((response) => {
    //         return response.json();
    //     }).then((data) => {
    //         console.log(data);
    //     }).catch(() => {
    //         console.log("Error uploading file");
    //     });
        
    //     var modal = document.getElementById("modal-container");
    //     modal.style.display = "none";
    // }
    
    render() {
        
        return (
        <div className="modal-container" id="modal-container">
            <div className="modal-content">
                <span className="modal-close">&times;</span>
                <div className="modal-wrapper">
                    <h3>Subir archivos</h3>
                    {/* <form method="post" encType="multipart/form-data" action="mysql-java:3030/upload"> */}
                    <form method="post" encType="multipart/form-data" action="http://localhost:9080/upload">
                        <input type="file" name="file" id="file-selector-input" />
                        <input type="text" name="userName" value={this.props.user} id="username-input" />
                        <input type="submit" value="Subir" />
                        {/* <button onClick={this.uploadFile} > */}
                            {/* Subir */}
                        {/* </button> */}
                    </form>
                </div>
            </div>
        </div>);
    }
}

export default UploadModal;
