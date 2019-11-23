import React from 'react'

class Files extends React.Component {

    downloadFile = (file, e) => {

        var user = this.props.user;
        console.log("File to download: " + file.name + " for user " + user);

        var request = `http://localhost:9080/download/f=${file.name}&u=${user}`;
        fetch(request).then((response) => {
            return response.blob();
        }).then((data) => {
            console.log("Raw data: " + data);
            console.log("JSON: " + JSON.stringify(data));
            
        }).catch ( () => {
            console.log("Failed");
        })

    }

    render() {
        var files = this.props.files;

        return (
            <div className="files-list">
                {
                    files.map(file => {
                        
                        let boundfileclick = this.downloadFile.bind(this,file);

                        return (
                            <div className="file-wrapper" key={file.id}>
                                <div className="file-icon">
                                    <i class="fas fa-file-archive"></i>
                                </div>
                                <div className="file-item">
                                    <div className="file-name">
                                        <span>{file.name}</span>
                                    </div>
                                    <div className="file-size">
                                        <span>{file.size}</span>
                                    </div>
                                    <div className="file-date">
                                        <span>{file.date}</span>
                                    </div>
                                </div>
                                <div className="file-controls">
                                    <button className="download-control control" onClick={boundfileclick}>
                                        <i className="fas fa-download"></i>
                                    </button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
        
    }

}

export default Files;