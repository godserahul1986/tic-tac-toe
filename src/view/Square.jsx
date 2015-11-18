import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../styles/square.scss';

class Square extends Component {

    constructor(...args) {
        super(...args);
    }

    render() {
        const userChoice = this.props.userChoice;
        const firstSquare = this.props.firstSquare;
        return (
            firstSquare ?
                <div className="square square--first">
                    { userChoice }
                </div>
                :
                <div className="square">
                    { userChoice }
                </div>
        );
    }
}

export default Square;