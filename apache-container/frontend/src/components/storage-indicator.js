import React from 'react'

class StorageIndicator extends React.Component {
    render() {
        return (
            <div className="storage-indicator">
                <h4>Almacenamiento</h4>
                <div className="indicator-background">
                    <div className="indicator-foreground" style={{width:this.props.percentage + "%"}} />
                </div>
                <h6>{this.props.percentage/100*this.props.total} GB de {this.props.total} GB</h6>
            </div>
        );
    }
}

export default StorageIndicator;