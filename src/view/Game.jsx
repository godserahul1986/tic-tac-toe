import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';

import Grid from './Grid.jsx';
import Notification from './Notification.jsx';

import CONST from '../util/CONSTANTS.js';

import '../styles/game.scss';

class Game extends Component {

    constructor(...args) {
        super(...args);
        this.state = {
            msg: 'Click on New Game to begin',
            newGame: true,
            currentPlayer: 1,
            winner: '',
            boardState: _.clone(CONST.NEW_GAME_BOARD_STATE)

        }
    }

    handleButtonClick() {
        const msg = 'Click on New Game to begin';
        const boardState = _.clone(CONST.NEW_GAME_BOARD_STATE);
        this.setState({
            newGame: true,
            winner: '',
            msg,
            boardState
        })
    }

    onPlay(lastPlayed, clickedSquare, boardState) {
        const userChoice = lastPlayed === 1? 'X': 'O';

        let currentPlayer;
        let msg;
        let winner;

        boardState[clickedSquare] = userChoice;

        winner = this.checkWinner(boardState, lastPlayed);

        if (winner === '') {
            if (lastPlayed === 1) {
                currentPlayer = 2;
                msg = 'Next turn: Player 2';

            } else {
                currentPlayer = 1;
                msg = 'Next turn: Player 1';
            }
            this.setState({
                msg,
                currentPlayer,
                newGame: false,
                boardState
            })
        } else if (winner === -1) {
            msg = 'Match draw.';
            this.setState({
                msg,
                winner: lastPlayed,
                boardState
            })
        } else {
            msg = `Player ${ lastPlayed } wins.`;
            this.setState({
                msg,
                winner: lastPlayed,
                boardState
            })
        }
    }

    checkWinner(boardState, currentPlayer) {
        let winner = '';
        let horizontalWin;
        let verticalWin;
        let diagonalWin;

        for (let i=0; i<9; i=i+3) {
            horizontalWin = boardState.slice(i,i+3).join('');
            if (horizontalWin === 'XXX' || horizontalWin === 'OOO') {
                winner = currentPlayer;
            }
        }
        for (let i=0; i<3; i++) {
            verticalWin = boardState[i] + boardState[i+3] + boardState[i+6];
            if (verticalWin === 'XXX' || verticalWin === 'OOO') {
                winner = currentPlayer;
            }
            if (i===0) {
                diagonalWin = boardState[i] + boardState[i+4] + boardState[i+8];
                if (diagonalWin === 'XXX' || diagonalWin === 'OOO') {
                    winner = currentPlayer;
                }
            }
            if (i===2) {
                diagonalWin = boardState[i] + boardState[i+2] + boardState[i+4];
                if (diagonalWin === 'XXX' || diagonalWin === 'OOO') {
                    winner = currentPlayer;
                }
            }
        }
        const isDraw = winner === '' && _.every(boardState, (choice) => {
                return choice !== '';
            });
        return isDraw? -1 : winner;
    }

    render() {
        const msg = this.state.msg;
        const newGame = this.state.newGame;
        const winner = this.state.winner;
        const currentPlayer = this.state.currentPlayer;
        const boardState = this.state.boardState;

        const handleButtonClick = this.handleButtonClick.bind(this);
        const onPlay = this.onPlay.bind(this);

        return (
            <div className="game">
                <Notification msg={ msg }/>
                <Grid newGame={ newGame } winner={ winner } currentPlayer={ currentPlayer } boardState={ boardState } onPlay={ onPlay }/>
                <button className="btn-new-game" onClick={ handleButtonClick }> New Game </button>
            </div>
        );
    }
}
export default Game;