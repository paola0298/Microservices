import React from 'react';

class UserGreeting extends React.Component {

    render() {
    return (
        <h3 className="user-greeting-label">
            Bienvenid@, {this.props.name}
        </h3>);
    }
}

export default UserGreeting;
