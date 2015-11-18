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
        const isDisabled = this.props.disable;
        const onSquareClick = !isDisabled? this.props.onSquareClick: '';

        return (
            firstSquare ?
                <div className="square square--first" onClick={ onSquareClick } >
                    { userChoice }
                </div>
                :
                <div className="square" onClick={ onSquareClick } >
                    { userChoice }
                </div>
        );
    }
}

export default Square;