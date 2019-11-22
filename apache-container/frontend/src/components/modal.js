import React from 'react';

class UploadModal extends React.Component {
    
    openFileChooser() {
        console.log("Pressed..!");
    }
    
    render() {
        
        return (
        <div className="modal-container" id="modal-container">
            <div className="modal-content">
                <span className="modal-close">&times;</span>
                <div className="modal-wrapper">
                    <h3>Subir archivos</h3>
                    <form method="post" encType="multipart/form-data" action="mysql-java:3030/upload">
                        <input type="file" name="files" multiple />
                        <input type="submit" value="Subir" />
                    </form>
                </div>
            </div>
        </div>);
    }
}

export default UploadModal;
