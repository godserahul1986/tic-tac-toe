import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Grid from './Grid.jsx';
import Notification from './Notification.jsx';

import '../styles/game.scss';

class Game extends Component {

    constructor(...args) {
        super(...args);
    }

    render() {
        // const newGame = this.props.newGame;
        const msg = 'Click on New Game to begin...';
        return (
            <div className="game">
                <Notification msg={ msg }/>
                <Grid />
                <button className="btn-new-game"> New Game </button>
            </div>
        );
    }
}
export default Game;