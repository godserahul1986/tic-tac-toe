import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Game from './view/Game.jsx';

class App extends Component {
    constructor(...args) {
        super(...args);
        this.state = {

        };
    }

    render() {
        // const newGame = this.state.newGame;
        return (
            <Game />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));