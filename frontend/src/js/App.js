import React, { Component } from 'react';
import '../css/App.css';
import { Provider } from 'react-redux';
import store from './store'
import { Game, HighScores } from './components'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">{"Welcome to Kevin's Memory Game"}</h1>
          </header>
          <div id="Game">
            <Game />
          </div>
          <div id="HighScores">
            <HighScores />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
