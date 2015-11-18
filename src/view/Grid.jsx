import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Square from './Square.jsx';

import '../styles/grid.scss';

class Grid extends Component {

    constructor(...args) {
        super(...args);
    }

    getGrid(newGame) {
        let squares = [];
        let square;

        for (let i = 1; i < 10; i++) {
            if ((i-1) % 3 === 0) {
                square = (
                    <Square key={ i } userChoice="X" firstSquare/>
                );
                squares.push(square);
            } else {
                square = (
                    <Square key={ i } userChoice="O" />
                );
                squares.push(square);
            }
        }
        return squares;
    }

    render() {
        const newGame = this.props.newGame;
        const squares = this.getGrid(newGame);
        return (
            <div className="grid">
                { squares }
            </div>
        );
    }

}

export default Grid;