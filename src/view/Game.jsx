import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Grid from './Grid.jsx';
import Notification from './Notification.jsx';

import '../styles/game.scss';

class Game extends Component {

    constructor(...args) {
        super(...args);
        this.state = {
            msg: 'Click on New Game to begin',
            newGame: true,
            currentPlayer: 1,
            winner: ''
        }
    }

    handleButtonClick() {
        const msg = 'Click on New Game to begin';
        this.setState({
            newGame: true,
            winner: '',
            msg
        })
    }

    onPlay(lastPlayed, winner) {
        let currentPlayer;
        let msg;

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
                newGame: false
            })
        } else if (winner === -1) {
            msg = 'Match draw.';
            this.setState({
                msg,
                winner: lastPlayed
            })
        } else {
            msg = `Player ${ lastPlayed } wins.`;
            this.setState({
                msg,
                winner: lastPlayed
            })
        }

    }

    render() {
        const msg = this.state.msg;
        const newGame = this.state.newGame;
        const winner = this.state.winner;
        const currentPlayer = this.state.currentPlayer;

        const handleButtonClick = this.handleButtonClick.bind(this);
        const onPlay = this.onPlay.bind(this);

        return (
            <div className="game">
                <Notification msg={ msg }/>
                <Grid newGame={ newGame } winner={ winner } currentPlayer={ currentPlayer } onPlay={ onPlay }/>
                <button className="btn-new-game" onClick={ handleButtonClick }> New Game </button>
            </div>
        );
    }
}
export default Game;