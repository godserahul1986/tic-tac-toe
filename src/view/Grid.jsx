import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';

import Square from './Square.jsx';

import '../styles/grid.scss';

class Grid extends Component {

    constructor(...args) {
        super(...args);
        this.state = {
            userChoices: ['', '', '', '', '', '', '', '', ''],
        }
    }

    onSquareClick(currentPlayer, userChoices, clickedSquare) {
        const userChoice = currentPlayer === 1? 'X': 'O';
        let winner;
        userChoices[clickedSquare] = userChoice;
        this.setState({
            userChoices
        });
        winner = this.checkWinner(userChoices);
        this.props.onPlay(currentPlayer, winner);
    }

    checkWinner(userChoices) {
        let winner = false;
        let horizontalWin;
        let verticalWin;
        let diagonalWin;

        for (let i=0; i<9; i=i+3) {
            horizontalWin = userChoices.slice(i,i+2).join();
            if (horizontalWin === 'XXX' || horizontalWin === 'OOO') {
                winner = true;
            }
        }
        for (let i=0; i<3; i++) {
            verticalWin = userChoices[i] + userChoices[i+3] + userChoices[i+6];
            if (verticalWin === 'XXX' || verticalWin === 'OOO') {
                winner = true;
            }
            if (i===0) {
                diagonalWin = userChoices[i] + userChoices[i+4] + userChoices[i+8];
                if (diagonalWin === 'XXX' || diagonalWin === 'OOO') {
                    winner = true;
                }
            }
            if (i===2) {
                diagonalWin = userChoices[i] + userChoices[i+2] + userChoices[i+4];
                if (diagonalWin === 'XXX' || diagonalWin === 'OOO') {
                    winner = true;
                }
            }
        }
        return winner;
    }

    getGrid(newGame, currentPlayer, winner) {
        let userChoices = this.state.userChoices;

        let squares = [];
        let square;
        let userChoice;
        let disable;

        if (newGame) {
            userChoices = ['', '', '', '', '', '', '', '', ''];
        }

        for (let i = 0; i < 9; i++) {
            userChoice = userChoices[i];

            disable = winner || userChoice? true : false;

            const onSquareClick = this.onSquareClick.bind(this, currentPlayer, userChoices, i);

            if (i % 3 === 0) {
                square = (
                    <Square key={ i } onSquareClick={ onSquareClick } currentPlayer={ currentPlayer } userChoice={ userChoice } disable={ disable } firstSquare />
                );
                squares.push(square);
            } else {
                square = (
                    <Square key={ i } onSquareClick={ onSquareClick } currentPlayer={ currentPlayer } userChoice={ userChoice } disable={ disable } />
                );
                squares.push(square);
            }
        }
        return squares;
    }

    render() {
        const currentPlayer = this.props.currentPlayer;
        const winner = this.props.winner;
        const newGame = this.props.newGame;
        const squares = this.getGrid(newGame, currentPlayer, winner);

        return (
            <div className="grid">
                { squares }
            </div>
        );
    }

}

export default Grid;