import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../styles/notification.scss';

class Notification extends Component {

    constructor(...args) {
        super(...args);
    }

    render() {
        const msg = this.props.msg;
        return (
            <div className="notification">
                { msg }
            </div>
        );
    }
}

export default Notification;