import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Grid from './Grid.jsx';
import Notification from './Notification.jsx';

import '../styles/game.scss';

class Game extends Component {

    constructor(...args) {
        super(...args);
        this.state = {
            msg: 'Click on New Game',
            newGame: true,
            currentPlayer: 1
        }
    }

    handleButtonClick() {
        this.setState({
            newGame: true
        })
    }

    onPlay(lastPlayed) {
        let currentPlayer;
        let msg;

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
    }

    render() {
        const msg = this.state.msg;
        const newGame = this.state.newGame;
        const currentPlayer = this.state.currentPlayer;

        const handleButtonClick = this.handleButtonClick.bind(this);
        const onPlay = this.onPlay.bind(this);

        return (
            <div className="game">
                <Notification msg={ msg }/>
                <Grid newGame={ newGame } currentPlayer={ currentPlayer } onPlay={ onPlay }/>
                <button className="btn-new-game" onClick={ handleButtonClick }> New Game </button>
            </div>
        );
    }
}
export default Game;