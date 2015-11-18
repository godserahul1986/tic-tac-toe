import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
        userChoices[clickedSquare] = userChoice;
        this.setState({
            userChoices
        });
        this.props.onPlay(currentPlayer);
    }

    getGrid(newGame, currentPlayer) {
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
            disable = userChoice? true : false;

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
        const newGame = this.props.newGame;
        const squares = this.getGrid(newGame, currentPlayer);

        return (
            <div className="grid">
                { squares }
            </div>
        );
    }

}

export default Grid;