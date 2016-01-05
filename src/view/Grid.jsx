import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Square from './Square.jsx';

import '../styles/grid.scss';

class Grid extends Component {

    constructor(...args) {
        super(...args);
    }

    getGrid(currentPlayer, winner) {
        let boardState = this.props.boardState;

        let squares = [];
        let square;
        let userChoice;
        let disable;

        for (let i = 0; i < 9; i++) {
            userChoice = boardState[i];

            disable = winner || userChoice? true : false;

            const onSquareClick = this.props.onPlay.bind(this, currentPlayer, i, boardState);

            if (i % 3 === 0) {
                square = (
                    <Square key={ i } onSquareClick={ onSquareClick } userChoice={ userChoice } disable={ disable } firstSquare />
                );
                squares.push(square);
            } else {
                square = (
                    <Square key={ i } onSquareClick={ onSquareClick } userChoice={ userChoice } disable={ disable } />
                );
                squares.push(square);
            }
        }
        return squares;
    }

    render() {
        const currentPlayer = this.props.currentPlayer;
        const winner = this.props.winner;
        const squares = this.getGrid(currentPlayer, winner);

        return (
            <div className="grid">
                <div className="grid-borders">
                    <div className="grid-border-1" />
                    <div className="grid-border-2" />
                    <div className="grid-border-3" />
                    <div className="grid-border-4" />
                </div>
                <div className="strike-winner">
                    <div className="strikeout" />
                </div>
                { squares }
            </div>
        );
    }

}

export default Grid;