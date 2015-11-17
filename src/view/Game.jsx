import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Grid from './Grid.jsx';
import Notification from './Notification.jsx';

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
                <Button> New Game </Button>
            </div>
        );
    }
}
export default Game;