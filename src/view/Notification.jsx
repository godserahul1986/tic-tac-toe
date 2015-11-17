import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Notification extends Component {

    constructor(...args) {
        super(...args);
    }

    render() {
        const msg = this.props.msg;
        return (
            <span className="notification">
                { msg }
            </span>
        );
    }
}

export default Notification;