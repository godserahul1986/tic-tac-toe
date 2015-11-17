import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Square from './Square.jsx';

class Grid extends Component {

    constructor(...args) {
        super(...args);
    }

    getGrid(newGame) {
        let squares;

        for (let i = 1; i < 10; i++) {
            if (i % 3 === 0) {
                squares += (
                    <Square userChoice="X" lastSquare/>
                );
            } else {
                squares += (
                    <Square userChoice="O"/>
                );
            }
        }
    }

    render() {
        const newGame = this.props.newGame;
        const squares = this.getGrid(newGame);
        return (
        {squares}
        );
    }

}

export default Grid;