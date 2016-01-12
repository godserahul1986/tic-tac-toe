/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
/*eslint-disable no-unused-vars*/

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
        const userChoiceElem = (
            userChoice === 'X' ?
                <span className="red-color">
                    { userChoice }
                </span>
                :
                <span className="green-color">
                    { userChoice }
                </span>
        );

        return (
            firstSquare ?
                <div className="square square--first" onClick={ onSquareClick } >
                    { userChoiceElem }
                </div>
                :
                <div className="square" onClick={ onSquareClick } >
                    { userChoiceElem }
                </div>
        );
    }
}

export default Square;