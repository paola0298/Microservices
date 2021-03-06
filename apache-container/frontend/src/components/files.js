import React from 'react'

const Files = ({files}) => {
    return (
        <div className="files-list">
            {
                files.map(file => {
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
                                <button className="download-control control">
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

export default Files;