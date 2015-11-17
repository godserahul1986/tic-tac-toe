import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Square extends Component {

    constructor(...args) {
        super(...args);
    }

    render() {
        const userChoice = 'X';
        const isLastSquare = true;
        return (
            isLastSquare ?
                <div className="square square--last">
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